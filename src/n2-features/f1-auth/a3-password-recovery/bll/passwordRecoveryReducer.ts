export const PASSWORD_RECOVERY = 'friday-project/passwordRecoveryReducer/PASSWORD_RECOVERY';


const initialState = {

};

type InitialStateType = typeof initialState;

const passwordRecoveryReducer = (state: InitialStateType = initialState, action: PasswordRecoveryActionType) => {
    switch (action.type) {
        case PASSWORD_RECOVERY: {
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
};

type PasswordRecoveryActionType = {
type: typeof PASSWORD_RECOVERY
}

const passwordRecoveryAC = ():PasswordRecoveryActionType => {
    return {
        type: PASSWORD_RECOVERY
    }
}

export default passwordRecoveryReducer;