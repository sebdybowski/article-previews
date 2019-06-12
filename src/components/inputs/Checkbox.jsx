import React from 'react';
import PropTypes from 'prop-types';

const InputCheckbox = ({ value, label, onValueChange }) => (value ?
    <input className="form-check-input" type="checkbox" id={label} onClick={() => onValueChange(label)} checked /> :
    <input className="form-check-input" type="checkbox" id={label} onClick={() => onValueChange(label)} />
);

export const Checkbox = ({ label, value, onValueChange }) => <div className="form-check">
    <InputCheckbox label={label} value={value} onValueChange={onValueChange} />
    <label className="form-check-label" htmlFor={label}>
        <span className="btn-link">{label}</span>
    </label>
</div>;

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.bool,
    onValueChange: PropTypes.func.isRequired,
};