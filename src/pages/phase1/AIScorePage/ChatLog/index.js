import styles from './styles.module.css'
import chat_icon from '../../../../assets/images/chat_icon.png'
import bot_person from '../../../../assets/images/bot_person.png'
import {useTranslation} from 'react-i18next'
const ChatLog = ({id}) =>{
    const {t} = useTranslation();
    let lastId = 0;
    const autoId = (prefix = '-chatlog-') => {
        lastId++;
        return `${id}${prefix}${lastId}`;
    }
    return(
        <div className={`${styles.main_div}`} id={autoId()}>
            <div className={`${styles.title_div}`}>
                <img src={chat_icon} alt="chat icon" className={styles.chat_icon} id={autoId()}/>
                <span className="ml-3" id={autoId()}><b>{t('aiscore.chat_history')}</b></span>
            </div>
            <div className={`${styles.body_div} ${styles.msger}`} id={autoId()}>
                <main className={styles.msger_chat}>
                    <div className={`${styles.msg} ${styles.left_msg}`}>
                        <div className={`${styles.msg_img} d-flex flex-wrap align-items-center`}>
                            <img src={bot_person} alt="chat bot person" className={`${styles.bot_person} d-block mx-auto`} id={autoId()}></img>
                        </div>

                        <div className={styles.msg_bubble}>
                            <div className={styles.msg_info}>
                            <div className={styles.msg_info_name} id={autoId()}>AIボット</div>
                            </div>

                            <div className={styles.msg_text} id={autoId()}>
                            それでは始めましょう.
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.msg} ${styles.right_msg}`}>
                        <div className={styles.msg_bubble}>
                            <div className={styles.msg_text} id={autoId()}>
                            取り扱いについて...
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.msg} ${styles.left_msg}`}>
                        <div className={`${styles.msg_img} d-flex flex-wrap align-items-center`}>
                            <img src={bot_person} alt="chat bot person" className={`${styles.bot_person} d-block mx-auto`} id={autoId()}></img>
                        </div>

                        <div className={styles.msg_bubble}>
                            <div className={styles.msg_info}>
                            <div className={styles.msg_info_name} id={autoId()}>AIボット</div>
                            </div>

                            <div className={styles.msg_text} id={autoId()}>
                            それでは始めましょう それでは始めましょう それでは始めましょう
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.msg} ${styles.right_msg}`}>
                        <div className={styles.msg_bubble}>
                            <div className={styles.msg_info}>
                            <div className={styles.msg_info_name} id={autoId()}>募集人役 </div>
                            </div>

                            <div className={styles.msg_text} id={autoId()}>
                            保険とそのメンテナンスについて...
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.msg} ${styles.left_msg}`}>
                        <div className={`${styles.msg_img} d-flex flex-wrap align-items-center`}>
                            <img src={bot_person} alt="chat bot person" className={`${styles.bot_person} d-block mx-auto`} id={autoId()}></img>
                        </div>

                        <div className={styles.msg_bubble}>
                            <div className={styles.msg_info}>
                            <div className={styles.msg_info_name} id={autoId()}>AIボット</div>
                            </div>
                            <div className={styles.msg_text} id={autoId()}>
                            それでは始めましょう それでは始めましょう それでは始めましょう
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.msg} ${styles.right_msg}`}>
                        <div className={styles.msg_bubble}>
                            <div className={styles.msg_info}>
                            <div className={styles.msg_info_name} id={autoId()}>募集人役 </div>
                            </div>

                            <div className={styles.msg_text} id={autoId()}>
                            保険とそのメンテナンスについて...
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.msg} ${styles.left_msg}`}>
                        <div className={`${styles.msg_img} d-flex flex-wrap align-items-center`} id={autoId()}>
                            <img src={bot_person} alt="chat bot person" className={`${styles.bot_person} d-block mx-auto`}></img>
                        </div>

                        <div className={styles.msg_bubble}>
                            <div className={styles.msg_info}>
                            <div className={styles.msg_info_name} id={autoId()}>AIボット</div>
                            </div>

                            <div className={styles.msg_text} id={autoId()}>
                            それでは始めましょう それでは始めましょう それでは始めましょう
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.msg} ${styles.right_msg}`}>
                        <div className={styles.msg_bubble}>
                            <div className={styles.msg_info}>
                            <div className={styles.msg_info_name} id={autoId()}>募集人役 </div>
                            </div>

                            <div className={styles.msg_text} id={autoId()}>
                            保険とそのメンテナンスについて...
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ChatLog;