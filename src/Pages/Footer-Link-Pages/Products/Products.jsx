/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { HeaderAndFooterColumnStyled } from "../../../Componnents/Header-And-Footer-column-Styled/HeaderAndFooterColumnStyled";
import Title  from '../../../Componnents/Title/Title' 

function Main() {
  return (
    <>
      <div style={{ padding: "100px 0 500px 0", textAlign: "center" }}>
        <main>
          <h1>بخش محصولات</h1>
        </main>
      </div>
    </>
  );
}

function App() {
  return (
    <>
    <Title>
      محصولات
    </Title>
    <HeaderAndFooterColumnStyled>
        <Main />
      </HeaderAndFooterColumnStyled>
    </>
  );
}

export default App;
