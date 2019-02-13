import React, { Component } from 'react';
import JsonParse from './JsonParse'
import Form from './Form'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      {<Form/>}
      
    </React.Fragment>
    );
  }
}

export default App;


