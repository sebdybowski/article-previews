import React, { Component } from 'react';
import map from 'lodash.map';
import get from 'lodash.get';
import filter from 'lodash.filter';
import reject from 'lodash.reject';
import includes from 'lodash.includes';
import values from 'lodash.values';
import { fetchAllArticles } from '../utils/services';
import { ArticlePreview } from '../components/ArticlePreview';
import { CategoryPanel } from "../components/CategoryPanel";
import { CATEGORY_TYPE } from "../utils/constants";

const INITIAL_STATE = {
    articles: [],
    selectedCategories: values(CATEGORY_TYPE),
};

const Articles = ({ articles }) => map(articles, article =>
    <ArticlePreview article={article} key={article.id}/>);

export class ArticleFeed extends Component {
    state = INITIAL_STATE;
    componentDidMount() {
        fetchAllArticles().then(value => this.setState({ articles: value || []}));
    }
    updateSelectedCategories = (value) => {
        const { selectedCategories } = this.state;
        if (includes(selectedCategories, value)) {
            this.setState({ selectedCategories: reject(selectedCategories, category => category === value) });
        } else {
            this.setState({ selectedCategories: [...selectedCategories, value]})
        }
    };
    render () {
        const { selectedCategories, articles } = this.state;
        console.log(selectedCategories, articles);
        return <div className="container">
            <nav className="row">
                <div className="col">filter</div>
            </nav>
            <main className="row">
                <nav className="col-3" >
                    <CategoryPanel onValueChange={this.updateSelectedCategories} selectedValues={selectedCategories}/>
                </nav>
                <section className="col-9">
                    <Articles articles={filter(articles, article => includes(selectedCategories, get(article, 'category')))} />
                </section>
            </main>
        </div>;
    }
}