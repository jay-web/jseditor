import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { ActionTypes } from "./action-types";


export const store = createStore(reducer, {}, applyMiddleware(thunk));

store.dispatch({
    type: ActionTypes.INSERT_CELL_AFTER,
    payload:{
        id: null,
        type: "markdown"
    }
});
store.dispatch({
    type: ActionTypes.INSERT_CELL_AFTER,
    payload:{
        id: null,
        type: "markdown"
    }
});
store.dispatch({
    type: ActionTypes.INSERT_CELL_AFTER,
    payload:{
        id: null,
        type: "code"
    }
});




console.log(store.getState());