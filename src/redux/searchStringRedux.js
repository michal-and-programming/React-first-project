const UPDATE_SEARCHSTRING = 'app/searchform/UPDATE_SEARCHSTRING';

export const searchString = payload => ({ type: UPDATE_SEARCHSTRING, payload });

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload
    default:
      return statePart;
  }
};

export default searchStringReducer;