import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from "@material-ui/styles";
import JsonParse from './old/JsonParse'
import Form from './old/Form'
import Chart from './old/Chart'
import Dashboard from './Dashboard'
import Comp from './Comp.test'
//import theme from './theme'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dash_Tutorial from './Dash_Tutorial';
import Dash_Home from './Dash_Home';
import Dash_Enviro from './Dash_Enviro';
import Dash_Resource from './Dash_Resource';
import Dash_Tensor from './Dash_Tensor';


class App extends Component {
  render() {
    return (

      <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/tutorial" component={Dash_Tutorial} />
      <Route path="/hpc2" component={Dash_Home} />
      <Route path="/environment" component={Dash_Enviro} />
      <Route path="/resources" component={Dash_Resource} />
      <Route path="/tensor" component={Dash_Tensor} />
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


