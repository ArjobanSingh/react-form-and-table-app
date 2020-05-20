import React from 'react';
import PropTypes from 'prop-types';
import InputType from "./InputType"


const Form = props => {
    return (
        <form className="formContainer">
            <div className="leftInputBox">
                <InputType type="text" label="Text field" placeholderData="Hello" uId="hello-text"/>
                <InputType type="tel" label="Phone  field" placeholderData="" uId="mobile-no"/>
                <InputType type="text" label="Name" placeholderData="Name" uId="name"/>
            </div>
            <div className="rightInputBox">
                <InputType type="email" label="Email field" placeholderData="email" uId="email"/>
                {/* <InputType type="radio" label="Rate Our Services"/> */}
            </div>
        </form>
    );
};

Form.propTypes = {
    
};

export default Form;