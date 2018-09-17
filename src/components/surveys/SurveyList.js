import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {

    async componentDidMount() {
        await this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <li className="card darken-1 blue-grey" key={survey._id}>
                    <div className="card-content white-text">
                        <span className="card-title">{survey.title}</span>
                        <p>{survey.body}</p>
                        <p className="right">
                            Sent On : {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                        <a href="#">Yes : {survey.yes}</a>
                        <a href="#">No : {survey.no}</a>
                    </div>
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderSurveys()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ surveys}) => {
    return { surveys }
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);