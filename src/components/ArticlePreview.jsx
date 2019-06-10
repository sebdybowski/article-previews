import React from 'react';
import PropTypes from 'prop-types';

export const ArticlePreview = ({ article }) => <article className="card mb-3">
    <div className="row no-gutters">
        <div className="col-md-4">
            <img src={article.image} className="card-img" alt={`${article.title} image`} />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <div className="row">
                    <div className="col-8">
                        <h5 className="card-title">{article.title}</h5>
                    </div>
                    <div className="col-4">
                        <small className="text-muted float-right">{article.date}</small>
                    </div>
                </div>
                <p className="card-text">{article.preamble}</p>
            </div>
        </div>
    </div>
</article>;

ArticlePreview.propTypes = {
    article: PropTypes.shape({
        category: PropTypes.string,
        date: PropTypes.string,
        id: PropTypes.number,
        image: PropTypes.string,
        preamble: PropTypes.string,
        title: PropTypes.string,
    }),
};

ArticlePreview.defaultProps = {
    article: [],
};
