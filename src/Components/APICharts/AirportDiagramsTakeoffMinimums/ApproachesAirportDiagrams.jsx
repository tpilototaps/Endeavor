import React, { Component } from 'react'
import SearchBoxApproachesAirportDiagrams from './SearchBoxApproachesAirportDiagrams/SearchBoxApproachesAirportDiagrams'


// GLOBAL VARIABLES NEEDED FOR USE IN THE CLASS AND VICE VERSA
let ident = '';
let value = '';
let value2 = '';

const fetchData = () => {
  return fetch(`https://api.aviationapi.com/v1/charts?apt=${ident}&group=2`)
  .then(response => response.json())
}
fetchData()
  .then(data => {
    value = (data[ident][0]['pdf_path'])
  })

  const fetchData2 = () => {
    return fetch(`https://api.aviationapi.com/v1/charts?apt=${ident}`)
    .then(response => response.json())
  }
  fetchData2()
    .then(data => {
      value2 = (data[ident][0]['chart_name'])
    })

export default class ApproachesAirportDiagrams extends Component {
  constructor(){
    super()
    this.state = {
      airportDiagrams : '',
      approachCharts : ''
    }
  };

  pushUserAptIdentValue = ((aptIdentifier) => {
    if (aptIdentifier.trim() === ''){
        alert('Please input an airport identifier');
        return;
        }
    ident = aptIdentifier 
    console.log('test')
    console.log(ident)
    console.log(value)
    fetchData()
    .then(data => {
    console.log('test1')
    value = (data[ident][0]['pdf_path'])
    console.log(value)
    console.log(value2)
    this.setState({ airportDiagrams : value })
    console.log(this.state.airportDiagrams);
    })
    fetchData2()
    .then(data => {
    console.log('test1')
    value2 = (data[ident][0]['pdf_path'])
    console.log(value)
    console.log(value2)
    this.setState({ approachCharts : value2 });})
    });

  render() {
    return (
        <div className='airportdiag-charts'>
        <div className='chart-header'><strong>AIRPORT DIAGRAMS AND TAKEOFF MINIMUMS</strong></div>
        <SearchBoxApproachesAirportDiagrams airportDiagInput = {this.state.airportDiagrams} approachChartInput = {this.state.approachCharts} pushUserAptIdentValue={this.pushUserAptIdentValue}/>
        </div>
    )
  }
}
