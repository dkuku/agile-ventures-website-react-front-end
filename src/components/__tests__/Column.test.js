import React from 'react';
import { shallow } from 'enzyme';
import Column from '../../App.js';

describe('Column', () => {
  it('renders without crashing', () => {
    shallow(<Column />);
  });
});