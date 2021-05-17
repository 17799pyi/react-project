import React from 'react'
import SlideToggle from "react-slide-toggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import './index.css';

function SlideCard() {
    return (
        <SlideToggle
                duration={200}
                collapsed
                interpolateOnReverse
                render={({ onToggle, setCollapsibleElement, progress }) => (
                <div className="my-collapsible slide-card-wrapper">
                    <div className="show-wrapper">
                        <p className="slide-card-title">Product Details</p>
                        <button className="my-collapsible__toggle slide-card-button" onClick={onToggle}>
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
    )
}

export default SlideCard
