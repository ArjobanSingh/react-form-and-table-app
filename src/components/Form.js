import React, {useState} from 'react';
import PropTypes from 'prop-types';
import InputType from "./InputType"
  
import {saveFormData} from "../redux/actionCreators"

import {connect} from "react-redux"
const Form = props => {

    // temporary state for filed values
    const [textVal, setTextVal] = useState("")
    const [isTextValid, setTextValid] = useState(true)
    const [phoneVal, setPhoneVal] = useState("")
    const [isPhoneValid, setPhoneValid] = useState(true)
    const [nameVal, setNameVal] = useState("")
    const [isNameValid, setNameValid] = useState(true)
    const [emailVal, setEmailVal] = useState("")
    const [isEmailValid, setEmailValid] = useState(true)
    const [serviceRadioSelected, setServiceRadioSelected] = useState("Excellent")
    const [bevarageRadioSelected, setBevarageRadioSelected] = useState("Excellent")
    const [cleaninessRadioSelected, setCleaninessRadioSelected] = useState("Excellent")
    const [overallRadioSelected, setOverallRadioSelected] = useState("Excellent")

    function phonenumber(inputtxt)
    {
        let phoneno = /^\d{10}$/;
        if(inputtxt.match(phoneno)) {
            return true;
        }
        else {
            return false;
        }
    }

    function validateEmail(inputText) {
        // regex expression for email validation
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.match(mailformat)) {  
            //  document.form1.text1.focus();
            return true;
        } else {
            // document.form1.text1.focus();
        return false;
        }
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (!(/\S/.test(textVal)) ) {
            // textVal is empty or whitespace
            setTextValid(false);
            return
        } else {
            setTextValid(true);
        }

        if (!(/\S/.test(nameVal)) ) {
            setNameValid(false)
            return
        } else {
            setNameValid(true)
        }

        if (!(/\S/.test(phoneVal)) || ! phonenumber(phoneVal)) {
            setPhoneValid(false)
            return
        } else {
            setPhoneValid(true)
        }

        if (!(/\S/.test(emailVal)) || ! validateEmail(emailVal)) {
            setEmailValid(false)
            return
        } else {
            setEmailValid(true)
        }

        const data = {
            textVal,
            phoneVal,
            nameVal,
            emailVal,
            serviceRadioSelected,
            bevarageRadioSelected,
            overallRadioSelected,
            cleaninessRadioSelected
        }
        saveFormData(data)
            return
        // if (/\S/.test(phoneVal) && /\S/.test(emailVal)) {
        //     // means these values are not empty or just whitespace

        //     if (! phonenumber(phoneVal)) {
        //         // phone number is not 10 digit valid number
        //         setPhoneValid(false)
        //         return
        //     }
        //     if (! validateEmail(emailVal)) {
        //         // email is not valid
        //         setEmailVal(false)
        //         return
        //     }
        //     alert("right")
        //     return;
        // }

    }

    const changeTextVal = (event) => {
        setTextVal(event.target.value)
    }    
    const chanegPhoneVal = (event) => {
        setPhoneVal(event.target.value)
    } 
    const changeNameVal = (event) => {
        setNameVal(event.target.value)
    } 
    const changeEmailVal = (event) => {
        setEmailVal(event.target.value)
    } 
    const changeServiceRadio = (event) => {
        setServiceRadioSelected(event.target.value)
    } 
    const changeBevarageRadio = (event) => {
        setBevarageRadioSelected(event.target.value)
    } 
    const changeCleaninessRadio = (event) => {
        setCleaninessRadioSelected(event.target.value)
    } 
    const changeOverallRadio = (event) => {
        setOverallRadioSelected(event.target.value)
    } 

    return (
        <form className="formContainer">
            <div className="leftInputBox">
                <InputType type="text" label="Text field" placeholderData="Hello" uId="hello-text"
                value={textVal} changeValue={changeTextVal} isValid={isTextValid} />
                <InputType type="tel" label="Phone  field" placeholderData="" uId="mobile-no"
                value={phoneVal} changeValue={chanegPhoneVal} isValid={isPhoneValid} />
                <InputType type="text" label="Name" placeholderData="Name" uId="name"
                value={nameVal} changeValue={changeNameVal} isValid={isNameValid}/>
            </div>
            <div className="rightInputBox">
                <InputType type="email" label="Email field" placeholderData="email" uId="email"
                value={emailVal} changeValue={changeEmailVal} isValid={isEmailValid}/>
                <InputType 
                    type="radio" 
                    label="Please rate the quality of the service you received from your host."
                    uId="quality_radio"
                    value={serviceRadioSelected} 
                    changeValue={changeServiceRadio}/>
                <InputType 
                    type="radio" 
                    label="Please rate the quality of your beverage."
                    uId="beverage_radio" 
                    value={bevarageRadioSelected}
                    changeValue={changeBevarageRadio}/>
                <InputType 
                    type="radio" 
                    label="Was our restaurant clean?"
                    uId="clean_radio" 
                    value={cleaninessRadioSelected}
                    changeValue={changeCleaninessRadio}/>
                <InputType 
                    type="radio" 
                    label="Please rate your overall dining experience."
                    uId="overall_radio" 
                    value={overallRadioSelected}
                    changeValue={changeOverallRadio}/>  
                <input className="submit-btn" type="submit" value="Submit" onClick={submitForm}/>                                          
            </div>
        </form>
    );
};

Form.propTypes = {
    
};

const mapDispatchToProps = {
    saveFormData
}

export default connect(null, mapDispatchToProps)(Form);