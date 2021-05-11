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
} from '../constants';

export function resetAll2InitialState() {
    return { type: RESET_ALL_2_INITIAL_STATE }
}

export function resetWelcomeSearchingInfo() {
    return { type: RESET_WELCOME_SEARCHING_INFO }
}

export function resetAgentListFilter() {
    return { type: RESET_AGENT_LIST_FILTER }
}

export function resetAppointmentReservation() {
    return { type: RESET_APPOINTMENT_RESERVATION }
}

export function setLoginUser(userId) {
    return { type: USER_ID, userId }
}

export function setInsuranceTypes(insuranceTypes) {
    return { type: INSURANCE_TYPES, insuranceTypes }
}

export function setSelectedInsurancesId(insuranceTypes) {
    return { type: SELECTED_INSURANCES_ID, insuranceTypes }
}

export function setSelectedBirthYear(birthYear) {
    return { type: SELECTED_BIRTH_YEAR, birthYear }
}

export function setSelectedFamilyStr(familyStructure) {
    return { type: SELECTED_FAMILY_STR, familyStructure }
}

export function setSelectedGenderId(genderId) {
    return { type: SELECTED_GENDER_ID, genderId }
}

export function setDirectQuestions(directQuestions) {
    return { type: DIRECT_QUESTIONS, directQuestions }
}

export function setAnsweredDirectQns(answeredQns) {
    return { type: ANSWERED_DIRECT_QNA, answeredQns }
}

export function setSympathyQuestions(sympathyQuestions) {
    return { type: SYMPATHY_QUESTIONS, sympathyQuestions }
}

export function setAnsweredSympathyQns(answeredQns) {
    return { type: ANSWERED_SYMPATHY_QNS, answeredQns }
}

export function setStep1IsHasExperience(isHasExperience) {
    return { type: STEP1_IS_HAS_EXPERIENCE, isHasExperience }
}

export function setStep1AppointmentMethod(appointmentMethod) {
    return { type: STEP1_APPOINTMENT_METHOD, appointmentMethod }
}

export function setStep1Insurances(selectedInsurances) {
    return { type: STEP1_INSURANCE_TYPES, selectedInsurances }
}

export function setStep1Request(requestMessage) {
    return { type: STEP1_REQUEST, requestMessage }
}

export function setStep2Date(step2_date) {
    return { type: STEP2_DATE, step2_date }
}

export function setStep2Time(step2_time) {
    return { type: STEP2_TIME, step2_time }
}

export function setStep2NameKanji(step2_name_kanji) {
    return { type: STEP2_NAME_KANJI, step2_name_kanji }
}

export function setStep2NameKana(step2_name_kana) {
    return { type: STEP2_NAME_KANA, step2_name_kana }
}

export function setStep2Email(step2_email) {
    return { type: STEP2_EMAIL, step2_email }
}

export function setStep2Phone(step2_phone) {
    return { type: STEP2_PHONE, step2_phone }
}

export function setAgentListingHistory(agent_list_history) {
    return { type: AGENT_LISTING_HISTORY, agent_list_history }
}
