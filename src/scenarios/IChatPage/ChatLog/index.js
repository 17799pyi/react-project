import styles from './styles.module.css'
import chat_icon from '../../../property/images/chat_icon.png'
import bot_photo from '../../../property/images/chatlog/bot photo.png'
import ScoreCircle from '../../../property/images/chatlog/score_circle.png'
const ChatLog = () =>{
    return(
        <div className="cmn-scroll-bar">
            <div className={`d-flex flex-wrap align-items-end {styles.chat_msg_row}`}> 
                <img src={bot_photo} alt="bot photo" />    
                <div className='ml-2'>
                    <div className={`${styles.chat_msg} ${styles.chat_msg_bot_start}`}>
                        <span className="font-10">Trainer bot</span>
                        <p>Let's get started.</p>
                    </div>                                          
                    <div className={`${styles.chat_msg} ${styles.chat_msg_bot}`}>
                        <p>You have sent a letter to Mr. Yamada the other day.</p>
                    </div>
                </div>    
            </div>
            <div className={`d-flex flex-row-reverse {styles.chat_msg_row}`}> 
                <div className='mr-2'>
                    <div className={`${styles.chat_msg} ${styles.chat_msg_customer}`}>
                        <p>Well. This letter ... </p>
                    </div> 
                </div>  
            </div>
            <div className={`d-flex flex-row-reverse {styles.chat_msg_row}`}> 
                <div className='mr-2'>
                    <div className={`${styles.chat_msg} ${styles.chat_msg_score}`}>
                        <p><img src={ScoreCircle} alt="score circle" className="mr-2"/>Answer accuracy: 15%</p>
                    </div>  
                </div>  
            </div>
            <div className={`d-flex flex-wrap align-items-end {styles.chat_msg_row}`}> 
                <img src={bot_photo} alt="bot photo" />    
                <div className='ml-2'>
                    <div className={`${styles.chat_msg} ${styles.chat_msg_bot}`}>
                        <span className="font-10">Trainer bot</span>
                        <p>This answer is not enough. Please try again.</p>
                    </div> 
                </div>    
            </div>
        </div>
    )
}

export default ChatLog;