import _ from 'lodash';

export const resolveErrorCategory = errorData => _.chain(errorData)
    .get('response.config.url')
    .split('/')
    .last()
    .value();