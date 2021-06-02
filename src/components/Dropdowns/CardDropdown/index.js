import React, { useRef, useState, useEffect  } from 'react';
import { Container, Row, Col } from "reactstrap";
import up_arrow from '../../../assets/images/up_arrow_circle.svg';
import down_arrow from '../../../assets/images/down_arrow_circle.svg';

import classes from './styles.module.css';

const CardDropdown = ({title, className, detail}) => {
    console.log(detail, "detail in card")
    const [readMore, setReadMore] = useState(false);
    return ( 
        <>
            <Row>
                <Col className={className}>
                    <button onClick={() => setReadMore(!readMore)} className={`${classes.detail_btn} btn p-0`}>
                        <span>{title}</span>
                        <img src={`${readMore? up_arrow: down_arrow}`} className="ml-2 img-fluid"/>
                    </button>
                </Col>
            </Row>
            <div className={readMore ? `` : `d-none`} > 

              {
              detail &&
              detail.map((item, index) => (
                <div key={index} class={classes.list_box}>
                    <p className="font-16">{item.title}</p>
                    {console.log(item.info.split("\n"),"info")}
                    {
                        item.info.split("\n").map(val => <p key={val}> {val} </p>)
                    }
                    {/* <p>スーパーがん保険<br/>
                        （1口）<br/>
                        <p>■特約MAX（終身）</p>
                        <p>・入院給付限度：184日型</p><br/>
                        <p>・被保：契約者　のみ</p><br/>
                        ・保障：疾病・災害入院5千円<br/>
                    　手術給付金：5・10・20万円
                    </p> */}
                </div>
              ))
            }

               {/* <div class={classes.list_box}>
            <div className={readMore ? `` : `d-none`} >   
               <div className={classes.list_box}>
                    <p className="font-16">商品内容</p>
                    <p>スーパーがん保険<br/>
                        （1口）<br/>
                        ■特約MAX（終身）<br/>
                        ・入院給付限度：184日型<br/>
                        ・被保：契約者　のみ<br/>
                        ・保障：疾病・災害入院5千円<br/>
                        　手術給付金：5・10・20万円
                    </p>
                </div> */}
                {/* <div class={classes.list_box}>
                    <p className="font-16">商品内容</p>
                    <p>スーパーがん保険<br/>
                        （1口）<br/>
                        ■特約MAX（終身）<br/>
                        ・入院給付限度：184日型<br/>
                        ・被保：契約者　のみ<br/>
                        ・保障：疾病・災害入院5千円<br/>
                        　手術給付金：5・10・20万円
                    </p>
                </div>
                <div className={classes.list_box}>
                    <p className="font-16">商品内容</p>
                    <p>スーパーがん保険<br/>
                        （1口）<br/>
                        ■特約MAX（終身）<br/>
                        ・入院給付限度：184日型<br/>
                        ・被保：契約者　のみ<br/>
                        ・保障：疾病・災害入院5千円<br/>
                        　手術給付金：5・10・20万円
                    </p>
                </div>
                <div className={classes.list_box}>
                    <p className="font-16">商品内容</p>
                    <p>スーパーがん保険<br/>
                        （1口）<br/>
                        ■特約MAX（終身）<br/>
                        ・入院給付限度：184日型<br/>
                        ・被保：契約者　のみ<br/>
                        ・保障：疾病・災害入院5千円<br/>
                        　手術給付金：5・10・20万円
                    </p>
                </div> */}
            </div>
        </>
    )
}

export {CardDropdown} ;