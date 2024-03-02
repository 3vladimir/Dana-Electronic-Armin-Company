/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { Link } from "react-router-dom";
import { HeaderAndFooterColumnStyled } from "../../../Componnents/Header-And-Footer-column-Styled/HeaderAndFooterColumnStyled";
import Title from "../../../Componnents/Title/Title";

function Main() {
  return (
    <>
      <div style={{ color: "red" }}>
        <main>
          <h1>بخش کاتالوگ ها</h1>
        </main>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Title>کاتالوگ ها</Title>
      <HeaderAndFooterColumnStyled>
        <Main />
      </HeaderAndFooterColumnStyled>
    </>
  );
}

export default App;
