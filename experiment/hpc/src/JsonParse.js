import React, { Component, PureComponent } from 'react';
import Form from "./Form";
import Chart from "./Chart";
import * as d3 from "d3";

const API = 'http://localhost:8090/jobs.json';

class JsonParse extends Component {
  
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
    var dataArr = Object.values(stuff)
    var userInput = Object.values(this.props.dataValue)


    return (
      <div>
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
