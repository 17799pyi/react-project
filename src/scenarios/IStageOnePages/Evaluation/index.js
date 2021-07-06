import React, { createRef, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, NavItem } from 'reactstrap';
import { BrowserRouter as Router, useParams, Switch, Route, Link, NavLink, useHistory  } from "react-router-dom";
import Tab from "../../../constituents/ITabs/EvaluationTab";
import BackgroundBlueLabel from "../../../constituents/ILabel/BackgroundBlueLabel"
import classes from './styles.module.css';
import eventShuttle from '../../../eventShuttle'
import { getSectionList } from "../../../request/api";
import { connect } from 'react-redux'
import logger from 'redux-logger';
import { evaluationTaskAll } from '../../../storage/reduxActions/index'

const EvaluationPage = ({evaluationTaskAll}) => {

    const { t } = useTranslation();
    const {tab} = useParams();
    let history = useHistory();
    const [vSectionList, setSectionList] = useState([]); 
    const [vVisibleTab, setVisibleTab] = useState();
    const [vTabChange, setTabChange] = useState();

    useEffect(() => {
        const setData = async () => {
          try {
            const data = getSectionList().then(res =>{
                if(res.data){
                    setSectionList(res.data);
                    if(tab == undefined){
                        history.push('/admin/create/tab1')
                    }
                    else if(tab == "tab1"){
                        if(res.data.length > 0){
                            setTabChange("tab1")
                            setVisibleTab({id: res.data[0].displayNumber, personaInfo: res.data[0].personaInfo});
                        }
                    }
                    else if(tab == "tab2"){
                        if(res.data.length > 1){
                            setTabChange("tab2")
                            setVisibleTab({id: res.data[1].displayNumber, personaInfo: res.data[1].personaInfo});
                        }
                    }
                    else if(tab == "tab3"){
                        if(res.data.length > 2){
                            setTabChange("tab3")
                            setVisibleTab({id: res.data[2].displayNumber, personaInfo: res.data[2].personaInfo});
                        }
                    }
                    else{
                        history.push('/admin/create/tab1')
                    }
                    evaluationTaskAll(res.data);
                }
                else{
                    logger.error("Something-went-wrong ! Please check and try again ")
                }
          })
          } catch (error) {
            //   eventShuttle.dispatch("something_went_wrong");
              eventShuttle.dispatch("エラーが発生しました。確認してもう一度お試しください。");
          }
        };
        setData();
      }, [tab]);

    const onTabSelect = (id, personaInfo) => {
        setVisibleTab({id, personaInfo});
    }
    
    return (
        <>
            <h3 className="mb-32" id="role_play_implmenting">{t('evaluation.role_playing_creation')}</h3>
            <div className="cmn-bg-box pb-3">
                {vVisibleTab && <Tab selectedTab={vVisibleTab.id} tabItems={vSectionList.map((item) => ({id:item.displayNumber, personaInfo: item.personaInfo}))} onSelect={onTabSelect} className="mb-32"/> }
                    {
                        vSectionList.map((item,index) => (
                        vVisibleTab&&vVisibleTab.id === item.displayNumber && 
                        <Row key={index} id={`smallest_padding_box_${index+1}`} name={`smallest_padding_box_${index+1}`} className="smallest-padding-box">
                            {
                            item.sections.map((section, sectionIndex)=>
                            (
                            <Col id={`section_card_box_${index+1}${sectionIndex+1}`} name={`section_card_box_${index+1}${sectionIndex+1}`} key={sectionIndex} lg="4" className="mb-3">
                                <Link id={`evaluation_detail_link_${index+1}${sectionIndex+1}`} name={`evaluation_detail_link_${index+1}${sectionIndex+1}`} to={{pathname:`/admin/create/evaluation-detail/${section.sectionId}`,state:{personaInfo:vVisibleTab.personaInfo, sectionName:section.sectionName, tab:vTabChange} }}><BackgroundBlueLabel idName={`section_name_${index+1}${sectionIndex+1}`} label={section.sectionName} className={classes.bg_blue_box}/></Link>
                            </Col>
                            ))
                            } 
                        </Row>
                        ))
                    }
            </div>
        </>
    )
}

const stateToProps = state => {
    return {
      evaluation_task_all: state.evaluation_task_all,
    }
  }
  
  const dispatchToProps = dispatch => {
    return {
        evaluationTaskAll: (evaluation_task_all) => {
            dispatch(evaluationTaskAll(evaluation_task_all));
        }
    }
  }
  
  export default connect(stateToProps, dispatchToProps)(EvaluationPage)