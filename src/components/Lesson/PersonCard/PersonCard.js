import React from 'react'
import elderly_man from '../../../assets/icons/elderly_man.png';
import './index.css'
import SlideToggle from "react-slide-toggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
                    {/* <span className="card_status">
                        <span>Perfect</span>
                    </span> */}
                </div>
                <div className="bottom">
                    <p>Taro Sato</p>
                    <p>75 Years Old / Male</p>
                </div>
            </div>
            <div>
            <SlideToggle
                duration={200}
                collapsed
                interpolateOnReverse
                render={({ onToggle, setCollapsibleElement, progress }) => (
                <div className="my-collapsible">
                    <div>
                        <p>Product Details</p>
                        <button className="my-collapsible__toggle" onClick={onToggle}>
                            View Detail <FontAwesomeIcon icon={faAngleDown} />
                        </button>
                    </div>
                    <div className="my-collapsible__content" ref={setCollapsibleElement}>
                    <div
                        className="my-collapsible__content-inner"
                        style={{
                        transform: `translateY(${Math.round(20 * (-1 + progress))}px)`
                        }}
                    >
                        <p>■Super cancer insurance (1 unit) Special contract MAX (whole life)</p>
                        <p>・Hospitalization benefit limit: 184 days</p>
                        <p>・Insured: Contractor only</p>
                        <p>・Guarantee: Illness / disaster hospitalization 5,000 yen</p>
                        <p>Surgical benefits: 5,100,200,000 yen</p>
                    </div>
                    </div>
                </div>
                )}
            />
            </div>
        </div>
    )
}

export default PersonCard
