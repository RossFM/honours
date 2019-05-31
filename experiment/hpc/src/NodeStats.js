/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Data
function createData(id, date, name) {
  return { id, date, name};
}

const rows = [
  createData(0, 'Head Node', 'Up'),
  createData(1, 'Node 1', 'Up'),
  createData(2, 'Node 2', 'Up'),
  createData(3, 'Node 3', 'Down'),
  createData(4, 'Node 4', 'Up'),
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    spacing: 4,
  },
}));

export default function NodeStats() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Node Stats</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Node</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more
        </Link>
      </div>
    </React.Fragment>
  );
}
