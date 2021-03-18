//imports
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { CoinContext } from './App.js';


const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
});

function createData(date, name, code, open, close) {
  return { date, name, code, open, close };
}

function DataTable() {
  const classes = useStyles();
  const coinContext = React.useContext(CoinContext);
  //get btc from context state
  const {btc} = coinContext.state;
  //convert object to array -> object.entries returns an array of the objects property pairs. [key, value]
  let coinValues = Object.entries(btc["Time Series (Digital Currency Daily)"]);
  let coinNames = Object.entries(btc["Meta Data"]);
  //create data rows
  const rows = [
    createData(coinValues[0][0], coinNames[2][1], coinNames[1][1], coinValues[0][1]["1b. open (USD)"], coinValues[0][1]["4b. close (USD)"]),
    createData(coinValues[1][0], coinNames[2][1], coinNames[1][1], coinValues[1][1]["1b. open (USD)"], coinValues[1][1]["4b. close (USD)"]),
    createData(coinValues[2][0], coinNames[2][1], coinNames[1][1], coinValues[2][1]["1b. open (USD)"], coinValues[2][1]["4b. close (USD)"]),
    createData(coinValues[3][0], coinNames[2][1], coinNames[1][1], coinValues[3][1]["1b. open (USD)"], coinValues[3][1]["4b. close (USD)"]),
    createData(coinValues[4][0], coinNames[2][1], coinNames[1][1], coinValues[4][1]["1b. open (USD)"], coinValues[4][1]["4b. close (USD)"]),
  ];
  return (
    <TableContainer style={{marginBottom:'5em'}} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Date</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Code</TableCell>
            <TableCell align="right">open (USD)</TableCell>
            <TableCell align="right">close (USD)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.code}</TableCell>
              <TableCell align="right">{row.open}</TableCell>
              <TableCell align="right">{row.close}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
