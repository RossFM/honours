
import React, {Component} from 'react';
import * as d3 from "d3";
import JsonParse from "./JsonParse";

const API = 'http://localhost:8090/jobs.json';

class Chart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      jobTime: []
    }
  }
    componentDidMount() {
      fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ jobTime: data })
    );
      }

      dataRender(){
        var { jobTime } = this.state;
        var dataArr = Object.values(jobTime)
        let dataStart = dataArr.map(item => item.start_time)
        let dataEnd = dataArr.map(item => item.end_time)
        const wallTime = dataEnd.map(function(item, index){
          return item - dataStart[index]
        })
        console.log(wallTime)
        if(wallTime.length > 0){
        this.drawChart(wallTime);
        }
    }

      drawChart(wallTime) {
        //const data = [10000,10, 6, 6, 9, 4];
        const data = wallTime;
        const w = 700; //width
        const h = 300; //height
        const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .style("margin-left", 100);
                      
        svg.selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
          .attr("x", (d, i) => i * 70)
          .attr("y", (d, i) => h - 10 * d)
          .attr("width", 65)
          .attr("height", (d, i) => d * 10)
          .attr("fill", "green")
      }
            
      render(){
        this.dataRender();
        return <div id={"#" + this.props.id}>
        </div>
      }
    }

export default Chart;
