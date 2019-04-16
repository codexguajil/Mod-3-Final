import { connect } from 'react-redux';
import React, { Component } from 'react';
import Card from '../Cards/Cards';

export class CardsContainer extends Component {

  render() {
    const {cards} = this.props
    return (
      <div className="cards-container">
        {
          cards.map(card => {
            return <Card {...card}/>
          })
        }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
 cards: state.cards
})

export default connect(mapStateToProps)(CardsContainer)