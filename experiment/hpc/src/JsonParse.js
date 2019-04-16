import React, { Component } from 'react';
import Form from "./Form";
import Chart from "./Chart";

const API = 'http://localhost:8090/jobs.json';

class JsonParse extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      stuff: [],
      test: "Render props test",
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ stuff: data })
    );
  }

  dataRender(){
    var { stuff } = this.state;
    var dataArr = Object.values(stuff)
    let dataStart = dataArr.map(item => item.start_time)
    let dataEnd = dataArr.map(item => item.end_time)
    console.log(dataStart)
    console.log(dataEnd)
    const output = dataEnd.map(function(item, index){
      return item - dataStart[index];
    })
    console.log(output);
    return(
      <Chart wallTime={[100, 82, 200, 60]}/>
      //This doesn't work, using these fixed values for now
    );
}


  render() {
    var { stuff } = this.state;
    var dataArr = Object.values(stuff)
    var userInput = Object.values(this.props.dataValue)


    return (
      <div>
        {/* <Test test={test}/> */}
        {dataArr.map(item => (
          <p key={item.job_id}>
            {item.job_id}, {item[userInput[0]]}
          </p>
        ))}

        <h1>
          {this.dataRender()}
        </h1>
      </div>

    );
  }
  
}

export default JsonParse;