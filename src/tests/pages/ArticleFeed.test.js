import React from 'react';
import { shallow } from 'enzyme';
import { ArticleFeed } from "../../pages/ArticleFeed";

describe('ArticleFeed', () => {
    it('should render correctly', () => {
        const component = shallow(<ArticleFeed />);
        expect(component).toMatchSnapshot();
    });
});