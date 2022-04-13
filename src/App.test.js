import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('With React Testing Library', () => {
  const initialState = {
    planets: [],
    planetsCount: 0,
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;

  test('Shows Planets', () => {
    store = mockStore(initialState);
    const view = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(view.container).toHaveTextContent('Planets');
  });
});