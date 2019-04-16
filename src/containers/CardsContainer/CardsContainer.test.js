import React from 'react'
import { shallow } from 'enzyme'
import {CardsContainer, mapStateToProps} from './CardsContainer'

describe('CardsContainer', () => {
  let wrapper;

  it('should match the snapshot', () => {
    const props = {
      cards: [
        {},
        {},
        {}
      ]
    }

    wrapper = shallow(
      <CardsContainer {...props}/>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should return an object with the cards store array', () => {
    const mockState = {
      cards: [
        {},
        {},
        {}
      ],
      id: 3
    }

    const expected = {cards: [
        {},
        {},
        {}
    ]}

    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})