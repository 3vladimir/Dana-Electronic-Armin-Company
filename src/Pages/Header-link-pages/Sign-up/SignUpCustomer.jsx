/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import "./SignUpCustomer.scss";
import "../../../style/formItems.scss";
import logo from "../../../Images/logo.png";
import uuid from "react-uuid";
import FormHelperText from "@mui/material/FormHelperText";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Title from "../../../Componnents/Title/Title";
import handleLocalStorage from "./Local-storage/handleLocalStorage";
import SubmitButton from "../../../Componnents/Button/SubmitButton";

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

  /*Error*/

  const [error, setError] = React.useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
    city: false,
    username: false,
    password: false,
  });

  function firstNameErrorOn() {
    setError({ firstName: true });
  }
  function firstNameErrorOff() {
    setError({ firstName: false });
  }

  function lastNameErrorOn() {
    setError({ lastName: true });
  }
  function lastNameErrorOff() {
    setError({ lastName: false });
  }

  function phoneNumberErrorOn() {
    setError({ phoneNumber: true });
  }
  function phoneNumberErrorOff() {
    setError({ phoneNumber: false });
  }

  function cityErrorOn() {
    setError({ city: true });
  }
  function cityErrorOff() {
    setError({ city: false });
  }

  function usernameErrorOn() {
    setError({ username: true });
  }
  function usernameErrorOff() {
    setError({ username: false });
  }

  function passwordErrorOn() {
    setError({ password: true });
  }
  function passwordErrorOff() {
    setError({ password: false });
  }

  /*handle inputs*/
  function handleFarsiInputs(inputRef, inputSetError) {
    handleSnackbarStateClose();
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
    firstNameErrorOff();
    handleFarsiInputs(firstNameRef, firstNameErrorOn);
  }

  function lastNameHandle() {
    lastNameErrorOff();
    handleFarsiInputs(lastNameRef, lastNameErrorOn);
  }

  function cityHandle() {
    cityErrorOff();
    handleFarsiInputs(cityRef, cityErrorOn);
  }

  function phoneNumberHandle() {
    phoneNumberRef.current.classList.remove("inputError");
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

    if (error.phoneNumber) {
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
                    placeholder="علی"
                    required
                    onChange={firstnameHandle}
                  />

                  {error.firstName ? <InputHelperText></InputHelperText> : null}
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
                    placeholder="محمدی"
                    required
                    onChange={lastNameHandle}
                  />

                  {error.lastName ? <InputHelperText></InputHelperText> : null}
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

                  {error.phoneNumber ? (
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
                    placeholder="تیران"
                    required
                    onChange={cityHandle}
                  />

                  {error.city ? <InputHelperText></InputHelperText> : null}
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
                    placeholder="ali"
                    required
                    onChange={usernameHandle}
                    style={{ direction: "ltr" }}
                  />

                  {error.username ? (
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
                    placeholder="ali1234"
                    required
                    onChange={passwordHandle}
                    style={{ direction: "ltr" }}
                  />

                  {error.password ? (
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
                    className="signUpItemsWorkDomain"
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
              <SubmitButton content={"ثبت نام"} id={"signUpSubmitButton"} />
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
      <Title>ثبت نام مشتریان</Title>
      <Main />
    </>
  );
}

export default App;
