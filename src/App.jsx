import './App.css'
import ConditionalRendering from './ConditionalRendering'
import { Component } from 'react'

class App extends Component {
  render() {
    return (
      <>
        <ConditionalRendering number={2} />
      </>
    )
  }
}

export default App