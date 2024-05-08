import React, { Component, PureComponent } from 'react'

export default class PureCounterComponent extends PureComponent {
    constructor(){
        super();
        this.state = {
            count: 0,
            toggle: true
        }
    }
    
    render() {
    console.warn("This is a pure component")
    return (
        <>
   
      <h2>PURE COUNTER COMPONENT</h2>
      <h2>Count {this.state.count}</h2>
      <br />
      <button onClick={()=>{
        this.setState({
            toggle: !this.state.toggle
        })
      }}
      style={{
        backgroundColor: `${this.state.toggle ? "violet" : "orange"}`
      }}
      >TOGGLE</button>

      <button onClick={()=>{
        if (this.state.toggle){
            this.setState({
                count: this.state.count + 1
            })
        }
      }}
      >COUNTER</button>
      <hr />
        </>

    )
  }
}