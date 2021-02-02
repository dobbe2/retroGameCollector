import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(title, system, description, condition, pricePaid) {
  return { title, system, description, condition, pricePaid };
}

const rows = [
  createData('Super Mario Brothers 3', 'NES', 'A wonderful platformer, an NES classic, What if this goes on forever, will it run into another line?Or will it just go on on on on on on on on on ', 'Like New', 25),
  createData('Contra', 'NES', 'Run and Gun with Lance and Bill', 'Average', 'free'),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function GameList() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Game Title</TableCell>
            <TableCell align="right">System</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Condition</TableCell>
            <TableCell align="right">Price Paid</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.system}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.condition}</TableCell>
              <TableCell align="right">{row.pricePaid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
