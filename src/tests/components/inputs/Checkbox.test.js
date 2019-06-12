import React from 'react';
import { shallow, render } from 'enzyme';
import { Checkbox } from "../../../components/inputs/Checkbox";
import _ from 'lodash';

const mockProps = {
    label: '',
    onValueChange: _.noop,
};

describe('Checkbox', () => {
    it('should render correctly', () => {
        const component = shallow(<Checkbox {...mockProps} />);
        expect(component).toMatchSnapshot();
    });
    it('should render correctly with true value', () => {
        const component = shallow(<Checkbox {...mockProps} value={true}/>);
        expect(component).toMatchSnapshot();
    });
    it('should render correctly with false value', () => {
        const component = shallow(<Checkbox {...mockProps} value={false}/>);
        expect(component).toMatchSnapshot();
    });
});