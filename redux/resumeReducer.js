import { SET_RESUME_DATA } from "./resumeActions";

const initialState = {
    personalInfo: {},
    skills: [],
    education: [],
    projects: [],
    certificates: [],
    experience: [],
    passion: [],
};

export const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESUME_DATA:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
