import React, { Component } from 'react';
import '../App.css';

class Beer extends Component {
  render(){
    return(
      <div>
        <h1>{this.props.beer.name}</h1>
        <p>{this.props.beer.location}</p>
        <p>{this.props.beer.type}</p>
        <p>{this.props.beer.abv}</p>
      </div>
    )
  }
}

export default Beer
