import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

export const getFilteredCards = ({ cards, searchString }, columnId) => 
  cards.filter(card => card.columnId === columnId && strContains(card.title, searchString)
);

export const getAllColumns = state => state.columns;

export const addColumn = (title, icon, listId) => ({ type: 'ADD_COLUMN', payload: { title, icon, listId} });

export const addCard = (title, columnId) => ({ type: 'ADD_CARD', payload: { title, columnId }});

export const searchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

export const getListById = ({lists}, listId) => lists.find(list => listId === list.id);

export const getColumnsByList = ({columns} ,listId) => columns.filter(column => column.listId === listId);

export const getAllLists = state => state.lists;

export const addFavoriteStyle = payload => ({ type: 'ADD_FAVORITE_STYLE', payload});

export const favoriteCard = state => state.cards.filter(card => !card.isFavorite === true);

export const addList = (title, description) => ({ type: 'ADD_LIST', payload: { title, description}});
 

/*const reducer = (state, action) => {
  const newState = {
    lists: listsReducer(state.lists, action),
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    searchString: searchStringReducer(state.searchString, action)
  };

  return newState;
};*/

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer, //if store is change this will be activated
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;