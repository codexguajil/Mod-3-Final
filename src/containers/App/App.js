import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import {storeCards} from '../../actions';
import {fetchAllCards} from '../../helpers/apiCalls';
import {houseCleaner} from '../../helpers/dataCleaner';
import CardsContainer from '../CardsContainer/CardsContainer';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    }
  }

  componentDidMount = async () => {
    this.setState({isLoading: true})
    await this.fetchCards()
    this.setState({isLoading: false})
  }

  fetchCards = async () => {
    const cards = await fetchAllCards()
    const cleanCards = houseCleaner(cards)
    console.log(cleanCards)
    this.props.storeCards(cleanCards)
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className='App'>
        <div className='App-header'>
        {isLoading &&
          <div id="loading-gif"></div>
        }
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
