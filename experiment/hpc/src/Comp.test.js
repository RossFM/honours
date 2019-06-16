import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

class Comp extends Component {
  
  constructor(props) {
    super(props);

    this.count = 0;

    this.state = {
      jobTime: [],
      n: 0

    }
  }

  componentDidMount() {
    const API = 'http://localhost:8090/chart.json';
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({ jobTime: data })
  );
    }

  createData(x) {
      var wallTime = this.dataRender()

    return { x, wallTime };
  }

  dataRender(){
    var dataArr = Object.values(this.state.jobTime)
    let dataStart = dataArr.map(item => item.start_time)
    let dataEnd = dataArr.map(item => item.end_time)
    const wallTime = dataEnd.map(function(item, index){
      return item - dataStart[index]
    })
    
    var newData = wallTime[this.count]
    if(wallTime.length > 0){
        this.count++;
      return newData
      }
  }

  
  render() {
      const data = [
        //this.dataRender('0')
         this.createData('1'),
         this.createData('2'),
         this.createData('3'),
         this.createData('4')
      ];
      console.log(data)

    return (
        <React.Fragment>
          <Title>Recent Job Times</Title>
          <ResponsiveContainer>
            <LineChart
              data={data}
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
