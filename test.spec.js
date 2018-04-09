import React from 'react';
import Hello from 'Hello';
import Child from 'Child';

describe('test jest', () => {
    
    const fn = jest.fn(() => 4);

    it('jest.fn', () => {
        expect(fn()).toBe(4);
    });

    it('wrap Hello', () => {
        const wrapper = shallow(<Hello />);
        expect(wrapper).toBeDefined();
        expect(wrapper.contains(<Child name="john"/>)).toBeTruthy();
        expect(wrapper.find(Child)).toHaveLength(2);
        expect(wrapper).toContainReact(<Child name="john"/>);
    });

    it('mount Hello', () => {
        const wrapper = render(<Hello />);
        //expect(wrapper.contains(<Child name="john"/>)).toBeTruthy();
        //expect(wrapper.find(Child)).toHaveLength(2);
        expect(wrapper.find('p')).toHaveLength(2);
    });

});