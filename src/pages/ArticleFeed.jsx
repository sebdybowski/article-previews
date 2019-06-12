import React, { Component } from 'react';
import _ from 'lodash';
import { fetchAllArticles } from '../utils/services';
import { CategoryPanel } from '../components/CategoryPanel';
import { FetchError } from '../components/FetchError';
import { resolveSortableDate, resolveArticlesList } from '../utils/articles';
import { INITIAL_STATE, SORT_ORDER } from '../utils/constants';
import { DateFilter } from '../components/inputs/DateFilter';
import { Articles } from '../components/Articles';

export class ArticleFeed extends Component {
    state = INITIAL_STATE;
    componentDidMount() {
        fetchAllArticles().then(value => this.setState({
            articles: (value && _.map(value, article =>
                ({ ...article, dateSortable: resolveSortableDate(article) }))) || [],
        }));
    }
    updateSelectedCategories = (value) => {
        const { selectedCategories } = this.state;
        if (_.includes(selectedCategories, value)) {
            this.setState({ selectedCategories: _.reject(selectedCategories, category => category === value) });
        } else {
            this.setState({ selectedCategories: [...selectedCategories, value]})
        }
    };
    updateSortOrder = () => (this.state.sortOrder === SORT_ORDER.DESCENDING ?
        this.setState({ sortOrder: SORT_ORDER.ASCENDING }) :
        this.setState({ sortOrder: SORT_ORDER.DESCENDING })
    );
    render () {
        const { selectedCategories, articles, sortOrder } = this.state;
        const error = _.find(articles, article => !_.get(article, 'id'));
        return <div className='container'>
            <nav className='row'>
                <div className='col'>
                    <DateFilter onValueChange={this.updateSortOrder} sortOrder={this.state.sortOrder} />
                </div>
            </nav>
            <main className='row'>
                <nav className='col-xs-12 col-sm-12 col-md-4 col-lg-3' >
                    <CategoryPanel onValueChange={this.updateSelectedCategories} selectedValues={selectedCategories}/>
                </nav>
                <section className='col-xs-12 col-sm-12 col-md-8 col-lg-9'>
                    { error && <FetchError errorData={error} /> }
                    { _.isEmpty(selectedCategories) ?
                        <h1>Sorry, no posts found</h1> :
                        <Articles articles={resolveArticlesList(articles, selectedCategories, sortOrder)} />
                    }
                </section>
            </main>
        </div>;
    }
}