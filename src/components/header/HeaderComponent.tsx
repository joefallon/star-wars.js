require('./HeaderComponent.css');

import * as React from 'react';

export const HeaderComponent: React.SFC<any> = () => {
    return (
        <div className='HeaderComponent'>
            <h1>Star Wars API Explorer</h1>
        </div>
    );
};
