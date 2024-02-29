import { ACTIONS } from "../actions/actionTypes";


// export const authReducer = (state= true, action) => {
//     if(action.type === "TOGGLE_AUTH") {
//         return state = !state;
//     }
//     return state;
// }



//Defining actionTypes
export const authReducer = (state= true, action) => {
    if(action.type === ACTIONS.TOGGLE_AUTH) {
        return state = !state;
    }
    return state;
}
