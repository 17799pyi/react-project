import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import PersonCard from '../../../constituents/ILesson/PersonCard/PersonCard'
import classes from './styles.module.css'
import { useTranslation } from 'react-i18next';


function PersonaSelection() {

    const { t } = useTranslation();
    
    return (
        <div className="cmn-inner-width">
            <div className="persona_selection">
                <div className="text">
                    <p className={classes.head_text}>{t('persona.head_text')}</p>
                </div>
                {/* <div className="persona_cards">
                    <div className={classes.persona_wrapper}>
                        <PersonCard />
                        <PersonCard />
                        <PersonCard />
                    </div>
                </div> */}
                <Row>
                    <Col xl="4" lg="6" className="mb-3">
                        <PersonCard />
                    </Col>
                    <Col xl="4" lg="6" className="mb-3">
                        <PersonCard />
                    </Col>
                    <Col xl="4" lg="6" className="mb-3">
                        <PersonCard />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default PersonaSelection
