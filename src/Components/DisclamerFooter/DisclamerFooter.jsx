import React, { Component } from 'react'
import './DisclamerFooter.css'

export default class DisclamerFooter extends Component {
  render() {
    return (
      <div className='feed-disclamer'>
        <h1 className='feed-disclamer-header'>Important Notice</h1>
        <h6>This application is not intended to replace official aviation sources. Though we believe our application greatly improves situational awareness by providing all your preflight needs on one page, we strongly encourage you to supplement your preflight findings with official FAA approved sources located in the nav bar or top section as legally required by the FAA. Treat this application as a start for preliminary searches and planning, but not as your only and final source. Always remember to reference your POH, up-to-date aeronautical charts, and the last resource you should always look at should be official, up-to-date sources to ensure safe flights.</h6>
        <div className="footer">
        <div className='newsletter'><h6>Sign up for our newsletter</h6> <input className = 'footerinput' placeholder='email@email.com'></input><button className='btn btn-primary'>Subscribe</button></div>
            <div >© 2023 Copyright</div>
        </div>
      </div>
    )
  }
}
