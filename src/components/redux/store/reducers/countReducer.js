import { ACTIONS } from "../actions/actionTypes";

//Count Reducer function
// export const countReducer = (state = 0, action) => {
//     if(action.type === "SUBTRACT") {
//         console.log(action.payload)
//         return state - 1;
//     }
//     if(action.type === "ADD") {
//         return state + 1;
//     }
//     if(action.type === "RESET") {
//         return state = 0;
//     }
//     if(action.type === "ADD_NUMBER") {
//         return state + action.payload;   //instead of state + 5;
//         //the info is coming from the dispatch as a payload
//     }
//     return state;
// }



//Defining actionTypes
export const countReducer = (state = 0, action) => {
    if(action.type === ACTIONS.SUBTRACT) {
        console.log(action.payload)
        return state - 1;
    }
    if(action.type === ACTIONS.ADD) {
        return state + 1;
    }
    if(action.type === ACTIONS.RESET) {
        return state = 0;
    }
    if(action.type === ACTIONS.ADD_NUMBER) {
        return state + action.payload;   //instead of state + 5;
        //the info is coming from the dispatch as a payload
    }
    return state;
}

