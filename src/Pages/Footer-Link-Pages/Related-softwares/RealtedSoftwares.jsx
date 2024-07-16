/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { HeaderAndFooterColumnStyled } from "../../../Components/Header-And-Footer-column-Styled/HeaderAndFooterColumnStyled";
import Title  from '../../../Components/Title/Title' 


function Main() {
  return (
    <>
      <div style={{padding:'100px 0 500px 0',textAlign:'center'}}>
        <h1>
            بخش نرم افزار های مرتبط
        </h1>
      </div>
    </>
  );
}

function App() {
  return (
    <>
    <Title>
      نرم افزار های مرتبط
    </Title>
    <HeaderAndFooterColumnStyled>
        <Main />
      </HeaderAndFooterColumnStyled>
    </>
  );
}

export default App;
