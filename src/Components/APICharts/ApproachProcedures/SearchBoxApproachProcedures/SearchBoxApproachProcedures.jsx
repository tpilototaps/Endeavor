import React, { Component } from 'react'

export default class SearchBoxApproachProcedures extends Component {

constructor (){
  super()
  this.state = {
      aptIdentifier : ''
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
      <div className='holder'>
      <form onSubmit={this.handleSubmit}>
        <input className='input-metar' type='text' value={this.state.aptIdentifier} onChange={this.handleChange} placeholder='Airport Identifier eg KLAX' />
        <button className = 'search' type = 'submit'>Search</button>
      </form>
        <iframe title='1' className = 'iframe' src={this.props.popApp}></iframe> 
        <br/>
        <iframe title='2' className = 'iframe' src={this.props.secPopApp}></iframe>

      </div>
    )
  };
}
