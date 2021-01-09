import React from 'react';
import { render } from '@testing-library/react';
import {App} from './App';
//jest.mock ("./apps/layout/Body");
//jest.mock ("./apps/forms/MainForm");

test('renders learn react link', () => {

  const {asFragment} = render(<App/>)
    
   expect(() => asFragment()).toMatchSnapshot()
});
