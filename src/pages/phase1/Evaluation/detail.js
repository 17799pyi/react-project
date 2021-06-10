import React, { createRef, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap';

import Radio from "../../../components/RadioButtons/RadioButtonType03";


import DownArrow from "../../../assets/images/down_arrow_triangle.svg"
import UpArrow from "../../../assets/images/up_arrow_triangle.svg"
import CloseButton from "../../../assets/images/close_icon.svg"
import PdfIcon from "../../../assets/images/icons/pdf_icon.png"

import BackgroundGrayLabel from "../../../components/Label/BackgroundGrayLabel"
import GeneralTextbox from '../../../components/Textboxes/GeneralTextbox02';
import GeneralTextarea from '../../../components/Textarea/GeneralTextarea';
import { GeneralDropdown } from "../../../components/Dropdowns/GeneralDropdown";
import DeleteKeywordButton from '../../../components/Button/DeleteKeywordButtonLarge'

import classes from './styles.module.css';

const VideoChatPage = () => {

    const { t } = useTranslation();    
    let lastId = 0;
    const autoId = (prefix = 'evaluation-detail-') => {
        lastId++;
        return `${prefix}${lastId}`;
    }
    
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const [selected, setSelected] = useState();
    const scenarioByTheme = [
        {id : 1, name: 'クチパク'},
        {id : 2, name: 'はい'},
        {id : 3, name: 'いいえ'},
        {id : 4, name: '悩む'},
        {id : 5, name: 'オーバーアクション'},
    ]
    const onhandleScenerio = (e) => {
        setSelected()
    }  
    
    const sampleMsg = [
        {id : 1, name: '**********************'},
        {id : 2, name: '**********************'}
    ] 
    const sampleMsg1 = [
        {id : 1, name: '支払事由・引受条件などについては「パンフレット」や「契約概要」などでご確認いただくことになります。'}
    ]  
    const sampleMsg2 = [
        {id : 1, name: 'わかりました。'}
    ]    
    return (
        <>
            <h3 className="mb-32" id={autoId()}>{t('videochat.role_play_implmenting')}</h3>
            <div className="cmn-bg-box pb-3">
                <Row>
                    <Col lg="6">
                        <p className="font-16 font-weight-bold mb-3">プロセス</p>
                        <div className="cmn-bg-box-inr mb-3">
                            <div className="d-flex justify-content-between mb-32">
                                <Radio
                                    checked={selectedValue === 'a'}
                                    onChange={handleChange}
                                    value="a"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <div className="btn-gp">
                                    <button className="no-btn bg-transparent p-0"><img src={UpArrow} alt="Up Arrow"/></button>
                                    <button className="no-btn bg-transparent p-0 mx-3"><img src={DownArrow} alt="Down Arrow"/></button>
                                    <button className="no-btn bg-transparent p-0"><img src={CloseButton} alt="Close Button"/></button>
                                </div>
                            </div>
                            <BackgroundGrayLabel label="プロセス名" className="mb-3"/>
                            <GeneralTextbox text="介護の発生頻度" id={autoId()} className="mb-4"/>

                            <BackgroundGrayLabel label="ポイント" className="mb-3"/>
                            <GeneralTextarea Message={sampleMsg} id={autoId()} className="mb-4"/>

                            <BackgroundGrayLabel label="利用する資材・ツール" className="mb-3"/>
                            <GeneralTextarea Message={sampleMsg} id={autoId()} className="mb-4"/>

                            <div className="mb-4">
                                <img src={PdfIcon} alt="Pdf Icon" />
                                <a href="#" className="cmn-link font-weight-bold ml-4">削除</a>
                            </div>
                            <a href="#" className="font-16 cmn-link font-weight-bold">ファイルを追加</a>
                        </div>
                        <div className="cmn-bg-box-inr mb-3">
                            <div className="d-flex justify-content-between mb-32">
                                <Radio
                                    checked={selectedValue === 'b'}
                                    onChange={handleChange}
                                    value="b"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'B' }}
                                />
                                <div className="btn-gp">
                                    <button className="no-btn bg-transparent p-0"><img src={UpArrow} alt="Up Arrow"/></button>
                                    <button className="no-btn bg-transparent p-0 mx-3"><img src={DownArrow} alt="Down Arrow"/></button>
                                    <button className="no-btn bg-transparent p-0"><img src={CloseButton} alt="Close Button"/></button>
                                </div>
                            </div>
                            <BackgroundGrayLabel label="プロセス名" className="mb-3"/>
                            <GeneralTextbox text="介護の発生頻度" id={autoId()} className="mb-4"/>

                            <BackgroundGrayLabel label="ポイント" className="mb-3"/>
                            <GeneralTextarea Message={sampleMsg} id={autoId()} className="mb-4"/>

                            <BackgroundGrayLabel label="利用する資材・ツール" className="mb-3"/>
                            <GeneralTextarea Message={sampleMsg} id={autoId()} className="mb-4"/>

                            <div className="mb-4">
                                <img src={PdfIcon} alt="Pdf Icon" />
                                <a href="#" className="cmn-link font-weight-bold ml-4">削除</a>
                            </div>
                            <a href="#" className="font-16 cmn-link font-weight-bold">ファイルを追加</a>

                        </div>
                        <div className="cmn-bg-box-inr text-center p-32">
                            <a href="#" className="font-16 cmn-link font-weight-bold">プロセスを追加</a>
                        </div>
                    </Col>
                    <Col lg="6">
                        <p className="font-16 font-weight-bold mb-3 mt-4 mt-lg-0">メッセージ</p>                        
                        <div className="cmn-bg-box-inr mb-3">
                            <div className="d-flex justify-content-end mb-32">
                                <div className="btn-gp">
                                    <button className="no-btn bg-transparent p-0"><img src={UpArrow} alt="Up Arrow"/></button>
                                    <button className="no-btn bg-transparent p-0 mx-3"><img src={DownArrow} alt="Down Arrow"/></button>
                                    <button className="no-btn bg-transparent p-0"><img src={CloseButton} alt="Close Button"/></button>
                                </div>
                            </div>
                            <BackgroundGrayLabel label="募集人" className="mb-3"/> 
                            <GeneralTextarea Message={sampleMsg1} id={autoId()} className="mb-4"/>  
                            
                            <BackgroundGrayLabel label="キーワード" className="mb-3"/>
                            <div className="d-flex flex-wrap mb-3 align-items-center">
                                <DeleteKeywordButton title="支払事由" className="mr-1"/>
                                <DeleteKeywordButton title="引受条件" className="mr-1"/>
                                <DeleteKeywordButton title="パンフレット" className="mr-1"/>
                                <a href="#" className="cmn-link font-weight-bold ml-3">削除</a>
                            </div> 

                            <BackgroundGrayLabel label="ペルソナ" className="mb-3"/>
                            <GeneralDropdown
                            items={scenarioByTheme}
                            onSelect={onhandleScenerio}
                            className={`mb-3 font-weight-bold`}
                            selectedData={scenarioByTheme[0].name}
                            dropdown_id="theme_dropdown" />
                            <GeneralTextarea Message={sampleMsg2} id={autoId()} className="mb-4"/>
                        </div>                  
                        <div className="cmn-bg-box-inr mb-3">
                            <div className="d-flex justify-content-end mb-32">
                                <div className="btn-gp">
                                    <button className="no-btn bg-transparent p-0"><img src={UpArrow} alt="Up Arrow"/></button>
                                    <button className="no-btn bg-transparent p-0 mx-3"><img src={DownArrow} alt="Down Arrow"/></button>
                                    <button className="no-btn bg-transparent p-0"><img src={CloseButton} alt="Close Button"/></button>
                                </div>
                            </div>
                            <BackgroundGrayLabel label="募集人" className="mb-3"/> 
                            <GeneralTextarea Message={sampleMsg1} id={autoId()} className="mb-4"/>  
                            
                            <BackgroundGrayLabel label="キーワード" className="mb-3"/>
                            <div className="d-flex flex-wrap mb-3 align-items-center">
                                <DeleteKeywordButton title="支払事由" className="mr-1"/>
                                <DeleteKeywordButton title="引受条件" className="mr-1"/>
                                <DeleteKeywordButton title="パンフレット" className="mr-1"/>
                                <a href="#" className="cmn-link font-weight-bold ml-3">削除</a>
                            </div> 

                            <BackgroundGrayLabel label="ペルソナ" className="mb-3"/>
                            <GeneralDropdown
                            items={scenarioByTheme}
                            onSelect={onhandleScenerio}
                            className={`mb-3 font-weight-bold`}
                            selectedData={scenarioByTheme[0].name}
                            dropdown_id="theme_dropdown" />
                            <GeneralTextarea Message={sampleMsg2} id={autoId()} className="mb-4"/>
                        </div>                  
                        <div className="cmn-bg-box-inr mb-3">
                            <div className="d-flex justify-content-end mb-32">
                                <div className="btn-gp">
                                    <button className="no-btn bg-transparent p-0"><img src={UpArrow} alt="Up Arrow"/></button>
                                    <button className="no-btn bg-transparent p-0 mx-3"><img src={DownArrow} alt="Down Arrow"/></button>
                                    <button className="no-btn bg-transparent p-0"><img src={CloseButton} alt="Close Button"/></button>
                                </div>
                            </div>
                            <BackgroundGrayLabel label="募集人" className="mb-3"/> 
                            <GeneralTextarea Message={sampleMsg1} id={autoId()} className="mb-4"/>  
                            
                            <BackgroundGrayLabel label="キーワード" className="mb-3"/>
                            <div className="d-flex flex-wrap mb-3 align-items-center">
                                <DeleteKeywordButton title="支払事由" className="mr-1"/>
                                <DeleteKeywordButton title="引受条件" className="mr-1"/>
                                <DeleteKeywordButton title="パンフレット" className="mr-1"/>
                                <a href="#" className="cmn-link font-weight-bold ml-3">削除</a>
                            </div> 

                            <BackgroundGrayLabel label="ペルソナ" className="mb-3"/>
                            <GeneralDropdown
                            items={scenarioByTheme}
                            onSelect={onhandleScenerio}
                            className={`mb-3 font-weight-bold`}
                            selectedData={scenarioByTheme[0].name}
                            dropdown_id="theme_dropdown" />
                            <GeneralTextarea Message={sampleMsg2} id={autoId()} className="mb-4"/>
                        </div>
                        <div className="cmn-bg-box-inr text-center p-32">
                            <a href="#" className="font-16 cmn-link font-weight-bold">プロセスを追加</a>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default VideoChatPage;