import * as actions from './index'

describe('actions', () => {
  it('should have a type of ADD_ALL', () => {
    const mockCards = [
      {},
      {},
      {}
    ]

    const expected = {
      type: 'ADD_ALL',
      cards: mockCards
    }

    const result = actions.storeCards(mockCards)

    expect(result).toEqual(expected)
  })
})
