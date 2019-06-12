import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { CATEGORY_TYPE } from "../utils/constants";
import { Checkbox } from "./inputs/Checkbox";

export const CategoryPanel = ({ selectedValues, onValueChange }) => <ul className="nav flex-column">
    <h5 className="mb-3">Data sources</h5>
    {
        _.map(CATEGORY_TYPE, category =>
            <li className="nav-item mb-2" key={category}>
                <Checkbox label={category} onValueChange={onValueChange} value={_.includes(selectedValues, category)}/>
            </li>
        )
    }
</ul>;

CategoryPanel.propTypes = {
    selectedValues: PropTypes.array,
    onValueChange: PropTypes.func,
};