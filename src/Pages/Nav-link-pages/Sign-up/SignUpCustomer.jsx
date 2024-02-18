/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import "./SignUpCustomer.scss";
import "../style/formItems.scss";
import logo from "../../../Images/logo.png";
import { Button } from "@mui/material";
import uuid from "react-uuid";
import axios from "axios";
import FormHelperText from "@mui/material/FormHelperText";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Title from '../../../Componnents/Title/Title'

function Main() {
  /*define refs*/
  const firstNameRef = React.useRef();
  const lastNameRef = React.useRef();
  const phoneNumberRef = React.useRef();
  const cityRef = React.useRef();
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const workDomainRef = React.useRef();
  const extraDescriptionsRef = React.useRef();

  /*local storage*/
  function handleLocalStorage(currentCustomerPersonalInformations) {
    window.localStorage.setItem(
      "currentCustomerPersonalInformations",
      JSON.stringify(currentCustomerPersonalInformations)
    );
    let customersPersonalInformationsDatabse = window.localStorage.getItem(
      "customersPersonalInformationsDatabse"
    );
    customersPersonalInformationsDatabse = JSON.parse(
      customersPersonalInformationsDatabse
    );
    customersPersonalInformationsDatabse.push(
      currentCustomerPersonalInformations
    );
    window.localStorage.setItem(
      "customersPersonalInformationsDatabse",
      JSON.stringify(customersPersonalInformationsDatabse)
    );
  }

  /*Error*/
  const [firstNameError, setFirstNameError] = React.useState(false);
  function firstNameErrorOn() {
    setFirstNameError(true);
  }

  const [lastNameError, setLastNameError] = React.useState(false);
  function lastNameErrorOn() {
    setLastNameError(true);
  }

  const [phoneNumberError, setPhoneNumberError] = React.useState(false);
  function phoneNumberErrorOn() {
    setPhoneNumberError(true);
  }
  function phoneNumberErrorOff() {
    setPhoneNumberError(false);
  }

  const [cityError, setCityError] = React.useState(false);
  function cityErrorOn() {
    setCityError(true);
  }

  const [usernameError, setUsernameError] = React.useState(false);
  function usernameErrorOn() {
    setUsernameError(true);
  }
  function usernameErrorOff() {
    setUsernameError(false);
  }

  const [passwordError, setPasswordError] = React.useState(false);
  function passwordErrorOn() {
    setPasswordError(true);
  }
  function passwordErrorOff() {
    setPasswordError(false);
  }

  /*handle inputs*/
  function handleFarsiInputs(inputRef, inputSetError) {
    inputRef.current.classList.remove("inputError");
    const englishAlphabets = /[a-z,A-Z]/;
    const isKeyboardFarsi = englishAlphabets.test(inputRef.current.value);
    if (isKeyboardFarsi) {
      inputSetError();
      handleSnackbarStateOpen();
      inputRef.current.value = "";
      inputRef.current.classList.add("inputError");
    }
  }

  function firstnameHandle() {
    setFirstNameError(false);
    handleSnackbarStateClose();
    handleFarsiInputs(firstNameRef, firstNameErrorOn);
  }

  function lastNameHandle() {
    setLastNameError(false);
    handleSnackbarStateClose();
    handleFarsiInputs(lastNameRef, lastNameErrorOn);
  }

  function cityHandle() {
    setCityError(false);
    handleSnackbarStateClose();
    handleFarsiInputs(cityRef, cityErrorOn);
  }

  function phoneNumberHandle() {
    phoneNumberRef.current.classList.remove("inputError");
    // phoneNumberErrorOff()
    const inputValidValues = /^\d{11}$/;
    const isInputValid = inputValidValues.test(phoneNumberRef.current.value);
    console.log(isInputValid);
    if (!isInputValid) {
      phoneNumberErrorOn();
      phoneNumberRef.current.classList.add("inputError");
    }
  }

  function usernameHandle() {
    usernameErrorOff();
    usernameRef.current.classList.remove("inputError");
    const inputValidValues = /\w$/;
    const isInputValid = inputValidValues.test(usernameRef.current.value);
    if (!isInputValid) {
      usernameErrorOn();
      usernameRef.current.value = "";
      usernameRef.current.classList.add("inputError");
    }
  }

  function passwordHandle() {
    passwordErrorOff();
    passwordRef.current.classList.remove("inputError");
    const inputValidValues = /\w$/;
    const isInputValid = inputValidValues.test(passwordRef.current.value);
    if (!isInputValid) {
      passwordErrorOn();
      passwordRef.current.value = "";
      passwordRef.current.classList.add("inputError");
    }
  }

  function InputHelperText({ children = "خطا", ...props }) {
    return (
      <FormHelperText
        sx={{
          textAlign: "center",
          color: "red",
          fontSize: "1em",
        }}
        {...props}
      >
        <span className="formAlertText">{children}</span>
      </FormHelperText>
    );
  }

  /*snackbar*/
  const [snackbarState, setSnackbarState] = React.useState(false);
  function handleSnackbarStateOpen() {
    setSnackbarState(true);
  }
  function handleSnackbarStateClose() {
    setSnackbarState(false);
  }

  /*form submit function*/
  function handleSubmit(event) {
    event.preventDefault();

    if (phoneNumberError) {
      return;
    }

    /*handle the customer informations*/
    const currentCustomerPersonalInformations = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      city: cityRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      workDomain: workDomainRef.current.value,
      extraDescriptionsRef: extraDescriptionsRef.current.value,
      id: uuid(),
    };
    handleLocalStorage(currentCustomerPersonalInformations);

    const userStatus = {
      name: `${currentCustomerPersonalInformations.firstName} 
             ${currentCustomerPersonalInformations.lastName}`,
      status: "مشتری",
    };
    window.localStorage.setItem("userStatus", JSON.stringify(userStatus));

    /*go to next page*/
    location.assign("/Customers-page");
  }

  return (
    <>
      <div className="formOuterContainner">
        <div className="formInnerContainer signUpInnerContainer">
          <main>
            <img width={"15%"} src={logo} alt="logo" />
            <h1 className="formFirstTitle">بخش مشتریان</h1>
            <h2 className="formSecondTitle">ایجاد حساب کاربری</h2>
            <form onSubmit={handleSubmit}>
              <ul className="signUpItemsList">
                <li className="signUpItems">
                  <div className="signUpItemsLabelContainer">
                    <label className="formItemsLabel" htmlFor="signUpFirstName">
                      نام
                    </label>
                  </div>
                  <input
                    name="firstName"
                    variant="outlined"
                    type="text"
                    id="signUpFirstName"
                    ref={firstNameRef}
                    className="formInputs signUpItemsInput"
                    required
                    onChange={firstnameHandle}
                  />

                  {firstNameError ? <InputHelperText></InputHelperText> : null}
                </li>

                <li className="signUpItems">
                  <div className="signUpItemsLabelContainer">
                    <label className="formItemsLabel" htmlFor="signUpLastName">
                      نام خانوادگی
                    </label>
                  </div>
                  <input
                    name="lastName"
                    variant="outlined"
                    type="text"
                    id="signUpLastName"
                    ref={lastNameRef}
                    className="formInputs signUpItemsInput"
                    required
                    onChange={lastNameHandle}
                  />

                  {lastNameError ? <InputHelperText></InputHelperText> : null}
                </li>
                <li className="signUpItems">
                  <div className="signUpItemsLabelContainer">
                    <label
                      className="formItemsLabel"
                      htmlFor="signUpPhoneNumber"
                    >
                      شماره همراه
                    </label>
                  </div>
                  <input
                    name="phoneNumber"
                    variant="outlined"
                    type="tel"
                    id="signUpPhoneNumber"
                    ref={phoneNumberRef}
                    className="formInputs signUpItemsInput"
                    placeholder="09--"
                    required
                    onBlur={phoneNumberHandle}
                    onChange={phoneNumberErrorOff}
                  />

                  {phoneNumberError ? (
                    <InputHelperText>
                      شماره وارد شده صحیح نمیباشد
                    </InputHelperText>
                  ) : null}
                </li>
                <li className="signUpItems">
                  <div className="signUpItemsLabelContainer">
                    <label className="formItemsLabel" htmlFor="signUpCity">
                      شهر محل زندگی
                    </label>
                  </div>
                  <input
                    name="city"
                    variant="outlined"
                    type="text"
                    id="signUpCity"
                    ref={cityRef}
                    className="formInputs signUpItemsInput"
                    placeholder="مثال : نجف آباد"
                    required
                    onChange={cityHandle}
                  />

                  {cityError ? <InputHelperText></InputHelperText> : null}
                </li>
                <li className="signUpItems">
                  <div className="signUpItemsLabelContainer">
                    <label className="formItemsLabel" htmlFor="signUpUsername">
                      نام کاربری
                    </label>
                  </div>
                  <input
                    name="username"
                    variant="outlined"
                    type="text"
                    id="signUpUsername"
                    ref={usernameRef}
                    className="formInputs signUpItemsInput"
                    placeholder="username"
                    required
                    onChange={usernameHandle}
                    style={{ direction: "ltr" }}
                  />

                  {usernameError ? (
                    <InputHelperText>
                      نام کاربری باید به انگلیسی وارد شود
                    </InputHelperText>
                  ) : null}
                </li>
                <li className="signUpItems">
                  <div className="signUpItemsLabelContainer">
                    <label className="formItemsLabel" htmlFor="signUpPassword">
                      رمز عبور
                    </label>{" "}
                  </div>
                  <input
                    name="password"
                    variant="outlined"
                    type="password"
                    id="signUpPassword"
                    ref={passwordRef}
                    className="formInputs signUpItemsInput"
                    placeholder="password"
                    required
                    onChange={passwordHandle}
                    style={{ direction: "ltr" }}
                  />

                  {passwordError ? (
                    <InputHelperText>
                      رمز عبور صرفا میتواند شامل a-z,0-9,_ باشد
                    </InputHelperText>
                  ) : null}
                </li>
                <li className="signUpItems">
                  <div className="signUpItemsLabelContainer">
                    <label
                      className="formItemsLabel"
                      htmlFor="signUpworkDomain"
                    >
                      زمینه کاری
                    </label>
                  </div>

                  <select
                    name="workDomain"
                    id="signUpworkDomain"
                    ref={workDomainRef}
                    className="signUpItemsSelect"
                  >
                    <option>گلخانه</option>
                    <option>کارخانه و صنایع</option>
                    <option>هتل</option>
                    <option>سردخانه</option>
                    <option>منزل</option>
                    <option>سایر</option>
                  </select>
                </li>
                <li className="signUpItems">
                  <div className="signUpItemsLabelContainer">
                    <label
                      className="formItemsLabel"
                      htmlFor="signUpExtraDescriptions"
                    >
                      توضیحات اضافی
                      <span style={{ opacity: "0.7" }}>(اختیاری)</span>
                    </label>
                  </div>
                  <textarea
                    name="extraDescriptions"
                    id="signUpExtraDescriptions"
                    ref={extraDescriptionsRef}
                    className="signUpTextarea"
                  ></textarea>
                </li>
              </ul>
              <Button
                type="submit"
                id="signUpSubmitButton"
                variant="contained"
                sx={{ width: "70%", fontSize: "large", fontWeight: "700" }}
              >
                <span className="formSubmitButtonText">ثبت نام</span>
              </Button>
            </form>
          </main>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarState}
        onClose={handleSnackbarStateOpen}
        key={"top-center"}
      >
        <Alert
          severity="warning"
          onClose={handleSnackbarStateClose}
          sx={{ direction: "ltr", fontFamily: "inherit" }}
        >
          <spa className="formAlertText">
            صفحه کلید را به حالت فارسی تغییر دهید
          </spa>
        </Alert>
      </Snackbar>
    </>
  );
}

function App() {
  return (
    <>
    <Title>
      ثبت نام مشتریان
    </Title>
      <Main />
    </>
  );
}

export default App;
