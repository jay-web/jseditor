import { combineReducers } from "redux";
import cellReducer from "./cellReducer";


const reducer = combineReducers({
    cell: cellReducer
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;