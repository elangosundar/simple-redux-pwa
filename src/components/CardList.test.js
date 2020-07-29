import React from 'react';
import "../../src/setupTest";

import { shallow, configure, mount, render} from 'enzyme';
import CardList from './CardList';

it('expect to render CardList component', () => {
    const mockRoborts =[
        {
            id:1,
            name: 'krish',
            username: 'krishva',
            email: 'krish@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRoborts} />)).toMatchSnapshot();
});
