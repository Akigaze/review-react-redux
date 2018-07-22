import React,{Component} from 'react'
import '../css/counter.css'

export default class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state={count:0}
  }
  add=()=>{
    this.setState(prevState=>({
        count:prevState.count+1
    }))
    this.props.updateSum(1)
  }
  reduce=()=>{
    this.setState(prevState => ({
      count: prevState.count-1
    }))
    this.props.updateSum(-1)
  }
  render() {
    return(
      <div class="counter">
        <button className="btn" onClick={this.add}>+</button>
        <button className="btn" onClick={this.reduce}>-</button>
        <p>
          count:
          <span class="count">{this.state.count}</span>
        </p>
      </div>
    )
  }

}
