import {FETCH_SMURFS , FETCH_SUCCESS, FETCH_FAIL, FETCH_ADD, FETCH_ERROR} from '../actions'


export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

const reducer = (state = initialState, action)=>{
// Start Case
    switch (action.type) {
        case FETCH_SMURFS:
            return {
                ...state,
                smurfs:[],
                isLoading: true,
                error:''
            }
// Success Case
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: ''
            }
// Fail Case
        case FETCH_FAIL:
            return {
                ...state,
                smurf:[],
                isLoading: false,
                error: action.payload
            }
// Smurf Add Case
        case FETCH_ADD:
            return {
                ...state,
                smurfs:[...state.smurfs, {id:action.payload.id, name:action.payload.name, position:action.payload.position, description:action.payload.description, nickname:action.payload.nickname}]
            }

        case FETCH_ERROR:
            return {
                    ...state,
                    error: action.payload
                }

        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.