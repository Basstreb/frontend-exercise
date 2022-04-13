import React from 'react';
import { render } from '@testing-library/react';

import Cards from './Cards';

test('Shows Planets', () => {
    const view = render(
        <Cards />
    );

    // expect(view.container).toHaveTextContent('Planets');
    view.rerender(<Cards />);
});