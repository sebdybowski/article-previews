import React from 'react';
import { shallow, render } from 'enzyme';
import { CategoryPanel } from '../../components/CategoryPanel';
import _ from 'lodash';
import { CATEGORY_TYPE } from '../../utils/constants';

const mockProps = {
    selectedValues: CATEGORY_TYPE,
    onValueChange: _.noop,
};

describe('CategoryPanel', () => {
    it('should render correctly with default props', () => {
        const component = shallow(<CategoryPanel {...mockProps} />);
        expect(component).toMatchSnapshot();
    });
    it('should render correctly first value selected', () => {
        const component = shallow(<CategoryPanel {...mockProps} selectedValues={[CATEGORY_TYPE[0]]} />);
        expect(component).toMatchSnapshot();
    });
    it('should render correctly second value selected', () => {
        const component = shallow(<CategoryPanel {...mockProps} selectedValues={[CATEGORY_TYPE[1]]} />);
        expect(component).toMatchSnapshot();
    });
    it('should render correctly no value selected', () => {
        const component = shallow(<CategoryPanel {...mockProps} selectedValues={null} />);
        expect(component).toMatchSnapshot();
    });
});