import {cards} from './cards'
import * as actions from '../actions/index'

describe('cards', () => {

  it('should return the initial state', () => {
    const expected = []

    const result = cards(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return the state with fetched cards', () => {
    const mockCards = [
      {},
      {},
      {}
    ]

    const mockAction = actions.storeCards(mockCards)

    const result = cards([], mockAction)

    expect(result).toEqual(mockCards)
  })
})