require('./Header.css');

import * as React from 'react';

export const Header: React.SFC<any> = () => {
    return (
        <div className='Header'>
            <h1>Star Wars API Explorer</h1>
        </div>
    );
};
