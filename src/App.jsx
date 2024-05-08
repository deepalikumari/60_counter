import { PureComponent, useState } from 'react'
import './App.css'
import SimpleCounterComponent from './components/SimpleCounterComponent'
import PureCounterComponent from './components/PureCounterComponent'

function App() {

  return (
    <>
      <PureCounterComponent />
      <SimpleCounterComponent/>
     
    </>
  )
}

export default App