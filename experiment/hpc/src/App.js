import React, { Component } from 'react';
import { ThemeProvider } from "@material-ui/styles";
import JsonParse from './JsonParse'
import Form from './Form'
import Chart from './Chart'
import Dashboard from './Dashboard'
import Comp from './Comp.test'
import theme from './theme'
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';


// class App extends Component {
//   render() {
//     return (
      
//       <React.Fragment>
//         <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {<Dashboard/>}
//       {/* {<Form/>}
//       {<Chart/>} */}
//       </ThemeProvider>
//     </React.Fragment>
    
//     );
//   }
// }

// export default App;

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Dashboard />
  </ThemeProvider>
);
export default App;


