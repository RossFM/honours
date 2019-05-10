/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Uptime() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>System Uptime</Title>
      <Typography component="p" variant="h4">
        110H
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        6 April, 2019
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
          *Graphic here*
        </Link>
      </div>
    </React.Fragment>
  );
}
