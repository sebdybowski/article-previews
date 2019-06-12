import React from 'react';
import PropTypes from 'prop-types';

export const Checkbox = ({ label, value, onValueChange }) => <div className="form-check">
    <input className="form-check-input" type="checkbox" id={label} onChange={() => onValueChange(label)} checked={value} />
    <label className="form-check-label" htmlFor={label}>
        <span className="btn-link">{label}</span>
    </label>
</div>;

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.bool,
    onValueChange: PropTypes.func.isRequired,
};