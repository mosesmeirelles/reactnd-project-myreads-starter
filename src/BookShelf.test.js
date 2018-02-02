import React from 'react'
import { shallow, mount } from 'enzyme'
import { Router, Route } from 'react-router'
import { createMemoryHistory } from 'history'
import BookShelf from './BookShelf'

describe('<BookShelf />', () => {
  it('shallow renders correctly', () => {
    // Passing empty objects represents dummies test doubles
    expect(shallow(<BookShelf books={[]} onUpdateBookShelf={() => {}}/>))
  })
})