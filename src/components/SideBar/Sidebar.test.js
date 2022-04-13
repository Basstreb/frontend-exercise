import React from 'react';
import { render } from '@testing-library/react';

import Sidebar from './Sidebar';

test('Shows Planets', () => {
    const mockHandler = jest.fn();
    const view = render(<Sidebar setFilterWord={mockHandler} />);

    view.debug();
});