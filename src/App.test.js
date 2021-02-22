// import { render, screen } from '@testing-library/react';
import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('renders learn react link', () => {
  const wrapper = shallow(<App />); 

  // docs at jest expect 
  // expect(wrapper).toBeTruthy();
  

  

  // .debug will return the code as a string 
  // console.log(wrapper.debug());
});
