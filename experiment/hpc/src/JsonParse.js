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

class Chartint extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    this.setState({isLoaded: true})
  }

  componentDidUpdate(){
    if(this.state.isLoaded || this.props.wallTime.length > 0){
    this.drawChart()
    this.setState({isLoaded : false})
    }
  }

      drawChart() {
        //const data = [10, 10, 6, 6, 9, 4];
        const data = this.props.wallTime;
        const w = 700; //width
        const h = 300; //height
        const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .style("margin-left", 100);
                      
        
        svg.selectAll("rect")
          .data(data)
          .join("rect")
          .attr("x", (d, i) => i * 70)
          .attr("y", (d, i) => h - 10 * d)
          .attr("width", 65)
          .attr("height", (d, i) => d * 10)
          .attr("fill", "green")
      
    }
      render(){
        console.log(this.props.wallTime)
        return <div id={"#" + this.props.id}>
        </div>
      }
    }
