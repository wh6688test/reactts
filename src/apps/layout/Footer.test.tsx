/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

//adding a snapshot testing
test('render footer component', async () => {

  const {asFragment} = render(<Footer/>)
    
   expect(() => asFragment()).toMatchSnapshot()
});
