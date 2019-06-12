import React from 'react';
import PropTypes from 'prop-types';
import { resolveErrorCategory } from '../utils/errors';

export const FetchError = ({ errorData }) =>
    <div className="alert alert-danger" role="alert">
        <p>
            { 'We are sorry, but requests from category ' }
            <span className="font-weight-bold">{resolveErrorCategory(errorData)}</span>
            { ' were not loaded due to ' }
            <span className="font-weight-bold">{errorData.response.status}</span>
            { ' error. This bug is temporary, please: ' }
        </p>
        <button onClick={() => window.location.reload()} type="button" className="btn btn-primary btn-block">Reload the page</button>
    </div>;

FetchError.propTypes = {
    errorData: PropTypes.object,
};