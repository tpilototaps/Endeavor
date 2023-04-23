import React, { Component } from 'react'

export default class OfficialLinks extends Component {
  render() {
    return (
      <div>
        <div>
          <div className='top-buffer'> </div>
          <div className='official'>
            <div className='weather'><a href='https://www.aviationweather.gov/' style={{ textDecoration: "none", color: 'aliceblue' }}><h1>WEATHER</h1></a></div>
            <div className='tfrs'><a href='https://tfr.faa.gov/tfr2/list.html' style={{ textDecoration: "none", color: 'aliceblue' }}><h1>TFRS</h1></a></div>
            <div className='notams'><a href='https://notams.aim.faa.gov/notamSearch/' style={{ textDecoration: "none", color: 'aliceblue' }}><h1>NOTAMS</h1></a></div>
            <div className='ads'><a href='https://www.faa.gov/regulations_policies/airworthiness_directives' style={{ textDecoration: "none", color: 'aliceblue' }}><h1>ADs</h1></a></div>
          </div>
        </div>
      </div>
    )
  }
}
