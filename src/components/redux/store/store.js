import {createStore, combineReducers} from "redux"
import { countReducer } from "./reducers/countReducer";
import { authReducer } from "./reducers/authReducer";


//combine reducers here
const reducers = combineReducers({
    count: countReducer,
    isLoggedIn: authReducer,
})

//create store
const store = createStore(
    //countReducer,
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
