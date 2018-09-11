import React, { Component } from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SurveyForm />
            </div>
        );
    }
}

export default SurveyNew;