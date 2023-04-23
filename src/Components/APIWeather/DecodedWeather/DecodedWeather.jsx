import React, { Component } from 'react'
import SearchBoxDecodedWeather from './SearchBoxDecodedWeather/SearchBoxDecodedWeather'

// GLOBAL VARIABLES NEEDED FOR USE IN THE CLASS AND VICE VERSA
let ident;
let labelaptid;
let aptid;
let labeltemp;
let temp;
let labeldewpoint;
let dewpoint;
let labelwindD;
let windDirection;
let labelwindV;
let windVelocity;
let labelvisibility;
let visibility;
let labelaltimeter;
let altimeter;
let labelsky;
let sky;
let labelflightC;
let flightConditions;
let labelobservationT;
let observationTime;

// MAKING THE API CALL TRIGGERED WHEN USER CLICKS SEARCH METAR USING .THEN INSTEAD OF AWAIT DUE TO REACT RESTRICTIONS

const fetchDataAptId = () => {
  return fetch(`https://api.aviationapi.com/v1/weather/metar?apt=${ident}`)
  .then(response => response.json())
}
fetchDataAptId()
  .then(data => {
    aptid = (data[ident]['station_id'])
  })

const fetchDataTemp = () => {
  return fetch(`https://api.aviationapi.com/v1/weather/metar?apt=${ident}`)
  .then(response => response.json())
}
fetchDataTemp()
  .then(data => {
    temp = (data[ident]['raw'])
  })

const fetchDataDewPoint = () => {
  return fetch(`https://api.aviationapi.com/v1/weather/metar?apt=${ident}`)
  .then(response => response.json())
}
fetchDataDewPoint()
  .then(data => {
    dewpoint = (data[ident]['raw'])
  })

const fetchDataWindDirection = () => {
  return fetch(`https://api.aviationapi.com/v1/weather/metar?apt=${ident}`)
  .then(response => response.json())
}
fetchDataWindDirection()
  .then(data => {
    windDirection = (data[ident]['raw'])
  })

const fetchDataWindVelocity = () => {
  return fetch(`https://api.aviationapi.com/v1/weather/metar?apt=${ident}`)
  .then(response => response.json())
}
fetchDataWindVelocity()
  .then(data => {
    windVelocity = (data[ident]['raw'])
  })

const fetchDataVisibility = () => {
  return fetch(`https://api.aviationapi.com/v1/weather/metar?apt=${ident}`)
  .then(response => response.json())
}
fetchDataVisibility()
  .then(data => {
    visibility = (data[ident]['raw'])
  })

const fetchDataAltimeter = () => {
  return fetch(`https://api.aviationapi.com/v1/weather/metar?apt=${ident}`)
  .then(response => response.json())
}
fetchDataAltimeter()
  .then(data => {
    altimeter = (data[ident]['raw'])
  })

const fetchDataSky = () => {
  return fetch(`https://api.aviationapi.com/v1/weather/metar?apt=${ident}`)
  .then(response => response.json())
}
fetchDataSky()
  .then(data => {
    sky = (data[ident]['raw'])
  })

const fetchDataFlightConditions = () => {
  return fetch(`https://api.aviationapi.com/v1/weather/metar?apt=${ident}`)
  .then(response => response.json())
}
fetchDataFlightConditions()
  .then(data => {
    flightConditions = (data[ident]['raw'])
  })

const fetchDataObservationTime = () => {
  return fetch(`https://api.aviationapi.com/v1/weather/metar?apt=${ident}`)
  .then(response => response.json())
}
fetchDataObservationTime()
  .then(data => {
    observationTime = (data[ident]['raw'])
  })
// CLASS BASED COMPONENT
export default class DecodedWeather extends Component {
  constructor() {
    super()
    this.state = {
      'aptid' : '',
      decodedWeatherAptId : '',
      'temperature' : '',
      decodedWeatherTemp : '',
      'dewpoint': '',
      decodedWeatherDewpoint : '',
      'windDirection' : '',
      decodedWeatherWindDirection : '',
      'windVelocity' : '',
      decodedWeatherWindVelocity : '',
      'visibility' : '',
      decodedWeatherVisibility : '',
      'altimeter' : '',
      decodedWeatherAltimeter : '',
      'skyConditions' : '',
      decodedWeatherSkyConditions : '',
      'flightConditions' : '',
      decodedWeatherFlightConditions : '',
      'observationTime' : '',
      decodedWeatherTimeOfObservation : ''
    }
  }
// FUNCTION CALLED BY CHILD COMPONENT FOR USE ON THIS PARENT COMPONENT TO CALL THE FETCH DATA FUNCTION WHICH THEN MAKES THE API CALL
pushUserAptIdentValue = ((aptIdentifier) => {
  if (aptIdentifier.trim() === ''){
      alert('Please input an airport identifier');
      return;
      }
  ident = aptIdentifier 


  
  fetchDataAptId()
  .then(data => {
  labelaptid = 'Airport Identifier: '
  this.setState({'aptid' : labelaptid})
  aptid = (data[ident]['station_id'])
  this.setState({ decodedWeatherAptId : aptid });})

  fetchDataTemp()
  .then(data => {
  labeltemp = 'Temperature: '
  this.setState({'temperature' : labeltemp})
  temp = (data[ident]['temp'])
  this.setState({ decodedWeatherTemp : temp });})

  fetchDataDewPoint()
  .then(data => {
  labeldewpoint = 'Dew Point: '
  this.setState({'dewpoint' : labeldewpoint})
  dewpoint = (data[ident]['dewpoint'])
  this.setState({ decodedWeatherDewpoint: dewpoint });})

  fetchDataWindDirection()
  .then(data => {
  labelwindD = 'Wind Direction: '
  this.setState({'windDirection' : labelwindD})
  windDirection = (data[ident]['wind'])
  this.setState({ decodedWeatherWindDirection: windDirection });})

  fetchDataWindVelocity()
  .then(data => {
  labelwindV = 'Wind Velocity: '
  this.setState({'windVelocity' : labelwindV})
  windVelocity = (data[ident]['wind_vel'])
  this.setState({ decodedWeatherWindVelocity: windVelocity });})

  fetchDataVisibility()
  .then(data => {
  labelvisibility = 'Visibility: '
  this.setState({ 'visibility' : labelvisibility})
  visibility = (data[ident]['visibility'])
  this.setState({ decodedWeatherVisibility: visibility });})

  fetchDataAltimeter()
  .then(data => {
  labelaltimeter = 'Altimeter Setting: '
  this.setState({ 'altimeter' : labelaltimeter})
  altimeter = (data[ident]['alt_hg'])
  this.setState({ decodedWeatherAltimeter: altimeter });})

  fetchDataSky()
  .then(data => {
  labelsky = 'Sky: '
  this.setState({ 'skyConditions' : labelsky})
  sky = (data[ident]['sky_conditions'][0]['coverage'])
  this.setState({ decodedWeatherSkyConditions: sky });})

  fetchDataFlightConditions()
  .then(data => {
  labelflightC = 'Flight Conditions: '
  this.setState({ 'flightConditions' : labelflightC})
  flightConditions = (data[ident]['category'])
  this.setState({ decodedWeatherFlightConditions: flightConditions });})

  fetchDataObservationTime()
  .then(data => {
  labelobservationT = 'Observation Time: '
  this.setState({ 'observationTime' : labelobservationT})
  observationTime = (data[ident]['time_of_obs'])
  this.setState({ decodedWeatherTimeOfObservation: observationTime });})

  });
  

  render() {
    return (
      <div className='laymans-weather'>
      <div className='weather-header'><strong>DECODED WEATHER</strong></div>
      <SearchBoxDecodedWeather 
      labelaptid = {this.state.aptid}
      aptid = {this.state.decodedWeatherAptId}
      labeltemp = {this.state.temperature}
      temp = {this.state.decodedWeatherTemp}
      labeldewpoint = {this.state.dewpoint}
      dewpoint = {this.state.decodedWeatherDewpoint} 
      labelwindD = {this.state.windDirection}
      windDirection = {this.state.decodedWeatherWindDirection}
      labelwindV = {this.state.windVelocity}
      windVelocity = {this.state.decodedWeatherWindVelocity}
      labelvisibility = {this.state.visibility}
      visibility = {this.state.decodedWeatherVisibility}
      labelaltimeter = {this.state.altimeter}
      altimeter = {this.state.decodedWeatherAltimeter}
      labelsky = {this.state.skyConditions}
      sky = {this.state.decodedWeatherSkyConditions}
      labelflightC = {this.state.flightConditions}
      flightConditions = {this.state.decodedWeatherFlightConditions}
      labelobservationT = {this.state.observationTime}
      observationTime = {this.state.decodedWeatherTimeOfObservation}
      pushUserAptIdentValue= {this.pushUserAptIdentValue}/>
      </div>
    )
  };
}
