import Card from './Cards'
import React from 'react'
import { shallow } from 'enzyme'

describe('Card', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(
      <Card />
    )

    expect(wrapper).toMatchSnapshot()
  })
})