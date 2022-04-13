import React from 'react';
import { render } from '@testing-library/react';

import Starships from './Starships';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('With React Testing Library', () => {
    const initialState = {
        starships: [],
        starshipsCount: 0,
    };
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let store;

    test('Shows Starships', () => {
        store = mockStore(initialState);
        const view = render(
            <Provider store={store}>
                <Starships />
            </Provider>
        );

        // eslint-disable-next-line testing-library/prefer-screen-queries
        view.getByText('Starships');
    });
});