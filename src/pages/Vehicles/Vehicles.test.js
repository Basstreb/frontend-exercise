import React from 'react';
import { render } from '@testing-library/react';

import Vehicles from './Vehicles';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('With React Testing Library', () => {
    const initialState = {
        vehicles: [],
        vehiclesCount: 0,
    };
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let store;

    test('Shows Vehicles', () => {
        store = mockStore(initialState);
        const view = render(
            <Provider store={store}>
                <Vehicles />
            </Provider>
        );

        // eslint-disable-next-line testing-library/prefer-screen-queries
        view.getByText('Vehicles');
    });
});