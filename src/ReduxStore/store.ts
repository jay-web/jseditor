import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { ActionTypes } from "./action-types";
import Cell from "./cell";

export const store = createStore(reducer, {}, applyMiddleware(thunk));

store.dispatch({
    type: ActionTypes.INSERT_CELL_BEFORE,
    payload:{
        id: null,
        type: "markdown"
    }
});
store.dispatch({
    type: ActionTypes.INSERT_CELL_BEFORE,
    payload:{
        id: null,
        type: "markdown"
    }
});
store.dispatch({
    type: ActionTypes.INSERT_CELL_BEFORE,
    payload:{
        id: null,
        type: "code"
    }
});




console.log(store.getState());