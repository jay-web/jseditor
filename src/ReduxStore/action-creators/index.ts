import { ActionTypes } from "../action-types";
import { Action,  MoveCellAction, DeleteCellAction, UpdateCellAction, InsertCellBeforeAction } from "../actions";
import { Directions } from "../actions";
import { CellTypes } from "../cell";

export const updateCell = (id:string, content:string): UpdateCellAction => {
    return {
        type: ActionTypes.UPDATE_CELL,
        payload: {
            id: id,
            content: content
        }
    }
}

export const moveCell = (id:string, direction: Directions): MoveCellAction => {
    return {
        type: ActionTypes.MOVE_CELL,
        payload: {
            id: id,
            direction: direction
        }
    }
}

export const deleteCell = (id:string): DeleteCellAction => {
    return {
        type: ActionTypes.DELETE_CELL,
        payload: id
    }
}

export const insertCellBefore = (id:string | null, type: CellTypes): InsertCellBeforeAction => {
    return {
        type: ActionTypes.INSERT_CELL_BEFORE,
        payload:{
            id:id,
            type:type
        }
    }
}


