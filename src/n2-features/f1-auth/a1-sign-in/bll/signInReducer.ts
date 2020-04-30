export const SIGN_IN = 'friday-project/signInReducer/SIGN_IN';


const initialState = {

};

type InitialStateType = typeof initialState;

const signInReducer = (state: InitialStateType = initialState, action: SignInActionType) => {
    switch (action.type) {
        case SIGN_IN: {
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
};

type SignInActionType = {
type: typeof SIGN_IN
}

const signInAC = ():SignInActionType => {
    return {
        type: SIGN_IN
    }
}

export default signInReducer;