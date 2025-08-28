import { createStore } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';

export const getFilteredCards = ({ cards, searchString }, columnId) => 
  cards.filter(card => card.columnId === columnId && strContains(card.title, searchString)
);

export const getAllColumns = state => state.columns;

export const addColumn = (data, listId) => ({ type: 'ADD_COLUMN', payload: { ...data, listId} });

export const addCard = (title, columnId) => ({ type: 'ADD_CARD', payload: { ...title, columnId }});

export const searchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

export const getListById = ({lists}, listId) => lists.find(list => listId === list.id);

export const getColumnsByList = ({columns} ,listId) => columns.filter(column => column.listId === listId);

export const getAllLists = state => state.lists;

export const addFavoriteStyle = payload => ({ type: 'ADD_FAVORITE_STYLE', payload});

export const favoriteCard = state => state.cards.filter(card => !card.isFavorite === true);
 
const reducer = (state, action) => {
  if(action.type === 'ADD_COLUMN') return { 
    ...state, 
    columns: [...state.columns, action.payload]
  };

  if(action.type === 'ADD_CARD') return {
    ...state, cards: [...state.cards, action.payload]
  }

  if(action.type === 'UPDATE_SEARCHSTRING') return { 
    ...state, searchString: action.payload
  };

  if(action.type === 'ADD_FAVORITE_STYLE') return {
    ...state, cards: state.cards.map(card => 
      card.id === action.payload ? {...card, isFavorite: !card.isFavorite} : card
    )
  }
  return state;
};

const store = createStore(
  reducer, //if store is change this will be activated
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;