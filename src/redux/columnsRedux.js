import shortid from "shortid";

const ADD_COLUMN = 'app/columnform/ADD_COLUMN';

export const addColumn = (title, icon, listId) => ({ type: ADD_COLUMN, payload: { title, icon, listId} });

export const getColumnsByList = ({columns} ,listId) => columns.filter(column => column.listId === listId);


const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default columnsReducer;