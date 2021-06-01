import React from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import classes from "./styles.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {},
  tableBorder: {
    border: "1px",
    borderColor: "Red",
  },
  tableRightBorder: {
    borderWidth: 0,
    borderRight: "1px solid red",
    borderColor: "black",
    borderStyle: "solid",
  },
}));

function HistoryCheck() {
//   const classes = useStyles();
  return (
    <>
      <Row>
        <Col>
          <h6 className={`mb-4`}>履歴を確認する</h6>
        </Col>
      </Row>
      <Row>
        <Col xs="5">
          <p className="font-16 font-weight-bold mb-3">代理店コード(7桁)</p>
          <div className="mb-32 text_box">
            <input type="text" placeholder="代理店コードを入力してください" className="" />
          </div>
          <p className="font-16 mb-3">出先単位で確認したい場合</p>
          <p className="font-16 font-weight-bold mb-3">出先コード(7桁)</p>
          <div className="mb-32 text_box">
            <input type="text" placeholder="居場所コードを入力" className="" />
          </div>
        </Col>
        <Col xs="7">
          <p className="font-16 font-weight-bold mb-3">募集人一覧</p>
          
        </Col>
      </Row>
    </>
  );
}

export default HistoryCheck;
