import React, { Component } from 'react'
import ApproachesAirportDiagrams from './AirportDiagramsTakeoffMinimums/ApproachesAirportDiagrams'
import ApproachProcedures from './ApproachProcedures/ApproachProcedures'


export default class APICharts extends Component {
  render() {
    return (
        <div className='api-charts-dps'>
            <ApproachesAirportDiagrams/>
            <ApproachProcedures/>
        </div>
    )
  }
}
