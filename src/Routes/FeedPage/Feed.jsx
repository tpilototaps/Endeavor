import React, { Component } from 'react'
import APICharts from '../../Components/APICharts/APICharts'
import APIWeather from '../../Components/APIWeather/APIWeather'
import DisclamerFooter from '../../Components/DisclamerFooter/DisclamerFooter'
import NavigationBarHero from '../../Components/NavigationBarHero/NavigationBarHero'
import OfficialLinks from '../../Components/OfficialLinks/OfficialLinks'
import PilotLogBook from '../../Components/PilotLogBook/PilotLogBook'
import './Feed.css'

export default class Feed extends Component {
  constructor(){
    super()
    this.state = {
      placeholder : []
    }
  }

  render() {
    return (
      <body className='feed-main'>
        <NavigationBarHero/>
        <OfficialLinks/> 
        <div className='api-feed'>
        <div className='clouds'>
        <APIWeather/>
        <APICharts/>
        </div>
        </div>
        <PilotLogBook/>
        <DisclamerFooter/>
      </body>
    )
  }
}
