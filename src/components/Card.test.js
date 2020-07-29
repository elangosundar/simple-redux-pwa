import React from 'react';
import "../../src/setupTest";

import { shallow, configure, mount, render} from 'enzyme';
import Card from './Card';

it('expect to render Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
});
