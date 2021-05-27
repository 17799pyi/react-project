import styles from './styles.module.css'
import chat_icon from '../../../../assets/images/chat_icon.png'
import bot_person from '../../../../assets/images/bot_person.png'
import {useTranslation} from 'react-i18next'
const ChatLog = () =>{
    const {t} = useTranslation();
    return(
        <div className={`${styles.main_div}`}>
            <div className={`${styles.title_div}`}>
                <img src={chat_icon} className={styles.chat_icon}/>
                <span className="ml-3"><b>{t('aiscore.chat_history')}</b></span>
            </div>
            <div className={`${styles.body_div} ${styles.msger}`}>
                <main className={styles.msger_chat}>
                    <div className={`${styles.msg} ${styles.left_msg}`}>
                        <div className={`${styles.msg_img} d-flex flex-wrap align-items-center`}>
                            <img src={bot_person} className={`${styles.bot_person} d-block mx-auto`}></img>
                        </div>

                        <div className={styles.msg_bubble}>
                            <div className={styles.msg_info}>
                            <div className={styles.msg_info_name}>AIボット</div>
                            </div>

                            <div className={styles.msg_text}>
                            それでは始めましょう.
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.msg} ${styles.right_msg}`}>
                        <div className={styles.msg_bubble}>
                            <div className={styles.msg_text}>
                            取り扱いについて...
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.msg} ${styles.left_msg}`}>
                        <div className={`${styles.msg_img} d-flex flex-wrap align-items-center`}>
                            <img src={bot_person} className={`${styles.bot_person} d-block mx-auto`}></img>
                        </div>

                        <div className={styles.msg_bubble}>
                            <div className={styles.msg_info}>
                            <div className={styles.msg_info_name}>AIボット</div>
                            </div>

                            <div className={styles.msg_text}>
                            それでは始めましょう それでは始めましょう それでは始めましょう
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.msg} ${styles.right_msg}`}>
                        <div className={styles.msg_bubble}>
                            <div className={styles.msg_info}>
                            <div className={styles.msg_info_name}>募集人役 </div>
                            </div>

                            <div className={styles.msg_text}>
                            保険とそのメンテナンスについて...
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.msg} ${styles.left_msg}`}>
                        <div className={`${styles.msg_img} d-flex flex-wrap align-items-center`}>
                            <img src={bot_person} className={`${styles.bot_person} d-block mx-auto`}></img>
                        </div>

                        <div className={styles.msg_bubble}>
                            <div className={styles.msg_info}>
                            <div className={styles.msg_info_name}>AIボット</div>
                            </div>
                            <div className={styles.msg_text}>
                            それでは始めましょう それでは始めましょう それでは始めましょう
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.msg} ${styles.right_msg}`}>
                        <div className={styles.msg_bubble}>
                            <div className={styles.msg_info}>
                            <div className={styles.msg_info_name}>募集人役 </div>
                            </div>

                            <div className={styles.msg_text}>
                            保険とそのメンテナンスについて...
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.msg} ${styles.left_msg}`}>
                        <div className={`${styles.msg_img} d-flex flex-wrap align-items-center`}>
                            <img src={bot_person} className={`${styles.bot_person} d-block mx-auto`}></img>
                        </div>

                        <div className={styles.msg_bubble}>
                            <div className={styles.msg_info}>
                            <div className={styles.msg_info_name}>AIボット</div>
                            </div>

                            <div className={styles.msg_text}>
                            それでは始めましょう それでは始めましょう それでは始めましょう
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.msg} ${styles.right_msg}`}>
                        <div className={styles.msg_bubble}>
                            <div className={styles.msg_info}>
                            <div className={styles.msg_info_name}>募集人役 </div>
                            </div>

                            <div className={styles.msg_text}>
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