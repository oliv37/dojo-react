import React from 'react';
import Child from './Child';

export default () => {
    return (
        <div>
            <Child name="john" />
            <Child name="bill" />
        </div>
    );
};