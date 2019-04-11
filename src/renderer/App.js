import React from 'react'
import { connect } from 'react-redux'

const App = ({ counter }) => (
  <div style={{ fontSize: '38em', display: 'grid', placeItems: 'center' }}>
    {counter}
  </div>
)

const mapStateToProps = state => {
  console.log('mapStateToProps', state)
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps)(App)
