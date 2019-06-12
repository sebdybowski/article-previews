import React from 'react';
import { shallow } from 'enzyme';
import { Articles } from '../../components/Articles';

const mockProps = {
    articles: [
        {
            category: 'fashion',
            date: '7. februar 2019',
            dateSortable: 20190207,
            id: 986521,
            image: 'https://placeimg.com/280/200/any',
            preamble: 'Det finnes mange skrevne og uskrevne regler som beskriver hva en smoking egentlig er. Vi har tatt en titt på hvilke du bør følge, og hvilke du kan bryte.',
            title: 'Bør du følge smokingreglene?',
        },
        {
            category: 'fashion',
            date: '5. februar 2019',
            dateSortable: 20190205,
            id: 157489,
            image: 'https://placeimg.com/300/180/arch',
            preamble: 'Kong Harald (81) får moteskryt for spenstig skovalg.',
            title: 'Kongen stilte i Moon Boots: – Helt konge!',
        },
    ]
};

describe('Articles', () => {
    it('should render correctly with default props', () => {
        const component = shallow(<Articles {...mockProps} />);
        expect(component).toMatchSnapshot();
    });
});