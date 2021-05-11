import {
    RESET_ALL_2_INITIAL_STATE,
    RESET_WELCOME_SEARCHING_INFO,
    RESET_AGENT_LIST_FILTER,
    RESET_APPOINTMENT_RESERVATION,
    USER_ID,
    INSURANCE_TYPES,
    SELECTED_INSURANCES_ID,
    SELECTED_BIRTH_YEAR,
    SELECTED_FAMILY_STR,
    SELECTED_GENDER_ID,
    DIRECT_QUESTIONS,
    ANSWERED_DIRECT_QNA,
    SYMPATHY_QUESTIONS,
    ANSWERED_SYMPATHY_QNS,
    STEP1_IS_HAS_EXPERIENCE,
    STEP1_APPOINTMENT_METHOD,
    STEP1_INSURANCE_TYPES,
    STEP1_REQUEST,
    STEP2_DATE,
    STEP2_TIME,
    STEP2_NAME_KANJI,
    STEP2_NAME_KANA,
    STEP2_EMAIL,
    STEP2_PHONE,
    AGENT_LISTING_HISTORY
}
    from '../constants';

const initialState = {
    userId: "7a3b9ba8d3cd48d697a5029e12958e4a",
    insuranceTypes: [],
    selectedInsurancesId: [],
    selectedBirthYear: 0,
    selectedFamilyStr: 0,
    selectedGenderId: 0,
    directQuestions: [],
    answeredDirQns: [],
    sympathyQuestions: [],
    answeredSymQns: [],
    step1IsHasExperience: 1,
    step1AppointmentMethod: 0,
    step1InsuranceTypes: [],
    step1RequestMessage: '',
    step2_date: '',
    step2_time: '',
    step2_name_kanji: '',
    step2_name_kana: '',
    step2_email: '',
    step2_phone: '',
    agent_list_history: {
        scroll_position: 0,
        current_page: 0,
        selected_filter: '401'
    }
};

export function customerFrontEnd(state = initialState, action) {
    switch (action.type) {
        case RESET_ALL_2_INITIAL_STATE:
            return { ...initialState }
        case RESET_WELCOME_SEARCHING_INFO:
            return {
                ...state,
                selectedInsurancesId: initialState.selectedInsurancesId,
                selectedBirthYear: initialState.selectedBirthYear,
                selectedFamilyStr: initialState.selectedFamilyStr,
                selectedGenderId: initialState.selectedGenderId,
            }
        case RESET_AGENT_LIST_FILTER:
            return {
                ...state,
                agent_list_history: initialState.agent_list_history
            }
        case RESET_APPOINTMENT_RESERVATION:
            return {
                ...state,
                step1IsHasExperience: initialState.step1IsHasExperience,
                step1AppointmentMethod: initialState.step1AppointmentMethod,
                step1InsuranceTypes: state.insuranceTypes.filter(x => state.selectedInsurancesId.some(y => y === x.id)),
                step1RequestMessage: initialState.step1RequestMessage,
                step2_date: initialState.step2_date,
                step2_time: initialState.step2_time,
                step2_name_kanji: initialState.step2_name_kanji,
                step2_name_kana: initialState.step2_name_kana,
                step2_email: initialState.step2_email,
                step2_phone: initialState.step2_phone,
                agent_list_history: initialState.agent_list_history
            }
        case USER_ID:
            return { ...state, userId: action.userId };
        case INSURANCE_TYPES:
            return { ...state, insuranceTypes: action.insuranceTypes }
        case SELECTED_INSURANCES_ID:
            return { ...state, selectedInsurancesId: action.insuranceTypes }
        case SELECTED_BIRTH_YEAR:
            return { ...state, selectedBirthYear: action.birthYear }
        case SELECTED_FAMILY_STR:
            return { ...state, selectedFamilyStr: action.familyStructure }
        case SELECTED_GENDER_ID:
            return { ...state, selectedGenderId: action.genderId }
        case DIRECT_QUESTIONS:
            return { ...state, directQuestions: action.directQuestions }
        case ANSWERED_DIRECT_QNA:
            return { ...state, answeredDirQns: action.answeredQns }
        case SYMPATHY_QUESTIONS:
            return { ...state, sympathyQuestions: action.sympathyQuestions }
        case ANSWERED_SYMPATHY_QNS:
            return { ...state, answeredSymQns: action.answeredQns }
        case STEP1_IS_HAS_EXPERIENCE:
            return { ...state, step1IsHasExperience: action.isHasExperience }
        case STEP1_APPOINTMENT_METHOD:
            return { ...state, step1AppointmentMethod: action.appointmentMethod }
        case STEP1_INSURANCE_TYPES:
            return { ...state, step1InsuranceTypes: action.selectedInsurances }
        case STEP1_REQUEST:
            return { ...state, step1RequestMessage: action.requestMessage }
        case STEP2_DATE:
            return { ...state, step2_date: action.step2_date }
        case STEP2_TIME:
            return { ...state, step2_time: action.step2_time }
        case STEP2_NAME_KANJI:
            return { ...state, step2_name_kanji: action.step2_name_kanji }
        case STEP2_NAME_KANA:
            return { ...state, step2_name_kana: action.step2_name_kana }
        case STEP2_EMAIL:
            return { ...state, step2_email: action.step2_email }
        case STEP2_PHONE:
            return { ...state, step2_phone: action.step2_phone }
        case AGENT_LISTING_HISTORY:
            return { ...state, agent_list_history: action.agent_list_history }
        default:
            return state;
    }
}