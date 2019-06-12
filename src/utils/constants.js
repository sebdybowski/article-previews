export const ENDPOINT_TYPE = {
    SPORTS: 'sports',
    FASHION: 'fashion',
};

export const CATEGORY_TYPE = ['sport', 'fashion'];

export const SORT_ORDER = {
    ASCENDING: 'asc',
    DESCENDING: 'desc',
};

export const INITIAL_STATE = {
    articles: [],
    selectedCategories: CATEGORY_TYPE,
    sortOrder: SORT_ORDER.DESCENDING,
};

export const MONTH_MAP = {
    januar: '01',
    februar: '02',
    mars: '03',
    april: '04',
    mai: '05',
    juni: '06',
    juli: '07',
    august: '08',
    september: '09',
    oktober: '10',
    november: '11',
    desember: '12',
};