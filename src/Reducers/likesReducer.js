import { GET_ALL_LIKES, UPDATE_LIKE } from "../Constants/bookActions";

function likesReducer(state, action) {

    let likes = [...state];
    let ls;
    switch (action.type) {
        case GET_ALL_LIKES:
            ls = localStorage.getItem('likedBooks');
            if (null === ls) {
                localStorage.setItem('likedBooks', JSON.stringify([]));
                likes = [];
            } else {
                likes = JSON.parse(ls);
            }
            break;
        case UPDATE_LIKE:
            const bookId = parseInt(action.payload);
            const likeIndex = likes.indexOf(bookId);
            console.log(action, likeIndex);
            if (-1 === likeIndex) {
                likes.push(bookId);
            } else {
                likes.splice(likeIndex, 1);
            }
            localStorage.setItem('likedTime', Date.now());
            localStorage.setItem('likedBooks', JSON.stringify(likes));
            break;
        default:
    }

    return likes;
}

export default likesReducer;