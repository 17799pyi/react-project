import {
    RESET_ALL_2_INITIAL_STATE,
    HISTORY_TASK_ALL,
    LESSON_TASK_ALL,
    LOGIN_TASK_ALL
} from '../consts/index';

export function resetAll2InitialState() {
    return { type: RESET_ALL_2_INITIAL_STATE }
}

export function historyTaskAll(body)
{
    return {
        type: HISTORY_TASK_ALL,
    }
}

export function lessonTaskAll(body)
{
    return {
        type: LESSON_TASK_ALL,
        payload: body
    }
}

export function loginTaskAll(body){
    return {
        type: LOGIN_TASK_ALL,
        payload: body
    }
}