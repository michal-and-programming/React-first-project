import shortid from "shortid";
import { strContains } from '../utils/strContains';

const ADD_CARD = 'app/cardform/ADD_CARD';
const ADD_FAVORITE_STYLE = 'app/card/ADD_FAVORITE_STYLE';
const REMOVE_CARD = 'app/card/REMOVE_CARD';

export const getFilteredCards = ({ cards, searchString }, columnId) => 
  cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const addCard = (title, columnId) => ({ type: ADD_CARD, payload: { title, columnId }});

export const addFavoriteStyle = payload => ({ type: ADD_FAVORITE_STYLE, payload});

export const favoriteCard = state => state.cards.filter(card => !card.isFavorite === true);

export const removeCard = payload => ({ type: REMOVE_CARD, payload})

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case ADD_FAVORITE_STYLE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    case REMOVE_CARD:
      return statePart.filter(card => card.id !== action.payload);
      
    default:
      return statePart;
  }
};

export default cardsReducer;