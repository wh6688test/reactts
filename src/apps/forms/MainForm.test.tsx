/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen , fireEvent, waitFor} from '@testing-library/react';
import MainForm from './MainForm';
import userEvent from '@testing-library/user-event';
import { ServiceResponseType, ServiceDataType, FormStateType} from '../../types/myFormTypes';
import {getAllGroups} from '../services/GroupService';

jest.mock('../services/GroupService');
/*
beforeAll(() => {
  server.listen();
});*/
beforeEach(() => {
 jest.clearAllMocks();
});
/*
afterAll(() =>{
  server.close();
});*/

//mocking service data and snapshot//
test('form input data snapshot', async () => {
 
  //const mockGetAllGroups = getAllGroups as jest.MockedFunction<typeof getAllGroups>;

  let mockedGroups = {
    "group_attribute": {
        "attr1": "muB3",
        "attr2": "muB2"
    },
    "group_id": "6723cb7c-1fae-43e5-ba38-504c37302ade",
  };

  const serviceMock = await jest.fn().mockResolvedValueOnce(mockedGroups);
  await serviceMock;

  //expect(serviceMock).toBeCalledWith('/groups');

  const {asFragment} = render(<MainForm/>);
  userEvent.click(screen.getByText('Submit'));

  await (() => screen.getByRole('datarows'));
 
  expect(() => asFragment()).toMatchSnapshot()
});

test('form reject error snapshot', async () => {
  const getError = new Error('Item already exists');

  const errorMock = jest.fn().mockRejectedValue(getError);
  await errorMock;
  //expect(errorMock).toBeCalledWith('/groups');
 
  const {asFragment} = render(<MainForm/>);
  userEvent.click(screen.getByText('Submit'));

  await (() => screen.getByText('Something Went Wrong'));
 
  expect(() => asFragment()).toMatchSnapshot()
});