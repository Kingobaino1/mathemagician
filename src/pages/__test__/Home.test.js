import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../Home';

describe('Home Page', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
