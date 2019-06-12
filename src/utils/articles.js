import _ from 'lodash';
import {MONTH_MAP, SORT_ORDER} from "./constants";

export const resolveSortableDate = article => _.chain(article)
    .get('date')
    .split(' ')
    .map((value, index) => {
        if (index === 0 && value.length <= 2 ) return `0${value}`;
        if (index === 1) return _.get(MONTH_MAP, value);
        return value;
    })
    .reverse()
    .join('')
    .replace('.', '')
    .toNumber()
    .value();

export const resolveArticlesList = (articles, selectedCategories, sortOrder) => _.chain(articles)
    .filter(article => _.includes(selectedCategories, _.get(article, 'category')))
    .orderBy(['dateSortable'], [sortOrder])
    .value();
