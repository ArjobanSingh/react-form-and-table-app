import React from 'react';
import PropTypes from 'prop-types';
import InputType from "./InputType"


const Form = props => {
    const submitForm = (e) => {
        e.preventDefault()
        alert("hello")
    }
    return (
        <form className="formContainer">
            <div className="leftInputBox">
                <InputType type="text" label="Text field" placeholderData="Hello" uId="hello-text"/>
                <InputType type="tel" label="Phone  field" placeholderData="" uId="mobile-no"/>
                <InputType type="text" label="Name" placeholderData="Name" uId="name"/>
            </div>
            <div className="rightInputBox">
                <InputType type="email" label="Email field" placeholderData="email" uId="email"/>
                <InputType 
                    type="radio" 
                    label="Please rate the quality of the service you received from your host."
                    uId="quality_radio" />
                <InputType 
                    type="radio" 
                    label="Please rate the quality of your beverage."
                    uId="beverage_radio" />
                <InputType 
                    type="radio" 
                    label="Was our restaurant clean?"
                    uId="clean_radio" />
                <InputType 
                    type="radio" 
                    label="Please rate your overall dining experience."
                    uId="overall_radio" />  
                <input className="submit-btn" type="submit" value="Submit" onClick={submitForm}/>                                          
            </div>
        </form>
    );
};

Form.propTypes = {
    
};

export default Form;