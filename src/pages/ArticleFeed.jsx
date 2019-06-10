import React, { Component } from 'react';
import map from 'lodash.map';
import get from 'lodash.get';
import { fetchAllArticles } from '../utils/services';
import { ArticlePreview } from '../components/ArticlePreview';
import { CategoryPanel } from "../components/CategoryPanel";

const INITIAL_STATE = {
  articles: [],
};

const Articles = ({ articles }) => map(articles, article =>
    <ArticlePreview article={article} key={article.id}/>);

export class ArticleFeed extends Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }
    componentDidMount() {
        fetchAllArticles().then(value => this.setState({ articles: value || []}));
    }
    render () {
        console.log(this.state);
        return <div className="container">
            <nav className="row">
                <div className="col">filter</div>
            </nav>
            <main className="row">
                <nav className="col-3" >
                    <CategoryPanel />
                </nav>
                <section className="col-9">
                    <Articles articles={get(this, 'state.articles')} />
                </section>
            </main>
        </div>;
    }
}