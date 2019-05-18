import React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

const API = 'http://localhost:8090/chart.json';
var jobTime = [];

/*
So to help us out here, the const data is generating numbers which are then sent directly to createData
which sends them over to the main function in the time, amount format that it understands. So we need to 
keep the x axis data static and insert the output of dataRender into the y axis
*/

// Generate Sales Data
function createData(x, wallTime) {
  return { x, wallTime };
}

function dataRender(x){
  fetch(API)
      .then(response => response.json())
      .then(data => ({ jobTime: data })
    );
    console.log(jobTime)
  var dataArr = Object.values(jobTime)
  let dataStart = dataArr.map(item => item.start_time)
  let dataEnd = dataArr.map(item => item.end_time)
  const wallTime = dataEnd.map(function(item, index){
    return item - dataStart[index]
  })
  console.log(wallTime)
  if(wallTime.length > 0){
    return {x, wallTime};
    }
}

const data = [
  createData('0', 0),
  // createData('1', 100),
  // createData('2', 300),
  // createData('3', 600),
  // createData('4', 800),
];

export default function Chart2() {
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
          <Line type="monotone" dataKey="wallTime" stroke="#556CD6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
