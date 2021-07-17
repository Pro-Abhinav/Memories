export default (posts=[], action) => {
    switch (action.type) {
        case 'DELETE':
            return posts.filter((post) => post._id != action.payload);
        case 'UPDATE':
        case 'LIKE':
            console.log(action.payload, "insideUpdateReducer")
            return posts.map((post) => post._id == action.payload._id ? action.payload : post);
        case 'FETCH_ALL':
            console.log(action.payload, "insideReducers");
            return action.payload;
        case 'CREATE': 
            return [ ...posts, action.payload ];
        default:
            return posts;
    }
}