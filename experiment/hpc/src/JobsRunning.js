import React, { Component} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

const API = 'http://localhost:8090/jobs.json';

class JobsRunning extends Component {
  
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
    
      render() {
        var { stuff } = this.state;
        var dataArr = Object.values(stuff).reverse()
    
    
        return (
    <React.Fragment>
        <Title>Recent Jobs</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell>Job ID</TableCell>
            <TableCell>Node(s)</TableCell>
            <TableCell>Command</TableCell>
            <TableCell>Job State</TableCell>
            <TableCell>Partition</TableCell>
            <TableCell>Run Time</TableCell>
            <TableCell>Exit Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataArr.map(item => (
            <TableRow key={item.job_id}>
                <TableCell>{item.user_id}</TableCell>
              <TableCell>{item.job_id}</TableCell>
              <TableCell>{item.nodes}</TableCell>
              <TableCell>{item.command}</TableCell>
              <TableCell>{item.job_state}</TableCell>
              <TableCell>{item.partition}</TableCell>
              <TableCell>{item.run_time_str}</TableCell>
              <TableCell>{item.exit_code}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </React.Fragment>
          
        );
      }
  
}

export default JobsRunning;
