import React,{Component} from 'react'
import Counter from './Counter'
import '../css/counter.css'

export default class CounterGroup extends Component {
  constructor(props) {
    super(props)
    this.state={summary:0}
  }
  updateSum=(num)=>{
    this.setState(prevState=>({
      summary:prevState.summary+num
    }))
  }
  render(){
      let counters=[]
      for (let i = 0 ;i < this.props.size; i++) {
        counters.push(<Counter updateSum={this.updateSum}/>)
      }
    return(
      <div>
        {counters}
        <p>Now，The Summary is <span class="sum">{this.state.summary}</span></p>
      </div>

    )
  }
}
