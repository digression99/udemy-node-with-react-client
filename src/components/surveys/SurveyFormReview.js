import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel, formValues }) => {
    return (
        <div>
            <h5>Please confirm your entries.</h5>
            <div>{formValues.title}</div>
            <div>{formValues.subject}</div>
            <div>{formValues.body}</div>
            <div>{formValues.emails}</div>

            <button
                className="yellow darken-3 btn-flat"
                onClick={onCancel}
            >
                back
            </button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        formValues : state.form.surveyForm.values
    }
};

export default connect(mapStateToProps, null)(SurveyFormReview);
