/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, getByTitle, findByTitle} from '@testing-library/react';
import Body from './Body';

test('test img title', async () => {
  const { getByTitle } = render(<Body />);
  const linkElement = await getByTitle("svg image");
  expect(() => linkElement).toBeTruthy();
});
