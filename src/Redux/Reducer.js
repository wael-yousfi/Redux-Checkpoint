import { ADD, EDIT, FILTER, REMOVE } from "./ActionType";

const initialState={
    task:[],
    filterDone:false,
    filterNotDone:false
}

const addReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD:
        return {...state, task : [...state.task, action.payload]};
        case FILTER:
            return {...state, filterDone: action.payload.filterDone,
                                filterNotDone: action.payload.filterNotDone}
        case EDIT:
            return  {...state, task:state.task.map( el => el.id==action.payload.id? {...el, description:action.payload.description,
                                                                                    isEdit:action.payload.isEdit,
                                                                                    isDone:action.payload.isDone}:el)}
        case REMOVE:
            return{...state, task: state.task.filter( el => el.id!=action.payload )}
        default:
            return state; 
    }
}

export default addReducer;  