import React, { Component } from 'react'
import SearchboxMetar from './SearchboxMetar/SearchboxMetar'

// GLOBAL VARIABLES NEEDED FOR USE IN THE CLASS AND VICE VERSA
let ident;
let value;
let value2;

// MAKING THE API CALL TRIGGERED WHEN USER CLICKS SEARCH METAR USING .THEN INSTEAD OF AWAIT DUE TO REACT RESTRICTIONS
const fetchData = () => {
  return fetch(`https://api.aviationapi.com/v1/weather/metar?apt=${ident}`)
  .then(response => response.json())
}
fetchData()
  .then(data => {
    value = (data[ident]['raw'])
  })

  const fetchData2 = () => {
    return fetch(`https://api.aviationapi.com/v1/weather/taf?apt=${ident}`)
    .then(response => response.json())
  }
  fetchData2()
    .then(data => {
      value2 = (data[ident]['raw'])
    })

// REACT RAW METAR CLASS COMPONENT
export default class RawMetar extends Component {

constructor(){
  super()
    this.state = {
      rawMetar : '',
      rawTaf : ''
    }
  };

// FUNCTION CALLED BY CHILD COMPONENT FOR USE ON THIS PARENT COMPONENT TO CALL THE FETCH DATA FUNCTION WHICH THEN MAKES THE API CALL
pushUserAptIdentValue = ((aptIdentifier) => {
  if (aptIdentifier.trim() === ''){
      alert('Please input an airport identifier');
      return;
      }
  ident = aptIdentifier 
  fetchData()
  .then(data => {
  value = (data[ident]['raw'])
  this.setState({ rawMetar : value });
  })
  fetchData2()
  .then(data => {
  value2 = (data[ident]['raw'])
  this.setState({ rawTaf : value2 });})
  });

// RENDER METHOD WHICH DISPLAYS TO TEH SCREEN WHAT WE ARE SEEING
render() {
  return (
    <div className='pilot-metar-taf'>
    <div className='metar-header'><strong>RAW METAR AND TAF</strong></div> 
    <SearchboxMetar metarInput={this.state.rawMetar} tafInput = {this.state.rawTaf} pushUserAptIdentValue={this.pushUserAptIdentValue}/>      
    </div>  
   )
 };
}

