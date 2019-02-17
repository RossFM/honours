import React, { Component } from 'react';
import Form from "./Form";

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
    var userInput = this.props.dataValue

    return (
      <div>
      <ul>
        {dataArr.map(item => (
          <li key={item.job_id}>
            {item.job_id}, {item[userInput]}
          </li>
        ))}
      </ul>
      </div>
    );
  }
}

export default JsonParse;