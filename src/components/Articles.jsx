import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { ArticlePreview } from './ArticlePreview';

export const Articles = ({ articles }) => _.map(articles, article =>
    <ArticlePreview article={article} key={article.id}/>);

Articles.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
        category: PropTypes.string,
        date: PropTypes.string,
        dateSortable: PropTypes.number,
        id: PropTypes.number,
        image: PropTypes.string,
        preamble: PropTypes.string,
        title: PropTypes.string,
    })),
};