import React from 'react'
import elderly_man from '../../../assets/icons/elderly_man.png';
import ellipse from '../../../assets/icons/ellipse.png';
import './index.css'
import SlideCard from '../SlideCard/SlideCard';

function PersonCard() {
    return (
        <div className="persona_card">
            <div className="card_wrapper">
                <img className="card_image" src={elderly_man} />
                <div className="top">
                    <span className="card_number">1</span>
                    <span className="card_count">
                        1/10
                    </span>
                    <span className="card_status">
                        <img className="ellipse" src={ellipse} />
                        <span className="ellipse-text">Perfect</span>
                    </span>
                </div>
                <div className="bottom">
                    <p>Taro Sato</p>
                    <p>75 Years Old / Male</p>
                </div>
            </div>
            <div className="slide-card">
                <SlideCard />
                <SlideCard />
                <SlideCard />
            </div>
        </div>
    )
}

export default PersonCard
