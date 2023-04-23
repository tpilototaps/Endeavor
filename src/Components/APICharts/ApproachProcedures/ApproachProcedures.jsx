import React, { Component } from 'react'
import SearchBoxApproachProcedures from './SearchBoxApproachProcedures/SearchBoxApproachProcedures'

let ident;
let value;
let value2;


const fetchData = () => {
 return fetch(`https://api.aviationapi.com/v1/charts?apt=${ident}&group=6`)
  .then(response => response.json())
}
fetchData()
  .then(data => {
    value = (data[ident][0]['pdf_path'])
  })

  const fetchData2 = () => {
    return fetch(`https://api.aviationapi.com/v1/charts?apt=${ident}&group=6`)
    .then(response => response.json())
  }
  fetchData2()
    .then(data => {
      value2 = (data[ident][1]['pdf_path'])
    })

export default class ApproachProcedures extends Component {

  constructor(){
    super()
    this.state = {
      popularApproach : '',
      secPopularApproach : ''
    }
  };

pushUserAptIdentValue = ((aptIdentifier) => {
  if (aptIdentifier.trim() === ''){
    alert('Please input an airport identifier');
    return;
  }
ident = aptIdentifier
fetchData()
.then(data => {
  console.log('test')
  value = (data[ident][0]['pdf_path'])
  console.log(value)
  console.log(value2)
  this.setState({ popularApproach : value });
  console.log(this.state.popularApproach)
  })
  fetchData2()
  .then(data => {
  value2 = (data[ident][1]['pdf_path'])
  console.log('hi')
  console.log(value2)
  this.setState({ secPopularApproach : value2 });})
})


  render() {
    return (
        <div className='ap-charts'>
          <div className='ap-header'><strong>APPROACH PROCEDURES</strong></div>
          <SearchBoxApproachProcedures popApp = {this.state.popularApproach} secPopApp = {this.state.secPopularApproach} pushUserAptIdentValue = {this.pushUserAptIdentValue}/>
        </div>
    )
  }
}
