import { GET_ALL_FROM_SERVER, GET_ALL_LIKES, GET_ALL_LIKES_FROM_SERVER, SELECTOR_DID_CHANGED, UPDATE_LIKE } from "../Constants/bookActions";

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

export function actionGetAllLikes() {
    return {
        type: GET_ALL_LIKES,
    }
}

export function actionGetAllLikesFromServer(likes) {
    return {
        type: GET_ALL_LIKES_FROM_SERVER,
        payload: likes
    }
}

export function actionUpdateLike(bookId) {
    return {
        type: UPDATE_LIKE,
        payload: bookId
    }
}