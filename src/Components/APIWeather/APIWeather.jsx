import React, { Component } from 'react'
import DecodedWeather from './DecodedWeather/DecodedWeather'
import RawMetar from './RawMetar/RawMetar'


export default class APIWeather extends Component {
  render() {
    return (
      <div className='api-weather'>
      <RawMetar/>
      <DecodedWeather/>
      </div>
    )
  }
}
