const initializeState = {
    tasks : [],
}


const reducer = (state = initializeState, action) => {
    switch (action.type) {
        case 'ADD_TASK_START': {
            return {
                ...state,
                tasks : [...state.tasks,action.task],
            }
        }
        case 'DELETE_TASK_START': {
            return {
                tasks : state.tasks.filter((item) => (item.id) != (action.id)   )
            }
        }
        case 'UPDATE_TASK_START': {
            const indexU = state.tasks.findIndex(task =>task.id === action.id)
            return {
                ...state,
                tasks : state.tasks.map((task,i) => i === indexU ? {...task,task : action.task,isEdit : true} : task)
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;