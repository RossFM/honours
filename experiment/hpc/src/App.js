import React, { Component } from 'react';
import JsonParse from './JsonParse'
import Form from './Form'
import Chart from './Chart'
import Dashboard from './Dashboard'
import Comp from './Comp.test'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      {<Dashboard/>}
      {/* {<Form/>}
      {<Chart/>} */}
    </React.Fragment>
    );
  }
}

export default App;


