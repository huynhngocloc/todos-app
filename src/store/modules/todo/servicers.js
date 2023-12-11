import {v4 as uuidv4} from "uuid"
// random id bang thu vien theo thoi gian
export function insertTodo(value) {
    return {
        id: uuidv4(),
        value,
        status: false
    }
}