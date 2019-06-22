/* eslint-disable no-script-url */

import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const API = 'http://localhost:8090/stats.json';

class Uptime extends Component {

  constructor(props) {
    super(props);

    this.uptime = 0;

    this.state = {
      stuff: []
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
    this.uptime = dataArr[21] - dataArr[22]

    var date = new Date(this.uptime*1000);
    var formattedTime = date.getHours().toString()
    
    return formattedTime
  }

  render(){
  return (
    <React.Fragment>
      <Title>System Uptime</Title>
      <Typography component="p" variant="h4">
      {this.uptimeCalc()} Hrs
      </Typography>
    </React.Fragment>
  );
}}
export default Uptime
