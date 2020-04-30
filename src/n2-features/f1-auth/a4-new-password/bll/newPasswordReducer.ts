export const NEW_PASSWORD = 'friday-project/newPasswordReducer/NEW_PASSWORD';


const initialState = {

};

type InitialStateType = typeof initialState;

const newPasswordReducer = (state: InitialStateType = initialState, action: NewPasswordActionType) => {
    switch (action.type) {
        case NEW_PASSWORD: {
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
};

type  NewPasswordActionType = {
type: typeof NEW_PASSWORD
}

const newPasswordAC = ():NewPasswordActionType => {
    return {
        type: NEW_PASSWORD
    }
}

export default newPasswordReducer;