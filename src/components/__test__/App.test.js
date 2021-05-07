import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from '../App';

describe('Home Page', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
