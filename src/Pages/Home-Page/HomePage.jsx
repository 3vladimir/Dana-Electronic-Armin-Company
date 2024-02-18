/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import "./HomePage.scss";
import Header from "../../Componnents/Header/Header";
import Footer from "../../Componnents/Footer/Footer";
import { Link } from "react-router-dom";
import { handleLocalStoarege } from "./Local-storage/HandleLocalStorage";
import Collapse from "@mui/material/Collapse";
import Title from "../../Componnents/Title/Title";

function Main() {
  handleLocalStoarege();
  const [bannerTitlechecked, setBannerTitleChecked] = React.useState(false);
  React.useEffect(() => {
    setBannerTitleChecked(true);
  });

  return (
    <>
      <div className="mainOuterContainer">
        <div className="banner">
          <h1 className="bannerTitle">
            <Collapse timeout={3000} in={bannerTitlechecked}>
              <li>گروه</li>
              <li>فنی</li>
              <li>مهندسی</li>
              <li>حججی</li>
            </Collapse>
          </h1>
        </div>
        <div className="mainInnerContainer">
          <main>
            <div className="mainBoxesOuterContainer">
              <Link className="mainBoxes" to={"/articles"}>
                <h3 className="mainBoxesTitles">مقالات</h3>
              </Link>
              <Link className="mainBoxes" to={"/catalogues"}>
                <h3 className="mainBoxesTitles">کاتالوگ ها</h3>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Title>صفحه اصلی</Title>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
