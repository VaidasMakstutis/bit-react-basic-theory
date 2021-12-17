import { GET_ALL_FROM_SERVER, SELECTOR_DID_CHANGED } from "../Constants/bookActions";

export function actionGetAllFromServer(books) {
    return {
        type: GET_ALL_FROM_SERVER,
        payload: books
    }
}

export function actionSelectorDidChanged(selectors) {
    return {
        type: SELECTOR_DID_CHANGED,
        payload: selectors
    }
}