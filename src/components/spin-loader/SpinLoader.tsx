import * as React from 'react';

require('./SpinLoader.css');

export const SpinLoader: React.SFC<any> = () => {
    return (
        <div className='SpinLoader'>
            <div className='spinner'></div>
        </div>
    );
};