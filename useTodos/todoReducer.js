
export const todoReducer = (initialState, action) =>{

    switch (action.type){
        case '[TODO] add todo':
        return [...initialState, action.payLoad ];
        // throw new Error('Action.type = ABC no esta implementada');
        case '[TODO] Remove todo':
            return initialState.filter(todo => todo.id !== action.payLoad);

        case '[TODO] toggle todo':
            return initialState.map(todo => {
                if(todo.id === action.payLoad){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });

        default:
            return initialState;
    }
}