import React from 'react'
import { shallow } from 'enzyme'
import Book from './Book'

describe('<Book />', () => {
  it('shallow renders correctly', () => {
    expect(shallow(<Book book={({})} onUpdateBookShelf={() => {}}/>))
  })
})