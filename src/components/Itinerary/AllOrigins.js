import React from 'react'
import Origin from './Origin'

export default class AllOrigins extends React.Component {


  render() {
    const {origins} = this.props
    return (
      <div className="origins">
        {origins.map((origin, n) => <Origin key={'origin-'+n} className="origin" origin={origin} />)}
      </div>
    )
  }
}