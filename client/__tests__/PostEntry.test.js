import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PostEntry from '../src/components/PostEntry';

configure({ adapter: new Adapter() });

describe('Test for React components', () => {
  it('expect App component to render', () => {
    expect(shallow(<PostEntry />).length).toEqual(1);
  });
});