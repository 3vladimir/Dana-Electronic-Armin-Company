/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import SignInForm from "./Form/SignInForm";
import Title from '../../../Componnents/Title/Title'


function Main() { 
  const managersInformationsDatabase = window.localStorage.getItem(
    "managersInformationsDatabase"
  );
  const list = JSON.parse(managersInformationsDatabase);
  return (
    <>
      <SignInForm
        title={"بخش مدیران"}
        nextPageAddress={"/managers-page"}
        validUsersList={list}
        userType={'مدیر'}
      />
    </>
  );
}

function App() {
  return (
    <>
     <Title>
      ورود به پنل کاربری مدیران
    </Title>
      <Main />
    </>
  );
}

export default App;
