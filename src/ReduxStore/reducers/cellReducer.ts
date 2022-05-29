import { ActionTypes } from "../action-types";
import { Action } from "../actions";
import Cell from "../cell";

interface CellState {
    loading: boolean,
    error: string | null,
    order:string[],
    data: {
        [key:string]: Cell
    },

}

const initialState:CellState = {
    loading: false,
    error: null,
    order:[],
    data: {}

}

function createId() {
    return Math.random().toString(36).slice(2, 5);
}

const cellReducer = (state: CellState = initialState, action: Action): CellState =>  {
    switch(action.type){
        case ActionTypes.UPDATE_CELL:
            const{ id, content } = action.payload;
            return {
                ...state,
                data:{
                    ...state.data, [id]: {
                        ...state.data[id], content: content
                    }
                }
            }
        case ActionTypes.DELETE_CELL:
            let temp = {...state.data}
            let tempOrder = [...state.order];
            let targetIndex = tempOrder.findIndex((id) => id == action.payload);
            tempOrder.splice(targetIndex, 1);
            delete temp[action.payload];
            return {
                ...state,
                order: tempOrder,
                data: temp
            }
        case ActionTypes.MOVE_CELL:
            let tempOrdering = [...state.order];
            let movingIndex = tempOrdering.findIndex((id) => id == action.payload.id);
            if(movingIndex == 0 || movingIndex > tempOrdering.length - 1){
                return state;
            }
            if(action.payload.direction == "up"){
                let t = tempOrdering[movingIndex - 1];
                tempOrdering[movingIndex - 1] = tempOrdering[movingIndex];
                tempOrdering[movingIndex] = t;
            }else{
                let t = tempOrdering[movingIndex + 1];
                tempOrdering[movingIndex + 1] = tempOrdering[movingIndex];
                tempOrdering[movingIndex] = t;
            }
            return {
                ...state,
                order: tempOrdering
            };
        case ActionTypes.INSERT_CELL_BEFORE:
            let newType: Cell = {
                id: createId(),
                type: action.payload.type,
                content: ""
            }
            let tOrder = [...state.order];
            let tData = {...state.data};
            let mov = tOrder.findIndex((id) => id == action.payload.id);
            tOrder.splice(mov, 0, newType.id);
            tData[newType.id] = newType;
            return {
                ...state,
                order: tOrder,
                data: tData
            }
        default:
            return state;
    }
}

export default cellReducer;