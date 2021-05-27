import React from 'react'
import { Row } from 'reactstrap'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles'

const UseStyles = makeStyles({
  tableContainer: {
    boxShadow : "none"
  },
  borderNone: {
    border: "none",
    background: "white !important"
  },
  tRow: {
    border : "1px solid white",
    "& th" : {
      color: "white",
      border: "none",
      borderRight: "1px solid white",
      background: "#00A5D9",
    }
  } ,
  tRowThird: {
    // border : "1px solid #00A5D9",
    "& th" : {
      color: "white",
      border: "none",
      borderRight: "1px solid white",
      background: "#00A5D9",
      "&:first-child" : {
        borderTopLeftRadius: "5px"
      }
    }
  },
  tRowSecond: {
    background: "#E9FAFF !important",
    "& th" : {
      color: "black",
      border: "none",
      borderRight: "1px solid #D1D1D1"
    }
  },
  tBody: {
    border: "none",
    borderRadius: "20px",
    "& td" : {
      border: "1px solid #D1D1D1",
      fontFamily: "Meiryo",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "21px",
      alignItems : "center",
      textAlign : "center",
      color : "#333333;"
    }
  },
  firstHeaderRadius : {
    borderTopLeftRadius : "5px"
  },
  secondHeaderRadius : {
    borderTopRightRadius : "5px"
  }
});
function index() {
  
  const classes = UseStyles();
    return (
        <div>
            <Row>
            <h3 className="mb-32">履歴確認</h3>
            </Row>
            <Row>
            <TableContainer component={Paper} classes={{root : classes.tableContainer}}>
                  <Table aria-label="spanning table">
                      <TableHead>
                        <TableRow classes={{root : classes.tRow}}>
                          <TableCell  colSpan={2} classes={{root : classes.borderNone}}/>
                          <TableCell align="center" colSpan={3} classes={{root : classes.firstHeaderRadius}} >アウトプット編」</TableCell>
                          <TableCell align="center" classes={{root : classes.secondHeaderRadius}}>ロープレテスト編</TableCell> 
                        </TableRow>
                        <TableRow classes={{root : classes.tRowSecond}}>
                          <TableCell  colSpan={2} classes={{root : classes.borderNone}}/>
                          <TableCell align="center">松尾さん</TableCell>
                          <TableCell align="center">安田さん</TableCell> 
                          <TableCell align="center">岡田さん</TableCell>
                          <TableCell align="center">松尾さん</TableCell>
                        </TableRow>
                        <TableRow classes={{root : classes.tRowThird}}>
                          <TableCell align="center">No.</TableCell>
                          <TableCell align="center">セクション名</TableCell>
                          <TableCell align="center">進捗(正答率)</TableCell>
                          <TableCell align="center">進捗(正答率)</TableCell>
                          <TableCell align="center">進捗(正答率)</TableCell>
                          <TableCell align="center">進捗(正答率)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody classes={{root : classes.tBody}}>
                        <TableRow>
                          <TableCell align="center">1 </TableCell>
                          <TableCell align="center">アポイント取得コール</TableCell>
                          <TableCell align="center">5回/3回(100%)</TableCell>
                          <TableCell align="center">3回/3回(80%)</TableCell>
                          <TableCell align="center">2回/3回(80%)</TableCell>
                          <TableCell align="center">1回/1回(75%)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">2 </TableCell>
                          <TableCell align="center">アポイント取得コール</TableCell>
                          <TableCell align="center">5回/3回(100%)</TableCell>
                          <TableCell align="center">3回/3回(80%)</TableCell>
                          <TableCell align="center">2回/3回(80%)</TableCell>
                          <TableCell align="center">1回/1回(75%)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">3 </TableCell>
                          <TableCell align="center">アポイント取得コール</TableCell>
                          <TableCell align="center">5回/3回(100%)</TableCell>
                          <TableCell align="center">3回/3回(80%)</TableCell>
                          <TableCell align="center">2回/3回(80%)</TableCell>
                          <TableCell align="center">1回/1回(75%)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">4 </TableCell>
                          <TableCell align="center">アポイント取得コール</TableCell>
                          <TableCell align="center">5回/3回(100%)</TableCell>
                          <TableCell align="center">3回/3回(80%)</TableCell>
                          <TableCell align="center">2回/3回(80%)</TableCell>
                          <TableCell align="center">1回/1回(75%)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">5a </TableCell>
                          <TableCell align="center">アポイント取得コール</TableCell>
                          <TableCell align="center">5回/3回(100%)</TableCell>
                          <TableCell align="center">3回/3回(80%)</TableCell>
                          <TableCell align="center">2回/3回(80%)</TableCell>
                          <TableCell align="center">1回/1回(75%)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">5b </TableCell>
                          <TableCell align="center">アポイント取得コール</TableCell>
                          <TableCell align="center">5回/3回(100%)</TableCell>
                          <TableCell align="center">3回/3回(80%)</TableCell>
                          <TableCell align="center">2回/3回(80%)</TableCell>
                          <TableCell align="center">1回/1回(75%)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">5c </TableCell>
                          <TableCell align="center">アポイント取得コール</TableCell>
                          <TableCell align="center">5回/3回(100%)</TableCell>
                          <TableCell align="center">3回/3回(80%)</TableCell>
                          <TableCell align="center">2回/3回(80%)</TableCell>
                          <TableCell align="center">1回/1回(75%)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">6 </TableCell>
                          <TableCell align="center">アポイント取得コール</TableCell>
                          <TableCell align="center">5回/3回(100%)</TableCell>
                          <TableCell align="center">3回/3回(80%)</TableCell>
                          <TableCell align="center">2回/3回(80%)</TableCell>
                          <TableCell align="center">1回/1回(75%)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">7 </TableCell>
                          <TableCell align="center">アポイント取得コール</TableCell>
                          <TableCell align="center">5回/3回(100%)</TableCell>
                          <TableCell align="center">3回/3回(80%)</TableCell>
                          <TableCell align="center">2回/3回(80%)</TableCell>
                          <TableCell align="center">1回/1回(75%)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">8 </TableCell>
                          <TableCell align="center">アポイント取得コール</TableCell>
                          <TableCell align="center">5回/3回(100%)</TableCell>
                          <TableCell align="center">3回/3回(80%)</TableCell>
                          <TableCell align="center">2回/3回(80%)</TableCell>
                          <TableCell align="center">1回/1回(75%)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center" colSpan={2}>ステータス</TableCell>
                          <TableCell align="center" colSpan={3}>受講中(16セクション/24セクション)</TableCell>
                          <TableCell align="center">受講中(4セクション/8セクション)</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
            </Row>
        </div>
    )
}

export default index
