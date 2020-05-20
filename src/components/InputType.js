import React from 'react';
import PropTypes from 'prop-types';

const InputType = props => {
    if (props.type === "tel") {
        return (
            <div className="inputs">
                <label for={props.uId} className="labels">{props.label}</label>
                <div className="POCI" />
                <input type={props.type} className="input-boxes" id={props.uId} required autoFocus maxLength="10"/><br />
            </div>
        );
    }
    
    // else if (props.type == "radio") {
    //     return (
    //         <div className="radio-inputs">
    //             <input type="radio" id="male" name="gender" value="male" />
    //             <label for="male">Male</label><br />
    //             <input type="radio" id="female" name="gender" value="female" />
    //             <label for="female">Female</label><br />
    //             <input type="radio" id="other" name="gender" value="other" />
    //             <label for="other">Other</label>
    //         </div>
    //     )
    // }

    return (
        <div className="inputs">
            <label for={props.uId} className="labels">{props.label}</label>
             <div className="POC" data-placeholder={props.placeholderData}></div>
            <input type={props.type} className="input-boxes" id={props.uId} required autoFocus/><br />
        </div>
    );
};

InputType.propTypes = {
    uId: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholderData : PropTypes.string,
    type : PropTypes.string.isRequired
};

export default InputType;