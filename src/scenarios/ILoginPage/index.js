import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import MainLogo from '../../property/images/logo.png';
import GeneralTextbox from '../../constituents/ITextboxes/GeneralTextbox';
import GeneralButton from '../../constituents/IButton/GeneralButton';
import ErrorMessage from '../../constituents/IErrorMessage';
import valid_con from '../../property/images/valid_icon.svg';
import styles from './styles.module.css';
import error_icon from '../../property/images/error_icon.png';
import store from '../../storage'
import { UPDATE_REQUEST_HEADER_GROUP_ID, UPDATE_REQUEST_HEADER_USER_ID } from '../../storage/consts'

const LoginPage = ({ username, setSelectedUserName, agent_company, setSelectedAgentCompany, setSelectedEmployeeId, role, setSelectedRole, setSelectedUserId, recent_path, access_token, accessToken }) => {
    const { t } = useTranslation();
    const history = useHistory();
    const [user_id, setUserId] = useState();
    const [usernameRequire, setUserNameRequire] = useState(false);
    const [password, setPassword] = useState();
    const [passwordRequire, setPasswordRequire] = useState(false);
    const [message, setMessage] = useState('');
    // useEffect(() => {
    //     route()
    // }, [access_token, role])

    // const syntax = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    // const handleKeyDown = (event) => {
    //     if (event.key === 'Enter') {
    //         login()
    //     }
    // }

    const onUserNameChange = (event) => {
        // setMessage('');
        setUserId(event.target.value);
        // event.target.value.length > 13 || event.target.value.length < 1 ? setUserNameRequire(true) : setUserNameRequire(false);
        // password && password === undefined && password.length < 1 ? setPasswordRequire(true) : setPasswordRequire(false);
    }

    const onPasswordChange = (event) => {
        // setMessage('');
        setPassword(event.target.value);
        // if (event.target.value.length < 1) {
        //     setPasswordRequire(true)
        // }
        // else if (event.target.value.length > 0) {
        //     setPasswordRequire(false)
           
        // }
        // user_id !== undefined && user_id.length > 13 ? setUserNameRequire(true) : setUserNameRequire(false);
    }

    const login = () => {
        store.dispatch({type: UPDATE_REQUEST_HEADER_USER_ID, userId: user_id})
        store.dispatch({type: UPDATE_REQUEST_HEADER_GROUP_ID, groupId: password})
        history.push("/start-new-role-play")
    }

    // function route() {
    //     if (access_token !== '') {
    //         (recent_path !== '') ? history.replace(recent_path) : history.replace("/RecruiterSummary");
    //     }
    // }

    return (
        <div id={styles.login_page} className={`w-100 px-0 ${styles.main_content}`}>
            <div className={styles.login_page} >
                <div className={styles.center_container}>
                    <img src={MainLogo} className={styles.logo} />
                    <h1 className={`font-18 ${styles.title}`}>{t('login_page.title')}</h1>
                    <div className={styles.form_container}>
                        <h5 className={`font-16 ${styles.textbox_label}`}>{t('login_page.username.title')}</h5>
                        <GeneralTextbox
                            placeholder={t('login_page.username.placeholder')}
                            autoFocus={true}
                            className={`font-18 RobotoRegular username-box ${styles.text_box} ${(user_id != undefined && user_id.length > 0) ? styles.show_user : ''}  ${usernameRequire ? styles.border_danger : ''}`}
                            onChange={onUserNameChange}
                            id="userId"
                            icon={usernameRequire ? error_icon : valid_con}
                            // onKeyPress={handleKeyDown}
                             />
                        {usernameRequire && message === '' && <ErrorMessage message={t('login_page.username.require')} />}

                        <h5 className={`font-16 ${styles.textbox_label}`}>{t('login_page.password.title')}</h5>
                        <GeneralTextbox
                            inputtype={'password'}
                            placeholder={t('login_page.password.placeholder')}
                            className={`font-18 RobotoRegular password-box ${styles.text_box}  ${(password != undefined && password.length > 0) ? styles.show_pass : ''} ${passwordRequire ? styles.border_danger : ''} `}
                            onChange={onPasswordChange}
                            id="password"
                            icon={passwordRequire ? error_icon : valid_con}
                            // onKeyPress={handleKeyDown} 
                            />
                        {passwordRequire && message === '' && <ErrorMessage message={t('login_page.password.require')} />}
                        <GeneralButton
                            title={t('login_page.login button title')}
                            className={`font-16 text-white font-weight-bold ${styles.btn_login}`}
                            onClick={login}
                            id="login" />
                        <div>test-user-id</div>
                        <div>G1test-agent,G6test-agent,G5ASEmanager,I3ARPadministrators</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const stateToProps = state => {
    return {
        user_id: state.vAgent.user_id,
        username: state.vAgent.username,
        employee_id: state.vAgent.employee_id,
        role: state.vAgent.role,
        agent_company: state.vAgent.agent_company,
        recent_path: state.vAgent.recent_path,
        access_token: state.vAgent.access_token
    }
}

export default LoginPage;