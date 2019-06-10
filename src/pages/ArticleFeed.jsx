import React, { Component } from 'react';
import { fetchAllArticles } from '../utils/services';

const INITIAL_STATE = {
  articles: [],
};

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
        return <div>Hello World</div>;
    }
}