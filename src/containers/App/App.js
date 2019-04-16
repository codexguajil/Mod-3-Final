import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {storeCards} from '../../actions';
import {fetchAllCards} from '../../helpers/apiCalls';
import CardsContainer from '../CardsContainer/CardsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    }
  }


  componentDidMount = async () => {
    const cards = await fetchAllCards()
    console.log(cards)
    this.props.storeCards(cards)
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westerosss</h2>
        </div>
        <CardsContainer />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  cards: state.cards
})

export const mapDispatchToProps = (dispatch) => ({
  storeCards: (cards) => dispatch(storeCards(cards))
})

export default connect(null, mapDispatchToProps)(App);
