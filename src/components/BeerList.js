import React, { Component } from 'react';
import '../App.css';
import Beer from './Beer'

class BeerList extends Component {

  constructor(props){
    super(props)
    this.state = {
      beers: []
    }
  }

  componentDidMount(){
    const url = 'https://p4b05x6f37.execute-api.us-east-1.amazonaws.com/prod/ontap'
    fetch(url).then(r => r.json())
    .then((json) => {
      this.setState({beers: json})
    })
  }

  render() {
    let beers = this.state.beers.map(beer => {
      return (
        <Beer beer={beer} />
      )
    })

    return(
      <div>
        {beers}
      </div>
    )
  }
}

export default BeerList;
