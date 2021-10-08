import axios from 'axios';

//Case Exports
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const FETCH_ADD = 'FETCH_ADD';

// Dispatch Axios call
export const fetchSmurfs = () => dispatch => {
    dispatch(fetchSmurfs());
    axios.get('')
    .then(resp => {
        dispatch(fetchSmurfs(resp.data));
    })
    .catch(err => {
        dispatch(error(err));
    })
}

//Actions below

export const fetchStart = (smurf)=> {
    return ({type: FETCH_START , payload:smurf})
}

export const fetchSuccess = (smurf)=> {
    return ({type:FETCH_SUCCESS, payload:smurf})
}

export const fetchFail = (error)=> {
    return ({type:FETCH_FAIL, payload:error});
}

export const fetchAdd = (smurf)=> {
    return ({type:FETCH_ADD, payload:smurf});
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.