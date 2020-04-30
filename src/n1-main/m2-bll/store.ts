import {applyMiddleware, createStore, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import signInReducer from "../../n2-features/f1-auth/a1-sign-in/bll/signInReducer";
import registerReducer from "../../n2-features/f1-auth/a2-register/bll/registerReducer";
import passwordRecoveryReducer from "../../n2-features/f1-auth/a3-password-recovery/bll/passwordRecoveryReducer";
import newPasswordReducer from "../../n2-features/f1-auth/a4-new-password/bll/newPasswordReducer";
import profileReducer from "../../n2-features/f1-auth/a5-profile/bll/profileReducer";



const reducers =  combineReducers({
    signInPage: signInReducer,
    registerPage: registerReducer,
    passwordRecoveryPage: passwordRecoveryReducer,
    newPasswordPage: newPasswordReducer,
    profilePage: profileReducer
});

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;