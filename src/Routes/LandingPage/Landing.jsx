import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export default class Landing extends Component {
  render() {
    return (
      <body className='main'>
        
          <h1 className='greeting'>WELCOME TO ENDEAVOR</h1>
          <h3 className='greeting'>All your preflight needs in one application</h3>
          <Link to = '/Auth'><button className='btn btn-success'>Get Started</button></Link>
          
      </body>
    )
  }
}
