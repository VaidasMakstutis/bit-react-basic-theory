import { GET_ALL_LIKES, GET_ALL_LIKES_FROM_SERVER, UPDATE_LIKE } from "../Constants/bookActions";

function likesReducer(state, action) {

    let likes = [...state];
    let ls, time;
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
        case GET_ALL_LIKES_FROM_SERVER:
            ls = localStorage.getItem('likedTime');
            if (null === ls) {
                localStorage.setItem('likedTime', 0);
                time = 0
            } else {
                time = parseInt(ls);
            }
            const data = action.payload.likes[0];
            const serverTime = data.time ? parseInt(data.time) : 0;
            if (serverTime && serverTime !== time) {
                likes = JSON.parse(data.likes);
                localStorage.setItem('likedTime', serverTime);
                localStorage.setItem('likedBooks', JSON.stringify(likes));
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