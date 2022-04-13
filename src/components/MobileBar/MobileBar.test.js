import React from 'react';
import { render } from '@testing-library/react';

import MobileBar from './MobileBar';

test('Shows Planets', () => {
    const mockHandler = jest.fn();
    const view = render(<MobileBar setFilterWord={mockHandler} />);

    view.debug();
});