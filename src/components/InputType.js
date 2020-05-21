import React from 'react';
import PropTypes from 'prop-types';

// This is just presentational Component
const InputType = props => {
    if (props.type === "tel") {
        return (
            <div className="inputs">
                <label 
                    htmlFor={props.uId} 
                    className="labels">
                        {props.label}
                </label>

                <div className="POCI" />
                <input 
                    type={props.type} 
                    className={props.isValid ? 
                        "input-boxes input-boxes-border":
                        "input-boxes input-boxes-error-border" } 
                    id={props.uId} 
                    value={props.value} 
                    required autoFocus maxLength="10"
                    onChange={props.changeValue}
                    ref={props.reference}
                />
                <p 
                    className={props.isValid ? 
                                "hideError":
                                "showError"}>
                        Phone number is invalid, Please type 10 digit valid number
                </p>
               <br />
            </div>
        );
    }
    
    else if (props.type == "radio") {
        return (
            <div className="inputs">
                <p className="form-desc">
                    {props.label}
                </p>
                <div className="radio-inputs">
                        <label className="radio-inline form-desc">
                            <input 
                                className="radio-option" 
                                type="radio" 
                                name={props.uId} 
                                value="Excellent" 
                                required
                                checked={props.value === "Excellent"}
                                onChange={props.changeValue} />
                                Excellent
                        </label>
                        <label className="radio-inline form-desc">
                            <input 
                                className="radio-option" 
                                type="radio" name={props.uId} 
                                value="Good" 
                                checked={props.value === "Good"}
                                onChange={props.changeValue}
                                />
                                Good
                        </label>
                        <label className="radio-inline form-desc">
                            <input 
                                className="radio-option" 
                                type="radio" 
                                name={props.uId} 
                                value="Fair" 
                                checked={props.value === "Fair"}
                                onChange={props.changeValue}/>
                                Fair
                        </label>
                        <label className="radio-inline form-desc">
                            <input 
                                className="radio-option" 
                                type="radio" 
                                name={props.uId} 
                                value="Bad" 
                                checked={props.value === "Bad"}
                                onChange={props.changeValue}/>
                                Bad
                        </label>
                </div>
               
            </div>
            

        )
    }

    return (
        <div className="inputs">
            <label 
                htmlFor={props.uId} 
                className="labels">
                    {props.label}
            </label>
             <div  
                className="POC" 
                data-placeholder={props.placeholderData}>
            </div>
            <input 
                type={props.type} 
                value={props.value} 
                className={props.isValid? 
                    "input-boxes input-boxes-border" :
                    "input-boxes input-boxes-error-border" 
                    }
                id={props.uId} 
                onChange={props.changeValue} 
                ref={props.reference} 
                required 
                autoFocus/>

            {props.uId === "email"?
                <p 
                className={props.isValid ? 
                    "hideError":
                    "showError"}>
                        Invalid Email address, Please type in valid email address
                </p>
            :
                <p 
                    className={props.isValid ? 
                                "hideError":
                                "showError"}>
                    This is required field
                </p>
            }
            <br />
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