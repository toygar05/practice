import React from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';

const FIELDS = [
    { label: "Survey Title", name: 'title' },
    { label: "Survey Line", name: 'subject' },
    { label: "Email Body", name: 'body' },
    { label: "Recipient List", name: 'emails'},
];

class SurveyForm extends React.Component {

    renderFields() {
        return FIELDS.map(({ label, name }) => {
            return (
                <Field
                    key={name}
                    label={label}
                    name={name}
                    component={SurveyField}
                    type="text"
                />
            )
        })
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.props.handleSubmit(values => console.log(values))}
                >
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                    <button
                        className="teal btn-flat right white-text"
                        type="submit"
                    >
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm',
})(SurveyForm);