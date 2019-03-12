import React, { Component } from 'react';
import Select from 'react-select';
import JsonParse from './JsonParse';
 
const options = [
	{ value: 'priority', label: 'Priority' },
	{ value: 'command', label: 'Command' },
	{ value: 'nodes', label: 'Node' }
  ];
  
  class DropDown extends React.Component {
	state = {
	  selectedOption: '',
	}
	handleChange = (selectedOption) => {
	  this.setState({ selectedOption });
	  console.log(`Option selected:`, selectedOption);
	}

	renderJson(){
		return(
				<JsonParse dataValue={this.state.selectedOption}/>
		);}  


	render() {
	  const { selectedOption } = this.state;
  
	  return (
			<main>
		<Select 
		  value={selectedOption}
		  onChange={this.handleChange}
		  options={options}
		/>
		{this.renderJson()}
		</main>
		);
	}
  }
  

export default DropDown;