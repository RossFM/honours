import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from "@material-ui/styles";
import JsonParse from './JsonParse'
import Form from './Form'
import Chart from './Chart'
import Dashboard from './Dashboard'
import Comp from './Comp.test'
import theme from './theme'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';


class App extends Component {
  render() {
    return (
      
      <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/:id" component={Form} />
    </Switch>
    
    );
  }
}

export default App;

// const App = () => (
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <Dashboard />
//   </ThemeProvider>
// );
// export default App;


