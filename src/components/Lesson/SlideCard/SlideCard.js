import React from 'react'
import SlideToggle from "react-slide-toggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import classes from './styles.module.css'

function SlideCard({show}) {
    return (
        <SlideToggle
                duration={200}
                collapsed={show?'':'collapsed'}
                interpolateOnReverse
                render={({ onToggle, setCollapsibleElement, progress }) => (
                <div className={`${classes.slide_card_wrapper} my-collapsible`}>
                    <div className={classes.show_wrapper}>
                        <p className={classes.slide_card_title}>Product Details</p>
                        <button className={`${classes.slide_card_button} my-collapsible__toggle`} onClick={onToggle}>
                            View Detail <FontAwesomeIcon icon={faAngleDown} />
                        </button>
                    </div>
                    <div className={`my-collapsible__content ${classes.collapsible_content}`} ref={setCollapsibleElement}>
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
