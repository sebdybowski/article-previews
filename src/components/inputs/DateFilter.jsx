import React from 'react';
import PropTypes from 'prop-types';

export const DateFilter = ({ onValueChange, sortOrder }) =>
    <button type="button" className="btn btn-link float-right" onClick={() => onValueChange()}>
        <span className={`sort-order ${sortOrder}`}>Sort by date</span>
    </button>;

DateFilter.propTypes = {
    onValueChange: PropTypes.func.isRequired,
    sortOrder: PropTypes.string,
};