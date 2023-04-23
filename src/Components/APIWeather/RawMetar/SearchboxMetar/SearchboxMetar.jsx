import React, { Component } from 'react'

export default class SearchboxMetar extends Component {
constructor(){
    super();
    this.state = {
        aptIdentifier : ''
    }
};

handleChange = (event) => {
    this.setState({ aptIdentifier: event.target.value})
};

handleSubmit = (event) => {
    event.preventDefault();
    this.props.pushUserAptIdentValue(this.state.aptIdentifier)
    this.setState({aptIdentifier : ''})
};

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input className='input-metar' type='text' value={this.state.aptIdentifier} onChange={this.handleChange} placeholder='Airport Identifier eg KLAX' />
        <button className = 'search' type = 'submit'>Search</button>
        {/* <input className='search-metar' type='button' value='Search'/> */}
      </form>
        <h6>{this.props.metarInput}</h6>
        <h6>{this.props.tafInput}</h6>
      </div>
    )
  };
};
