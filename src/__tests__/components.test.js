import { render } from '@testing-library/react';
import Home from '../components/home';
import Calculator from '../components/calculator';
import Quote from '../components/quote';

describe('test suite for components', () => {
  it('renders correctly home component', () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly calculator component', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly quote component', () => {
    const tree = render(<Quote />);
    expect(tree).toMatchSnapshot();
  });
});
