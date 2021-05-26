import {
    RESET_ALL_2_INITIAL_STATE,
}
    from '../constants';

const initialState = {
    userId: "7a3b9ba8d3cd48d697a5029e12958e4a",
};

export function customerFrontEnd(state = initialState, action) {
    switch (action.type) {
        case RESET_ALL_2_INITIAL_STATE:
            return { ...initialState }
        default:
            return state;
    }
}