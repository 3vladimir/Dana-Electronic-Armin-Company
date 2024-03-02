/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import '../../../../style/formItems.scss';
import "./SignInForm.scss";
import Alert from "@mui/material/Alert";
import logo from "../../../../Images/logo.png";
import SubmitButton from '../../../../Componnents/Button/SubmitButton'
  
function SignInForm({ title, nextPageAddress, validUsersList, userType }) {
  const [alert, setAlert] = React.useState(false);
  function handleOpenAlert() {
    setAlert(true);
  }
  function handleCloseAlert() {
    setAlert(false);
  }
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;
    const validUser = validUsersList.find(function (item, index) {
      return item.username === usernameValue && item.password === passwordValue;
    });

    if (validUser) {
      const userStatus = {
        name: `${validUser.firstName} ${validUser.lastName}`,
        status: userType,
      };
      window.localStorage.setItem("userStatus", JSON.stringify(userStatus));
      window.localStorage.setItem(
        "currentCustomerPersonalInformations",
        JSON.stringify(validUser)
      );
      location.assign(nextPageAddress);
    } else {
      handleOpenAlert();
    }
  }
  return (
    <>
      <div className="formOuterContainner signInOuterContainer">
        <div className="formInnerContainer signInInnerContainer">
          <main>
            <img className="formLogo"src={logo} alt="logo" />
            <h1 className="formFirstTitle">{title}</h1>
            <h2 className="formSecondTitle signInSecondTitle">
              ورود به حساب کاربری
            </h2>
            {alert ? (
              <Alert
                sx={{
                  direction: "ltr",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "75%",
                  height:'2.5em',
                  margin: "0 auto",
                  fontSize: "medium",
                  fontFamily: "inherit",
                }}
                variant="filled"
                severity="error"
              >
                <span className="formAlertText">  
                  نام کاربری یا رمز عبور اشتباه است
                </span>
              </Alert>
            ) : null}
            <form onSubmit={handleSubmit}>
              <ul className="signInList">
                <li className="signInItems">
                  <label className="formItemsLabel" htmlFor="signInUsername">
                    نام کاربری :
                  </label>{" "}
                  <input
                    name="username"
                    onChange={handleCloseAlert}
                    className="formInputs signInItemsInputs"
                    placeholder="username"
                    style={{ textAlign: "left" }}
                    id="signInUsername"
                    ref={usernameRef}
                    type="text"
                  />
                </li>
                <li className="signInItems">
                  <label className="formItemsLabel" htmlFor="signInPassword">
                    رمز عبور :
                  </label>{" "}
                  <input
                    name="password"
                    onChange={handleCloseAlert}
                    className="formInputs signInItemsInputs"
                    placeholder="password"
                    style={{ textAlign: "left" }}
                    id="signInPassword"
                    ref={passwordRef}
                    type="password"
                  />
                </li>
              </ul>
              <SubmitButton
              content={'ورود'}
              id={'signInSubmitButton'}/>
            </form>
          </main>
        </div>
      </div>
    </>
  );
}

export default SignInForm;
