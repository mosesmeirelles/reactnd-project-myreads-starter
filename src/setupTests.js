import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

/**
 * Configure Enzyme Adapter
 */
Enzyme.configure({ adapter: new Adapter() })

/**
 * Mocking LocalStorage due usage on BooksAPI
 */
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;