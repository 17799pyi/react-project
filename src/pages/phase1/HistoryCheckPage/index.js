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
  tTable: {
    borderCollapse: 'separate',
  },
  tableContainer: {
    boxShadow : "none",
    borderRadius: 0,
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
      borderLeft: "1px solid white",
      background: "#00A5D9",
      fontSize: 16,
      fontWeight: 'bold',
      "&:nth-child(2)": {
        borderLeftColor: "#00A5D9",
      },
      "&:last-child" : {      
        borderRight: "1px solid #00A5D9",
      }
    }
  } ,
  tRowThird: {
    // border : "1px solid #00A5D9",
    "& th" : {
      color: "white",
      border: "none",
      borderLeft: "1px solid white",
      background: "#00A5D9",
      fontSize: 16,
      fontWeight: 'bold',
      "&:first-child" : {
        borderTopLeftRadius: "5px",        
        borderLeftColor: "#00A5D9",
      },
      "&:last-child" : {      
        borderRight: "1px solid #00A5D9",
      }
    }
  },
  tRowSecond: {
    background: "#E9FAFF !important",
    "& th" : {
      color: "black",
      border: "none",
      borderLeft: "1px solid #D1D1D1",
      fontSize: 16,
      fontWeight: 'bold',
      "&:first-child" : {
        borderLeft: 0,
      },
      "&:last-child" : {      
        borderRight: "1px solid #D1D1D1",
      }
    }
  },
  tBody: {
    border: "none",
    borderRadius: "20px",
    "& td" : {
      borderLeft: "1px solid #D1D1D1",
      fontFamily: "Meiryo",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "21px",
      alignItems : "center",
      textAlign : "center",
      "&:last-child" : {      
        borderRight: "1px solid #D1D1D1",
      }
    }
  },
  firstHeaderRadius : {
    borderTopLeftRadius : "5px"
  },
  secondHeaderRadius : {
    borderTopRightRadius : "5px"
  },
  firstColor : {
    background: "#E9FAFF"
  },
  secondColor : {
    background: "#FCD9CC",
    color:"#E98300"
  },
  thirdColor : {
    color: "red",
    background : "#E2242C5E",
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
                  <Table aria-label="spanning table"  classes={{root : classes.tTable}}>
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
                          <TableCell align="center" classes={{root : classes.firstColor}}>5回/3回(100%)</TableCell>
                          <TableCell align="center" classes={{root : classes.firstColor}}>3回/3回(80%)</TableCell>
                          <TableCell align="center" classes={{root : classes.secondColor}}>2回/3回(80%)</TableCell>
                          <TableCell align="center" classes={{root : classes.thirdColor}}>1回/1回(0%)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">3 </TableCell>
                          <TableCell align="center">アポイント取得コール</TableCell>
                          <TableCell align="center" classes={{root : classes.firstColor}}>5回/3回(100%)</TableCell>
                          <TableCell align="center" classes={{root : classes.firstColor}}>3回/3回(80%)</TableCell>
                          <TableCell align="center" classes={{root : classes.secondColor}}>2回/3回(80%)</TableCell>
                          <TableCell align="center" classes={{root : classes.firstColor}}>1回/1回(75%)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">4 </TableCell>
                          <TableCell align="center">アポイント取得コール</TableCell>
                          <TableCell align="center" classes={{root : classes.firstColor}}>5回/3回(100%)</TableCell>
                          <TableCell align="center" classes={{root : classes.firstColor}}>3回/3回(80%)</TableCell>
                          <TableCell align="center" classes={{root : classes.secondColor}}>2回/3回(80%)</TableCell>
                          <TableCell align="center" classes={{root : classes.thirdColor}}>1回/1回(0%)</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="center">5a </TableCell>
                          <TableCell align="center">アポイント取得コール</TableCell>
                          <TableCell align="center"classes={{root : classes.firstColor}}>3回/3回(80%)</TableCell>
                          <TableCell align="center">-</TableCell>
                          <TableCell align="center" classes={{root : classes.secondColor}}>2回/3回(80%)</TableCell>
                          <TableCell align="center" classes={{root : classes.thirdColor}}>1回/1回(0%)</TableCell>
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
                          <TableCell align="center" colSpan={3} classes={{root : classes.secondColor}}>受講中(16セクション/24セクション)</TableCell>
                          <TableCell align="center" classes={{root : classes.secondColor}}>受講中(4セクション/8セクション)</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
            </Row>
        </div>
    )
}

export default index
