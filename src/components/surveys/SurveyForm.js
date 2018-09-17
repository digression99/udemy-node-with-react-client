import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, reset } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
    constructor(props) {
        super(props);
    }

    renderFields() {
        return (
            <div>
                {formFields.map(({ label, name}) =>
                    <Field
                        key={name}
                        type="text"
                        component={SurveyField}
                        name={name}
                        label={label}
                    />)}
            </div>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link
                        to="/surveys"
                    >
                        <button
                            className="red btn-flat left white-text"
                        >
                            Cancel
                        </button>
                    </Link>
                    <button
                        type="submit"
                        className="teal btn-flat right white-text"
                    >
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

const validate = values => {
    const errors = {};

    formFields.map(({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide ${name}`
        }
    });

    errors.recipients = validateEmails(values.recipients || '');
    return errors
};

const mapDispatchToProps = dispatch => ({

});

SurveyForm = connect(null, mapDispatchToProps)(SurveyForm);

export default reduxForm({
    form : 'surveyForm',
    validate,
    destroyOnUnmount : false
})(SurveyForm);