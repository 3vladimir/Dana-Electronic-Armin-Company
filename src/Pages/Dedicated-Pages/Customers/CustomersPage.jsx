/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { HeaderAndFooterColumnStyled } from "../../../Componnents/Header-And-Footer-column-Styled/HeaderAndFooterColumnStyled";
import "./CustomerPage.scss";
import backgroundImage from "../../../Images/customerPageBackgound.jpg";
import Title from "../../../Componnents/Title/Title";

function Main() {
  const currentCustomerPersonalInformations = window.localStorage.getItem(
    "currentCustomerPersonalInformations"
  );
  const customerPersonalInformations = JSON.parse(
    currentCustomerPersonalInformations
  );

  return (
    <>
      <div className="customerPageBackground">
        <img
          className="customerPageBackgroundImage"
          src={backgroundImage}
          alt="backgroundImage"
        />
      </div>
      <div className="cusomerPageInnerContainer">
        <main>
          <h1 className="customerPageFirstTitle">بخش مشتریان</h1>
          <h2 className="customerPageSecondTitle">اطلاعات مشتریان</h2>
          <ul>
            <li className="customersPersonalInfoItems">
              نام : {customerPersonalInformations.firstName}
            </li>
            <li className="customersPersonalInfoItems">
              نام خانوادگی : {customerPersonalInformations.lastName}
            </li>
            <li className="customersPersonalInfoItems">
              شماره همراه : {customerPersonalInformations.phoneNumber}
            </li>
            <li className="customersPersonalInfoItems">
              شهر : {customerPersonalInformations.city}
            </li>
            <li className="customersPersonalInfoItems">
              نام کاربری : {customerPersonalInformations.username}
            </li>
            <li className="customersPersonalInfoItems">
              حوزه کاری : {customerPersonalInformations.workDomain}
            </li>
            {customerPersonalInformations.externalDescriptions ? (
              <li className="customersPersonalInfoItems">
                توضیحات اضافی :{" "}
                {customerPersonalInformations.externalDescriptions}
              </li>
            ) : null}
          </ul>
        </main>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Title>بخش مشتریان</Title>
      <HeaderAndFooterColumnStyled>
        <Main />
      </HeaderAndFooterColumnStyled>
    </>
  );
}

export default App;
