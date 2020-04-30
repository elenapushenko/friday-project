export const PROFILE = 'friday-project/profileReducer/PROFILE';


const initialState = {

};

type InitialStateType = typeof initialState;

const profileReducer = (state: InitialStateType = initialState, action:  ProfileActionType) => {
    switch (action.type) {
        case PROFILE: {
            return {
                ...state,
            }
        }
        default: {
            return state;
        }
    }
};

type  ProfileActionType = {
type: typeof PROFILE
}

const profiledAC = ():ProfileActionType => {
    return {
        type: PROFILE
    }
}

export default profileReducer;