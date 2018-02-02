import React from 'react'
import { shallow } from 'enzyme'
import BooksApp from './BooksApp'

/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.
**/

it('shallow renders without crashing', () => {
  expect(shallow(<BooksApp />))
})


