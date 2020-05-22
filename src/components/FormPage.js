import React from 'react';
import Form from "./Form"

const FormPage = props => {
    return (
        <div className="FormPageContainer">
            <div className="title-and-desc">
                <p className="bar-title">Aromatic Bar</p>
                <p className="form-desc">
                We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you.
                </p>
            </div>
            <Form />
        </div>
    );
};


export default FormPage;