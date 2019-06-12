import React from 'react';
import { shallow } from 'enzyme';
import { DateFilter } from '../../../components/inputs/DateFilter';
import { SORT_ORDER } from '../../../utils/constants';
import _ from 'lodash';

const mockProps = {
    onValueChange: _.noop,
};

describe('DateFilter', () => {
    it('should render correctly with sortOrder asc', () => {
        const component = shallow(<DateFilter {...mockProps} sortOrder={SORT_ORDER.ASCENDING} />);
        expect(component).toMatchSnapshot();
    });
    it('should render correctly with sortOrder esc', () => {
        const component = shallow(<DateFilter {...mockProps} sortOrder={SORT_ORDER.DESCENDING} />);
        expect(component).toMatchSnapshot();
    });
});