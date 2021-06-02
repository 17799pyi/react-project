import React,{useState} from "react";
import { Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/styles";
import classes from "./styles.module.css";

// const useStyles = makeStyles((theme) => ({
//   root: {},
//   tableBorder: {
//     border: "1px",
//     borderColor: "Red",
//   },
//   tableRightBorder: {
//     borderWidth: 0,
//     borderRight: "1px solid red",
//     borderColor: "black",
//     borderStyle: "solid",
//   },
// }));

function HistoryCheck() {
  const [showTable, setShowTable] = useState(false);

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
          {/* <Row> */}
          <p className="font-16 font-weight-bold mb-3">代理店コード(7桁)</p>
          <div className="mb-16 text_box">
            <input type="text" placeholder="代理店コードを入力してください" className="" style={{width: '100%'}}/>
          </div>
          <p className="font-16 mb-3">遠州鉄道(株)</p>
          <p className="font-16 mb-3">出先単位で確認したい場合</p>
          <p className="font-16 font-weight-bold mb-3">出先コード(7桁)</p>
          <div className="mb-32 text_box" >
            <input type="text" placeholder="居場所コードを入力" className="" style={{width: '100%'}}/>
          </div>
          {/* </Row> */}
          <Row className={`${classes.row_margin}`}>
            <button className={`${classes.search_btn} mr-3`}>
              <p>検索</p> 
            </button>
          </Row>
        </Col>
        <Col xs="7">
          <p className="font-16 font-weight-bold mb-3">募集人一覧</p>
          <div className="table-responsive mb-4">
              <table className={`table text-center ${classes.cmn_table}`}>
                <tr>
                  <th rowspan="2" className="align-middle" style={{width: '25%'}}>ペルソナ</th>
                  <th colspan="3" style={{width: '75%'}}>松尾さん</th>
                </tr>
                <tr>
                  <th style={{width: '25%'}} className="border-left-0">配偶者ストーリー</th>
                  <th style={{width: '25%'}}>お子様ストーリー</th>
                  <th style={{width: '25%'}}>おひとり様ストーリー</th>
                </tr>
                <tr>
                  <td><a href="#" style={{color: 'blue'}}>Afuraku Tarou</a></td>
                  <td className="bg-green">受講完了</td>
                  <td className="bg-yellow-dark">受講中</td>
                  <td className="bg-red">未実装</td>
                </tr>
                <tr>
                  <td><a href="#" style={{color: 'blue'}}>B</a></td>
                  <td className="bg-green">受講完了</td>
                  <td className="bg-green">受講完了</td>
                  <td className="bg-green">受講完了</td>
                </tr>
                <tr>
                  <td><a href="#" style={{color: 'blue'}}>C</a></td>
                  <td className="bg-green">受講完了</td>
                  <td className="bg-green">受講完了</td>
                  <td className="bg-green">受講完了</td>
                </tr>
                <tr>
                  <td><a href="#" style={{color: 'blue'}}>D</a></td>
                  <td className="bg-green">受講完了</td>
                  <td className="bg-green">受講完了</td>
                  <td className="bg-green">受講完了</td>
                </tr>
                <tr>
                  <td><a href="#" style={{color: 'blue'}}>E</a></td>
                  <td className="bg-green">受講完了</td>
                  <td className="bg-green">受講完了</td>
                  <td className="bg-green">受講完了</td>
                </tr>
                <tr>
                  <td><a href="#" style={{color: 'blue'}}>F</a></td>
                  <td className="bg-green">受講完了</td>
                  <td className="bg-green">受講完了</td>
                  <td className="bg-green">受講完了</td>
                </tr>
              </table>
            </div>
        </Col>
      </Row>
    </>
  );
}

export default HistoryCheck;
