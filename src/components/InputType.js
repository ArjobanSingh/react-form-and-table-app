import React from 'react';
import PropTypes from 'prop-types';

const InputType = props => {
    if (props.type === "tel") {
        return (
            <div className="inputs">
                <label htmlFor={props.uId} className="labels">{props.label}</label>
                <div className="POCI" />
                <input type={props.type} className="input-boxes" id={props.uId} required autoFocus maxLength="10"/><br />
            </div>
        );
    }
    
    else if (props.type == "radio") {
        return (
            <div className="inputs">
                <p className="form-desc">{props.label}
                </p>
                <div className="radio-inputs">
                        <label className="radio-inline form-desc">
                            <input className="radio-option" type="radio" name={props.uId} required/>Excellent
                        </label>
                        <label className="radio-inline form-desc">
                            <input className="radio-option" type="radio" name={props.uId} />Good
                        </label>
                        <label className="radio-inline form-desc">
                            <input className="radio-option" type="radio" name={props.uId} />Fair
                        </label>
                        <label className="radio-inline form-desc">
                            <input className="radio-option" type="radio" name={props.uId} />Bad
                        </label>
                </div>
                <br />
            </div>
            

        )
    }

    return (
        <div className="inputs">
            <label htmlFor={props.uId} className="labels">{props.label}</label>
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