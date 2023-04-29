


export const todoReducer = (state = {todos: []}, action) => {
    if (action.type === 'ADD_TODO') {
        return state
    }

    return state
}

export const addTodo = payload => ({type: 'ADD_TODO', payload})