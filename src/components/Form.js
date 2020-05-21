import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import InputType from "./InputType"
  
import {
        saveFormData, 
        nameVal, 
        phoneVal, 
        serviceVal, 
        beverageVal, 
        cleaninessVal,
        overallVal, 
        resetVals, 
        emailVal,
        resetData} from "../redux/actionCreators"

import {connect} from "react-redux"
const Form = props => {

    // for cleaning fields before unmounting
    useEffect(() => {
        return (() => {
            props.resetVals()
        })
    }, [])

    // temporary state for validating fields
    const [isPhoneValid, setPhoneValid] = useState(true)
    const [isNameValid, setNameValid] = useState(true)
    const [isEmailValid, setEmailValid] = useState(true)

    // refernces to input fileds
    const nameInputRef = useRef();
    const phoneInputRef = useRef();
    const emailInputRef = useRef();

    const phonenumber = (inputtxt) =>
    {
        let phoneno = /^\d{10}$/;
        if(inputtxt.match(phoneno)) {
            return true;
        }
        else {
            return false;
        }
    }

    const validateEmail = (inputText) => {
        // regex expression for email validation
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(inputText.match(mailformat)) {  
            return true;
        } else {
        return false;
        }
    }

    const submitForm = (e) => {
        e.preventDefault()

        if (!(/\S/.test(props.tempValues.name)) ) {
            setNameValid(false)
            nameInputRef.current.focus();
            return
        } else {
            setNameValid(true)
        }

        if (!(/\S/.test(props.tempValues.phoneVal)) || ! phonenumber(props.tempValues.phoneVal)) {
            setPhoneValid(false)
            phoneInputRef.current.focus();
            return
        } else {
            setPhoneValid(true)
        }

        if (!(/\S/.test(props.tempValues.emailVal)) || ! validateEmail(props.tempValues.emailVal)) {
            setEmailValid(false)
            emailInputRef.current.focus()
            return
        } else {
            setEmailValid(true)
        }

        const data = {
            formName:"Aromatic Bar",
            phoneVal: props.tempValues.phoneVal,
            nameVal: props.tempValues.name,
            emailVal: props.tempValues.emailVal,
            serviceRadioSelected: props.tempValues.serviceRadioSelected,
            bevarageRadioSelected: props.tempValues.bevarageRadioSelected,
            overallRadioSelected: props.tempValues.overallRadioSelected,
            cleaninessRadioSelected: props.tempValues.cleaninessRadioSelected
        }
        props.saveFormData(data)
            props.resetVals()
            nameInputRef.current.focus()
            // props.resetData()
            return

    }

  
    const chanegPhoneVal = (event) => {
        props.phoneVal(event.target.value)
    } 
    const changeNameVal = (event) => {
        props.nameVal(event.target.value)
    } 
    const changeEmailVal = (event) => {
        props.emailVal(event.target.value)
    } 
    const changeServiceRadio = (event) => {
        props.serviceVal(event.target.value)
    } 
    const changeBevarageRadio = (event) => {
        props.beverageVal(event.target.value)
    } 
    const changeCleaninessRadio = (event) => {
        props.cleaninessVal(event.target.value)
    } 
    const changeOverallRadio = (event) => {
        props.overallVal(event.target.value)
    } 


    return (
        <form className="formContainer">
            <div className="leftInputBox">
                <InputType type="text" 
                    label="Name" 
                    placeholderData="Name" 
                    uId="name"
                    value={props.tempValues.name} 
                    changeValue={changeNameVal} 
                    isValid={isNameValid}
                    reference={nameInputRef} /> 

                <InputType 
                    type="tel" 
                    label="Phone  field" 
                    placeholderData="" 
                    uId="mobile-no"
                    value={props.tempValues.phoneVal} 
                    changeValue={chanegPhoneVal} 
                    isValid={isPhoneValid} 
                    reference={phoneInputRef}/>
                
            </div>
            <div className="rightInputBox">
                <InputType 
                    type="email" 
                    label="Email field" 
                    placeholderData="email" 
                    uId="email"
                    value={props.tempValues.emailVal} 
                    changeValue={changeEmailVal} 
                    isValid={isEmailValid}
                    reference={emailInputRef}/>

                <InputType 
                    type="radio" 
                    label="Please rate the quality of the service you received from your host."
                    uId="quality_radio"
                    value={props.tempValues.serviceRadioSelected} 
                    changeValue={changeServiceRadio}/>
                <InputType 
                    type="radio" 
                    label="Please rate the quality of your beverage."
                    uId="beverage_radio" 
                    value={props.tempValues.bevarageRadioSelected}
                    changeValue={changeBevarageRadio}/>
                <InputType 
                    type="radio" 
                    label="Was our restaurant clean?"
                    uId="clean_radio" 
                    value={props.tempValues.cleaninessRadioSelected}
                    changeValue={changeCleaninessRadio}/>
                <InputType 
                    type="radio" 
                    label="Please rate your overall dining experience."
                    uId="overall_radio" 
                    value={props.tempValues.overallRadioSelected}
                    changeValue={changeOverallRadio}/>  
                <input 
                    className="submit-btn" 
                    type="submit" 
                    value="Submit" 
                    onClick={submitForm}/>                                          
            </div>
        </form>
    );
};

Form.propTypes = {
    
};

const mapStateToProps = (state) => {
    return {
        tempValues : state.temporaryValues
    }
}
const mapDispatchToProps = {
    saveFormData,
    nameVal,
    phoneVal, 
    serviceVal,
    beverageVal, 
    cleaninessVal,
    overallVal, 
    resetVals, 
    emailVal,
    resetData
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);