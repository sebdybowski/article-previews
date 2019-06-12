import React from 'react';
import { shallow } from 'enzyme';
import { ArticlePreview } from '../../components/ArticlePreview';

const mockProps = {
    article: {
        id: 122866,
        date: '15. januar 2019',
        image: 'https://placeimg.com/280/180/any',
        category: 'sport', title: 'Her får lillebror gode råd av Petter Northug',
        preamble: 'Før NM-sprinten i fristil i Grova i Meråker, fikk Even Northug gode råd av storebror Petter.',
    },
};

describe('ArticlePreview', () => {
    it('should render correctly', () => {
        const component = shallow(<ArticlePreview {...mockProps} />);
        expect(component).toMatchSnapshot();
    });
});