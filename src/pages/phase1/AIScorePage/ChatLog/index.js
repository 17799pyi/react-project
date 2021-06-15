import React, { useEffect, useState, useRef, createRef } from 'react';
import styles from './styles.module.css'
import chat_icon from '../../../../assets/images/chat_icon.png'
import bot_person from '../../../../assets/images/bot_person.png'
import {useTranslation} from 'react-i18next'

const ChatLog = ({id, messages, selectKeyword}) =>{
    const {t} = useTranslation();
    let lastId = 0;
    const [loading, setLoading] = useState(true)
    const chatMsgRef = useRef({})
    const chatRef = useRef()

    const autoId = (prefix = '-chatlog-') => {
        lastId++;
        return `${id}${prefix}${lastId}`;
    }
    useEffect(() => {
        setLoading(false)
        chatMsgRef.current = {}
        chatMsgRef.current = messages.map((element, i) => chatMsgRef.current[i.id] ?? createRef());
    }, [messages])

    useEffect(() => {
        //select keyword auto scroll
        if(selectKeyword != undefined)
        {
            if(chatMsgRef.current[selectKeyword.userMessageId] != undefined)
            {
                if(chatMsgRef.current[selectKeyword.userMessageId].current != null)
                {
                    chatRef.current.scrollTop = chatMsgRef.current[selectKeyword.userMessageId].current.offsetTop;
                }
            }
        }
    }, [selectKeyword])
    
    const getHighlightedText = (text, selectKeyword, msgId) => {
        //select keyword auto hightlight
        if(selectKeyword)
        {
            if(msgId == selectKeyword.userMessageId)
            {
                const parts = text.split(new RegExp(`(${selectKeyword.word})`, 'gi'));
    
                return <div className={styles.msg_text} id={autoId()}>
                    {parts.map(part => part.toLowerCase() === selectKeyword.word.toLowerCase() ? <b key={autoId()} className={styles.msg_highlight}>{part}</b> : part)}
                </div>
            }else{
                return <div className={styles.msg_text} id={autoId()}>{text}</div>
            }
        }else{
            return <div className={styles.msg_text} id={autoId()}>{text}</div>
        }
    }
    return(
        <div className={`${styles.main_div}`} id={autoId()}>
            <div className={`${styles.title_div}`}>
                <img src={chat_icon} alt="chat icon" className={styles.chat_icon} id={autoId()}/>
                <span className="ml-3" id={autoId()}><b>{t('aiscore.chat_history')}</b></span>
            </div>
            <div className={`${styles.body_div} ${styles.msger}`} id={autoId()}  ref={chatRef}>
                <main className={styles.msger_chat}>
                    {
                        !loading ?
                        messages.map((msg, index) => {
                            if(msg.type == 'IncomingMessage')
                            {
                                return <div key={index} className={`${styles.msg} ${styles.left_msg}`} ref={chatMsgRef.current[msg.id]} id={autoId()}>
                                            <div className={`${styles.msg_img} d-flex flex-wrap align-items-center`}>
                                                <img src={bot_person} alt="chat bot person" className={`${styles.bot_person} d-block mx-auto`} id={autoId()}></img>
                                            </div>
                    
                                            <div className={styles.msg_bubble}>
                                                <div className={styles.msg_info}>
                                                <div className={styles.msg_info_name} id={autoId()}>AIボット</div>
                                                </div>
                    
                                                <div className={styles.msg_text} id={autoId()}>
                                                    {msg.text}
                                                </div>
                                            </div>
                                        </div>
                            }else{
                                return <div key={index} ref={chatMsgRef.current[msg.id]} className={`${styles.msg} ${styles.right_msg}`} id={autoId()}>
                                    <div className={styles.msg_bubble}>
                                        {getHighlightedText(msg.text, selectKeyword, msg.id)}
                                    </div>
                                </div>
                            }
                        })
                        :
                        "Loading...."
                    }
                </main>
            </div>
        </div>
    )
}

export default ChatLog;