import {
    RESET_ALL_2_INITIAL_STATE,
    HISTORY_TASK_ALL,
    LESSON_TASK_ALL,
    LOGIN_TASK_ALL,
    EVALUATION_TASK_ALL,
    SELECT_TASK,
    UPDATE_REQUEST_HEADER_GROUP_ID,
    UPDATE_REQUEST_HEADER_USER_ID,
    CURRENT_CHOSED_PERSONA,
    LESSON_ALL,
    UPDATE_TRANSCRIPTION
} from '../consts';

const initialState = {
    userId: "7a3b9ba8d3cd48d697a5029e12958e4a",
    lesson_all: [],
    lesson_task_all: [],
    select_task: {},
    requestHeaderUserId: 'test-user-id',
    requestHeaderGroupId: 'G1test-agent,G6test-agent,G5ASEmanager,I3ARPadministrators',
    currentChosedPersona: {},
    login_task_all: {},
    transcript_one_time: ''
};

export function customerFrontEnd(state = initialState, action) {
    switch (action.type) {
        case RESET_ALL_2_INITIAL_STATE:
            return { ...initialState }
        case HISTORY_TASK_ALL:
            return {
                ...state,
                history_task_all: action.payload
            }
        case LESSON_TASK_ALL:
            return {
                ...state,
                lesson_task_all: action.payload
            }
        case LOGIN_TASK_ALL:
            return {
                ...state,
                login_task_all: action.payload
            }
        case EVALUATION_TASK_ALL:
        return {
                ...state,
                evaluation_task_all: action.payload
            }    
        case SELECT_TASK:
            return {
                ...state,
                select_task: action.payload
            }
        case UPDATE_REQUEST_HEADER_USER_ID:
            return {
                ...state,
                requestHeaderUserId: action.userId
            }
        case UPDATE_REQUEST_HEADER_GROUP_ID:
            return {
                ...state,
                requestHeaderGroupId: action.groupId
            }
        case CURRENT_CHOSED_PERSONA:
            return {
                ...state,
                currentChosedPersona: action.persona
            }
        case LESSON_ALL:
            return {
                ...state,
                lesson_all: action.payload
            }
        case UPDATE_TRANSCRIPTION:
            return {
                ...state,
                transcript_one_time: action.transcript
            }
        default:
            return state;
    }
}