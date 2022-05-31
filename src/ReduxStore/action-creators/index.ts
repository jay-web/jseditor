import { ActionTypes } from "../action-types";
import { Action,  MoveCellAction, DeleteCellAction, UpdateCellAction, InsertCellAfterAction } from "../actions";
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

export const insertCellAfter = (id:string | null, type: CellTypes): InsertCellAfterAction => {
    return {
        type: ActionTypes.INSERT_CELL_AFTER,
        payload:{
            id:id,
            type:type
        }
    }
}


