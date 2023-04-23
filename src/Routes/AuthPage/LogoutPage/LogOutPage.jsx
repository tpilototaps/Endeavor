import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../../Utils/Firebase/Firebase'
import './LogOutPage.css'


function LogOutPage() {
    return (
      <body className='mainout'>
          <h1 className='greetingout'>Signing Off?</h1>
          <div>
          <button className='btn btn-danger'>Log Out</button> 
          <Link to = '/Feed' className="navbar-brand"><button className='btn btn-success'>Back To Feed</button></Link>
          
          </div>
      </body>
    )
}
export default LogOutPage