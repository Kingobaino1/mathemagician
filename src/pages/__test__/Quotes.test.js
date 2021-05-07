import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Quote from '../Quote';

describe('Quote', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Quote />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
