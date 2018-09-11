import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';

const FIELDS = [
    { label : "Subject Title", name : "title"},
    { label : "Subject Line", name : "subject" },
    { label : "Email Body", name : "body" },
    { label : "Recipient List", name : "emails" }
];

class SurveyForm extends Component {
    constructor(props) {
        super(props);
    }

    renderFields() {
        return (
            <div>
                {FIELDS.map(({ label, name}) =>
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
                <form onSubmit={this.props.handleSubmit(values => {
                    console.log('form submitted!');
                    console.log(values)
                })}>
                    {this.renderFields()}
                    <Link
                        to="/surveys"
                        className="red btn-flat left white-text"
                    >
                        Cancel
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

    FIELDS.map(({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide ${name}`
        }
    });

    return errors
};

export default reduxForm({ form : 'surveyForm', validate })(SurveyForm);