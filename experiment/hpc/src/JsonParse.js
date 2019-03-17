import React, { Component } from 'react';
import Form from "./Form";

const API = 'http://localhost:8090/jobs.json';

class JsonParse extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      stuff: [],
      output: []
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
    console.log(userInput[0])
    console.log(this.state.output)

    return (
      <div>
      <ul>
        {dataArr.map(item => (
          <li key={item.job_id}>
            {item.job_id}, {item[userInput[0]]}
          </li>
        ))}
      </ul>
      </div>
    );
  }
  
}

export default JsonParse;