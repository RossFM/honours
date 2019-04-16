
import React, {Component} from 'react';
import * as d3 from "d3";

class Chart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      wall: [],
      isLoaded: false,
      data: []
    }
  }
    componentDidMount() {
      this.accessData();
      }

      accessData(){
        this.setState({wall: this.props.wallTime.map(item => item)})
        this.drawChart();
      }

      drawChart() {
        //const data = [10000,10, 6, 6, 9, 4];
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
          .enter()
          .append("rect")
          .attr("x", (d, i) => i * 70)
          .attr("y", (d, i) => h - 0.5 * d)
          .attr("width", 65)
          .attr("height", (d, i) => d * 0.5)
          .attr("fill", "green")
      }
            
      render(){
        var { wall } = this.state;
        console.log(wall);
        return <div id={"#" + this.props.id}>
        </div>
      }
    }

export default Chart;
