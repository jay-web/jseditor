import {useSelector, TypedUseSelectorHook} from "react-redux";
import {RootState} from "../ReduxStore";

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector;