import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions/index';

let SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {

    const renderFormData = () => {
        if (!formValues) return;
        return (
            <div>
                {formFields.map( ({ name, label }) =>
                    <div key={name}>
                        <label>{label}</label>
                        <div>{formValues[name]}</div>
                    </div>
                )}
            </div>
        )
    };

    return (
        <div>
            <h5>Please confirm your entries.</h5>
            {renderFormData()}
            <button
                className="yellow darken-3 btn-flat"
                onClick={onCancel}
            >
                back
            </button>
            <button
                className="green white-text btn-flat right"
                onClick={() => submitSurvey(formValues, history)}
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        formValues : state.form.surveyForm.values
    }
};

// SurveyFormReview = connect(mapStateToProps, actions);

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
