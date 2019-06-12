import React from 'react';
import { shallow } from 'enzyme';
import { FetchError } from '../../components/FetchError';

const mockProps500 = {
    errorData: {
        response: {
            status: 500,
        },
        config: {
            url: 'http://localhost:6010/articles/sports'
        },
    },
};

const mockProps404 = {
    errorData: {
        response: {
            status: 404,
        },
        config: {
            url: 'http://localhost:6010/articles/sports'
        },
    },
};

describe('FetchError', () => {
    it('should render correctly with 500 error', () => {
        const component = shallow(<FetchError {...mockProps500} />);
        expect(component).toMatchSnapshot();
    });
    it('should render correctly with 404 error', () => {
        const component = shallow(<FetchError {...mockProps404} />);
        expect(component).toMatchSnapshot();
    });
});