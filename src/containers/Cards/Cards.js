import React, { Component } from 'react'

export default class Card extends Component {

  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <h3>Founded: {this.props.founded}</h3>
        <p>Seats: {this.props.seats}</p>
        <p>Titles: {this.props.titles}</p>
        <p>Coat of Arms: {this.props.coatOfArms}</p>
        <p>Ancestral Weapons: {this.props.ancestralWeapons}</p>
        <p>Words: {this.props.words}</p>
      </div>
    )
  }
}