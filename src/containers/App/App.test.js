import React from 'react'
import { shallow } from 'enzyme'
import {App, mapDispatchToProps, mapStateToProps} from './App'
import {storeCards} from '../../actions'

describe('App', () => {
  let wrapper;
  
  it('matches the snapshot', () => {
    wrapper = shallow(
      <App />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should set is loading to false after fetching the cards', async() => {

    await wrapper.componentDidMount()
    expect(wrapper.state('isLoading')).toEqual(false)
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

  it('calls dispatch with with the storeCards action when fetchCards is called', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = storeCards([{}, {}, {}])

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.storeCards([{}, {}, {}])

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})