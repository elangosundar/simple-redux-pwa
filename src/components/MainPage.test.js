import React from 'react';
import "../setupTest";

import { shallow, configure, mount, render} from 'enzyme';
import MainPage from '../components/MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        // onSearchChange: jest.fn(),
        robots: [],
        isPending: false,
        searchField: ''
    }

    wrapper = shallow(<MainPage { ...mockProps } />);
});

it('Render MainPage without render', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly ', () => {
    // expect(wrapper).toMatchSnapshot();
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id:3,
            name: 'john',
            email: 'john@gmail.com'
        }],
        isPending: false,
        searchField: ''
    }
    const wrapper2 = shallow(<MainPage { ...mockProps2 } />);
    expect(wrapper2.instance().filteredRobots()).toEqual([{
        id:3,
        name: 'john',
        email: 'john@gmail.com'
    }]);
});

it('filters robots correctly 2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id:3,
            name: 'john',
            email: 'john@gmail.com'
        }],
        isPending: false,
        searchField: 'a'
    }

    const filtRobots = [];
    const wrapper3 = shallow(<MainPage { ...mockProps3 } />);
    expect(wrapper3.instance().filteredRobots()).toEqual(filtRobots);
});

