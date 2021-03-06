import { ActionTypes } from "../action-types";
import {CellTypes } from "../cell";

export type Directions = 'up' | 'down';

export interface MoveCellAction {
    type: ActionTypes.MOVE_CELL;
    payload: {
        id: string,
        direction: Directions
    }
};

export interface DeleteCellAction {
    type: ActionTypes.DELETE_CELL,
    payload: string
}

export interface InsertCellAfterAction {
    type: ActionTypes.INSERT_CELL_AFTER,
    payload: {
        id: string | null,
        type: CellTypes
    }
}

export interface UpdateCellAction {
    type: ActionTypes.UPDATE_CELL,
    payload: {
        id:string,
        content: string
    }
}

export type Action = 
    MoveCellAction
|   DeleteCellAction
|   InsertCellAfterAction
|   UpdateCellAction