import React from 'react';
import { render } from '@testing-library/react';

import People from './People';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('With React Testing Library', () => {
    const initialState = {
        people: [],
        peopleCount: 0,
    };
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let store;

    test('Shows People', () => {
        store = mockStore(initialState);
        const view = render(
            <Provider store={store}>
                <People />
            </Provider>
        );

        // eslint-disable-next-line testing-library/prefer-screen-queries
        view.getByText('People');
    });
});