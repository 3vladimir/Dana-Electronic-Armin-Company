/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import SignInForm from "./Form/SignInForm";
import Title from '../../../Componnents/Title/Title'


function Main() {
  const agentsInformationsDatabase = window.localStorage.getItem(
    "agentsInformationsDatabase"
  );
  const list = JSON.parse(agentsInformationsDatabase);

  return (
    <>
      <SignInForm
        title={"بخش نمایندگان"}
        nextPageAddress={"/Agents-page"}
        validUsersList={list}
        userType={"نماینده"}
      />
    </>
  );
}

function App() {
  return (
    <>
    <Title>
      ورود به پنل کاربری نمایندگان
    </Title>
      <Main />
    </>
  );
}

export default App;
