import { Component } from 'react'

class ContentNotFound extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', minHeight: '550px', paddingTop: '12em' } } >
        <h1 style={{ display: 'inline-block', borderRight: '1px solid rgba(0, 0, 0,.3)', margin: 0, marginRight: 20, padding: '10px 23px 10px 0', fontSize: 24, fontWeight: 500, verticalAlign: 'top' }}>404</h1>
        <div style={{ display: 'inline-block', textAlign: 'left', lineHeight: '49px', height: '49ps', verticalAlign: 'middle' }}>
          <h2 style={{ fontSize: 14, fontWeight: 'normal', lineHeight: 'inherit', margin: 0, padding: 0 }}>This page could not be found.</h2>
        </div>
      </div>
    )
  }
}

export default ContentNotFound;
