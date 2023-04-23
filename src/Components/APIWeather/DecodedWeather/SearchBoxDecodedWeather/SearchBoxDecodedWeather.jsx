import React, { Component } from 'react'

export default class SearchBoxDecodedWeather extends Component {
constructor(){
    super()
    this.state = {
        aptIdentifier :''
    }
};

handleChange = (event) => {
    this.setState({aptIdentifier : event.target.value})
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
          <h6>{this.props.labelaptid}{this.props.aptid}</h6>
          <h6>{this.props.labeltemp}{this.props.temp}</h6>
          <h6>{this.props.labeldewpoint}{this.props.dewpoint}</h6>
          <h6>{this.props.labelwindD}{this.props.windDirection}</h6>
          <h6>{this.props.labelwindV}{this.props.windVelocity}</h6>
          <h6>{this.props.labelvisibility}{this.props.visibility}</h6>
          <h6>{this.props.labelaltimeter}{this.props.altimeter}</h6>
          <h6>{this.props.labelsky}{this.props.sky}</h6>
          <h6>{this.props.labelflightC}{this.props.flightConditions}</h6>
          <h6>{this.props.labelobservationT}{this.props.observationTime}</h6>
        </div>
    )
  };
}
