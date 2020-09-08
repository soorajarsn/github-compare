import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_ERROR } from "./userConsts"

const initialState = {
    users:[],
    loading:false,
    error:""
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_USER_REQUEST:
            return {...state,loading:true};
        case LOAD_USER_SUCCESS:
            return {loading:false,error:'',users:[...state.users,action.payload]};
        case LOAD_USER_ERROR:
            return {...state,loading:false,error:action.payload};
        default:
            return state;
    }
}
export default userReducer;