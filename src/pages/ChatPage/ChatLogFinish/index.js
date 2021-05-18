import styles from './styles.module.css'
import chat_icon from '../../../assets/images/chat_icon.png'
import bot_photo from '../../../assets/images/chatlog/bot photo.png'
import bot_admin_photo from '../../../assets/images/chatlog/bot_admin_photo.png'
import ScoreCircle from '../../../assets/images/chatlog/score_circle.png'
const ChatLog = ({className}) =>{
    return(
        <div className={`cmn-scroll-bar ${className}`}>
            <div className={`d-flex flex-wrap align-items-end {styles.chat_msg_row} sm-bm-0 mb-1`}> 
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
            <div className={`d-flex flex-row-reverse {styles.chat_msg_row} sm-bm-0 mb-1`}> 
                <div className='mr-2'>
                    <div className={`${styles.chat_msg} ${styles.chat_msg_customer} ${styles.last}`}>
                        <p>Well. This letter ... </p>
                    </div> 
                    <div className={`${styles.chat_msg} ${styles.chat_msg_score}`}>
                        <p><img src={ScoreCircle} alt="score circle" className="mr-2"/>Answer accuracy: 15%</p>
                    </div>  
                </div>  
            </div>
            {/* <div className={`d-flex flex-wrap align-items-end {styles.chat_msg_row} sm-bm-0 mb-1`}> 
                <img src={bot_photo} alt="bot photo" />    
                <div className='ml-2'>
                    <div className={`${styles.chat_msg} ${styles.chat_msg_bot}`}>
                        <span className="font-10">Trainer bot</span>
                        <p>This answer is not enough. Please try again.</p>
                    </div> 
                </div>    
            </div> */}
            <div className={`d-flex flex-wrap align-items-end {styles.chat_msg_row} sm-bm-0 mb-1`}> 
                <img src={bot_photo} alt="bot photo" />    
                <div className='ml-2'>                                    
                    <div className={`${styles.chat_msg} ${styles.chat_msg_bot}`}>
                        <span>トレーナーボット</span>
                        <p>この答えは十分ではありません。 もう一度やり直してください。</p>
                    </div>
                </div>    
            </div>
            <div className={`d-flex flex-row-reverse {styles.chat_msg_row} sm-bm-0 mb-1`}> 
                <div className='mr-2'>
                    <div className={`${styles.chat_msg} ${styles.chat_msg_customer} ${styles.last}`}>
                        <p>この手紙を送りしたんですが、ご覧いただけましたですか？</p>
                    </div> 
                    <div className={`${styles.chat_msg} ${styles.chat_msg_score}`}>
                        <p><img src={ScoreCircle} alt="score circle" className="mr-2"/>回答精度: 95%</p>
                    </div>  
                </div>  
            </div>
            {/* <div className={`d-flex flex-row-reverse {styles.chat_msg_row} sm-bm-0 mb-1`}> 
                <div className='mr-2'>
                    <div className={`${styles.chat_msg} ${styles.chat_msg_score}`}>
                        <p><img src={ScoreCircle} alt="score circle" className="mr-2"/>回答精度: 95%</p>
                    </div>  
                </div>  
            </div> */}
            <div className={`d-flex flex-wrap align-items-end {styles.chat_msg_row} sm-bm-0 mb-1`}> 
                <img src={bot_admin_photo} alt="bot admin photo" />    
                <div className='ml-2'>                                    
                    <div className={`${styles.chat_msg} ${styles.chat_msg_admin}`}>
                        <span>鈴木次郎さん</span>
                        <p>いいえ、まだ見ていません。 重要なことはありますか？ ちょっと忙しいです...</p>
                    </div>
                </div>    
            </div>            
            <div className={`d-flex flex-row-reverse {styles.chat_msg_row} sm-bm-0 mb-1`}> 
                <div className='mr-2'>
                    <div className={`${styles.chat_msg} ${styles.chat_msg_customer} ${styles.last}`}>
                        <p>緊急ではありませんが、本日ご覧いただき、回答をいただければ幸いです。</p>
                    </div> 
                    <div className={`${styles.chat_msg} ${styles.chat_msg_score}`}>
                        <p><img src={ScoreCircle} alt="score circle" className="mr-2"/>回答精度: 60%</p>
                    </div>  
                </div>  
            </div>
            <div className={`d-flex flex-wrap align-items-end {styles.chat_msg_row} sm-bm-0 mb-1`}> 
                <img src={bot_photo} alt="bot photo" />    
                <div className='ml-2'>
                    <div className={`${styles.chat_msg} ${styles.chat_msg_bot}`}>
                        <span>トレーナーボット</span>
                        <p>これでシナリオは終了です。</p>
                    </div> 
                </div>    
            </div>
        </div>
    )
}

export default ChatLog;