import React, { Component} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

const API = 'http://localhost:8090/nodes.json';

class NodeStats extends Component {

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

  render(){
    var { stuff } = this.state;
    var dataArr = Object.values(stuff)

  // const useStyles = makeStyles(theme => ({
  //   seeMore: {
  //     spacing: 4,
  //   },
  // }));

  //const classes = useStyles();
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
          {dataArr.map(item => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">{item.state}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more
        </Link>
      </div> */}
    </React.Fragment>
  );
}}
export default NodeStats
