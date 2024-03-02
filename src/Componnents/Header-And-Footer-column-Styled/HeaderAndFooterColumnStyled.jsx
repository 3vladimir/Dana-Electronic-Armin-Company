import * as React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./HeaderAndFooterColumnStyled.scss";

export function HeaderAndFooterColumnStyled({ children }) {
  return (
    //flexbox parent
    <div className="container">
      
      {/* flexbox children including header,main,footer */}
      <Header />
      <div className="mainElement">{children}</div>
      <div className="footerElement">
        <Footer />
      </div>
    </div>
  );
}
