import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

const API = 'http://localhost:8090/chart.json';

class Comp extends Component {
  
  constructor(props) {
    super(props);

    this.data = [];

    this.state = {
      jobTime: []

    }
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({ jobTime: data })
  );

    }

    manufacture(){
      this.data = [
        this.createData('1'),
        this.createData('2'),
        this.createData('3'),
        this.createData('4')
     ];

    }

  createData(x) {
      var wallTime = this.dataRender(x)
    return { x, wallTime };
  }

  dataRender(x){
    console.log(x)
    var dataArr = Object.values(this.state.jobTime)
    let dataStart = dataArr.map(item => item.start_time)
    let dataEnd = dataArr.map(item => item.end_time)
    const wallTime = dataEnd.map(function(item, index){
      return item - dataStart[index]
    })
    
    var newData = wallTime[x-1]
    if(wallTime.length > 0){
      return newData
      }
  }

  
  render() {

      this.manufacture();


    return (
        <React.Fragment>
          <Title>Recent Job Times</Title>
          <ResponsiveContainer>
            <LineChart
              data={this.data}
              margin={{
                top: 16,
                right: 16,
                bottom: 0,
                left: 24,
              }}
            >
              <XAxis dataKey="x" />
              <YAxis>
                <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
                  Time (S)
                </Label>
              </YAxis>
              <Line type="linear" dataKey="wallTime" stroke="#8E6BBF" dot={true} />
            </LineChart>
          </ResponsiveContainer>
        </React.Fragment>
      );
  }
  
}

export default Comp;
