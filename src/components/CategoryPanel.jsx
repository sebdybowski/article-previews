import React from 'react';
import PropTypes from 'prop-types';

export const CategoryPanel = () => <ul className="nav flex-column">
    <h5 className="mb-3">Data sources</h5>
    <li className="nav-item mb-2">
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="sports" />
            <label className="form-check-label" htmlFor="sports">
                <span className="btn-link">Sports</span>
            </label>
        </div>
    </li>
    <li className="nav-item mb-2">
        <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="fashion" />
            <label className="form-check-label" htmlFor="fashion">
                <span className="btn-link">Fashion</span>
            </label>
        </div>
    </li>
</ul>;