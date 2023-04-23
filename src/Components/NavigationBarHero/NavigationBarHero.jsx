import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import IfUserAuthenticated from '../IfUserAuthenticated/IfUserAuthenticated'

export default class NavigationBarHero extends Component {
  render() {
    return (
      <div>
        {/* header */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to = '/' className="navbar-brand">Endeavor</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to = '/Feed' className="nav-link">Home <span class="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link to = '/Auth' className="nav-link">Signin/Signup</Link>
              </li>
              <li className="nav-item">
                <Link to = '' className="nav-link"><IfUserAuthenticated/></Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* headerend */}

        <div className='feed-hero'>
          <h1>READY FOR DEPARTURE?</h1>
          <h3>Your one stop shop for all your web-based preflight needs </h3>
          <h3>Official FAA approved links are in the cards in the section below </h3>
        </div>
      </div>
    )
  }
}
