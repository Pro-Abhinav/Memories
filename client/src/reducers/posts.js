export default (posts=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            console.log(action.payload, "insideReducers");
            return action.payload;
        case 'CREATE': 
            return [ ...posts, action.payload ];
        default:
            return posts;
    }
}