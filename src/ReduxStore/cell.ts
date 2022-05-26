export type CellTypes = 'code' | 'markdown';

export default interface Cell {
    id:string,
    type: CellTypes,
    content: string
}