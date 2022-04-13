import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import SearchBar from './SearchBar';

test('Shows Planets', () => {
    const mockHandler = jest.fn();
    const view = render(<SearchBar setFilterWord={mockHandler} />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const button = view.getByText('Search');
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalled();
});