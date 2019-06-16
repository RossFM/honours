/* eslint-disable no-script-url */

import React, {Component} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const API = 'http://localhost:8090/stats.json';

// const useStyles = makeStyles({
//   depositContext: {
//     flex: 1,
//   },
// });

class Uptime extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stuff: [],
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ stuff: data })
    );
    
  }

  uptimeCalc(){
    var dataArr = Object.values(this.state.stuff)
    var upTime = dataArr[21] - dataArr[22]
    var date = new Date(upTime*1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime
  }

  render(){
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Title>System Uptime</Title>
      <Typography component="p" variant="h4">
        {this.uptimeCalc()}
      </Typography>
      {/* <Typography color="textSecondary" className={classes.depositContext}>
        6 April, 2019
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
          *Graphic here*
        </Link>
      </div> */}
    </React.Fragment>
  );
}}
export default Uptime
