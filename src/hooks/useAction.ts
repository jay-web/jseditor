import {useDispatch} from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../ReduxStore";


export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actionCreators, dispatch);
}