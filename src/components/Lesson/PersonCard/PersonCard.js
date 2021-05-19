import React from 'react'
import elderly_man from '../../../assets/icons/elderly_man.png';
import ellipse from '../../../assets/icons/ellipse.png';
import SlideCard from '../SlideCard/SlideCard';
import classes from './styles.module.css'

function PersonCard() {
    return (
        <div className={classes.persona_card}>
            <div className={classes.card_wrapper}>
                <img className={classes.card_image} src={elderly_man} />
                <div className={classes.card_wrapper_top}>
                    <span className={classes.card_number}>1</span>
                    <span className={classes.card_count}>
                        1/10
                    </span>
                    <span className={classes.card_status}>
                        <img className={classes.ellipse} src={ellipse} />
                        <span className={classes.ellipse_text}>Perfect</span>
                    </span>
                </div>
                <div className={classes.card_wrapper_bottom}>
                    <p>Taro Sato</p>
                    <p>75 Years Old / Male</p>
                </div>
            </div>
            <div className={classes.slide_card}>
                <SlideCard />
                <SlideCard />
                <SlideCard />
            </div>
        </div>
    )
}

export default PersonCard
