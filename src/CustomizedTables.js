import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';

import orderStatus from './orderStatus';
import orderButtonText from './orderButtonText';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables({orders, updateStatus, loading}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Total Price</StyledTableCell>
            <StyledTableCell align="right">Financial Status</StyledTableCell>
            <StyledTableCell align="right">Fulfillment Status</StyledTableCell>
            <StyledTableCell align="right">Placed Date/Time</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(order => (
            <StyledTableRow key={order.id}>
              <StyledTableCell component="th" scope="row">
                {order.id}
              </StyledTableCell>
              <StyledTableCell align="right">{order.name}</StyledTableCell>
              <StyledTableCell align="right">{order.total_price}</StyledTableCell>
              <StyledTableCell align="right">{order.financial_status}</StyledTableCell>
              <StyledTableCell align="right"><label style={{'padding': '5px', 'color': '#ffffff', 'backgroundColor': ''+orderStatus(order.fulfillment_status).color+''}}>{orderStatus(order.fulfillment_status).status}</label></StyledTableCell>
              <StyledTableCell align="right">{new Date(order.DateTime_Created).toLocaleString("en-US", {timeZone: "Europe/Berlin"})}</StyledTableCell>
              <StyledTableCell align="right">
                  {
                      order.fulfillment_status !== '4' ? 
<Button variant="contained" color="primary" onClick={() => updateStatus(order.id, Number(order.fulfillment_status) + 1)}>
                {orderButtonText(order.fulfillment_status).status}
             </Button>
             :
             <FormLabel component="legend">{orderButtonText(order.fulfillment_status).status}</FormLabel>

                  }
              
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}