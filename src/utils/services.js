import axios from 'axios';
import _ from 'lodash';
import { ENDPOINT_TYPE } from './constants';

const { SPORTS, FASHION } = ENDPOINT_TYPE;

export const fetchArticle = type => axios.get(`http://localhost:6010/articles/${type}`)
    .then(response => _.get(response, 'data.articles'))
    .catch(error => {
        console.log(error);
        return error;
    });

export const fetchAllArticles = () => Promise.all([fetchArticle(SPORTS), fetchArticle(FASHION)])
    .then(response => _.flatten(response))
    .catch(error => console.log(error));