/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import SignInForm from "./Form/SignInForm";
import Title from '../../../Componnents/Title/Title'


function Main() {
  const customersPersonalInformationsDatabse = window.localStorage.getItem(
    "customersPersonalInformationsDatabse"
  );
  const list = JSON.parse(customersPersonalInformationsDatabse);
  return (
    <>
      <SignInForm
        title={"بخش مشتریان"} 
        nextPageAddress={"/Customers-page"}
        validUsersList={list}
        userType={'مشتری'}
      />
    </>
  );
}

function App() {
  return (
    <>
    <Title>
      ورود به پنل کاربری مشتریان
    </Title>
      <Main />
    </>
  );
}

export default App;
