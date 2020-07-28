import React from 'react'
import Origin from './Origin'

export default class AllOrigins extends React.Component {


  render() {
    const {sources} = this.props
    return (
      <div className="sources">
        {sources.map((source, n) => <Origin key={'source-'+n} className="source" source={source} />)}
      </div>
    )
  }
}