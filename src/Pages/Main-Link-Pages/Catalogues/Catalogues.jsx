/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { Link } from "react-router-dom";
import Header from "../../../Componnents/Header/Header";
import Footer from "../../../Componnents/Footer/Footer";
import Title  from '../../../Componnents/Title/Title'


function Main() {
  return (
    <>  
      <div style={{ color: "red" }}>
        <main>
          <h1>
            بخش کاتالوگ ها
          </h1>
        </main>
      </div>
    </>
  );
}

function App() {
  return (
    <>
    <Title>
      کاتالوگ ها
    </Title>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
