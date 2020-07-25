import React, { Component } from "react";
import { Formik } from 'formik';

export default class SearchBar extends Component {

    submit = (values, actions) => {
        this.props.fetchMovies(values).then(() => actions.setSubmitting(false));
    }

    render() {
        return (
            <Formik
                onSubmit={this.submit}
                initialValues={{ query: '', language: 'fr-FR' }}
            >
                {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
                    <form className="d-flex p-2 m-2" onSubmit={handleSubmit}>
                        <input
                            className="flex-fill form-control mr-2"
                            name="query"
                            placeholder="Search..."
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <select
                            className="form-controm mr-2 w-25"
                            name="language"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value="fr-FR">Français</option>
                            <option value="en-US">English</option>
                        </select>
                        <button
                            className="btn btn-small btn-success"
                            type="submit"
                            disabled={isSubmitting}>Submit</button>
                    </form>
                )}
            </Formik>
        );
    }
}