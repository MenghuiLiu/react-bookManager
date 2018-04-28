const initialState = {
    data : []
};

function bookReducer(state=initialState ,action){
    switch(action.type){
        case 'INIT_BOOK_ACTION':
            return Object.assign({},state,{
                data : [...action.payload]
            })

        case 'ADD_BOOK_ACTION' :
            return Object.assign({},state,{
                data : [...state.data,action.payload]
            })

        case 'DELETE_BOOK_ACTION' :
            return Object.assign({},state,{
                data : state.data.filter(item => item.id != action.payload)
            })

        case 'UPDATE_BOOK_ACTION' :
            console.log("===========修改传递过来的参数:"+JSON.stringify(action.payload));
            return Object.assign({},state,{
                data : state.data.map(item => {
                    if(item.id == action.payload.id){
                        return Object.assign({},item,action.payload);
                    }else{
                        return item;
                    }
                })
            })
        default:
            return state
    }
}

export default bookReducer;