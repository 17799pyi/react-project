import React, { useRef, useState, useEffect  } from 'react';
import { Container, Row, Col } from "reactstrap";
import up_arrow from '../../../assets/images/up_arrow_circle.svg';
import down_arrow from '../../../assets/images/down_arrow_circle.svg';

import classes from './styles.module.css';

const CardDropdown = ({title, className, detail}) => {
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
                    <div key={index} className={classes.list_box}>
                        <p className="font-16">{item.title}</p>
                        {
                            item.info.split("\n").map(val => <p className={`${classes.detail_info}`} key={val}> {val} </p>)
                        }
                    </div>
                ))
               }
            </div>
        </>
    )
}

export {CardDropdown} ;