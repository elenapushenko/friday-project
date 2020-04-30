export const REGISTER = 'friday-project/registerReducer/REGISTER';


const initialState = {

};

type InitialStateType = typeof initialState;

const registerReducer = (state: InitialStateType = initialState, action: RegisterActionType) => {
    switch (action.type) {
        case REGISTER: {
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
};

type RegisterActionType = {
type: typeof REGISTER
}

const registerAC = ():RegisterActionType => {
    return {
        type: REGISTER
    }
}

export default registerReducer;