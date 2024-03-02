/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { HeaderAndFooterColumnStyled } from "../../../Componnents/Header-And-Footer-column-Styled/HeaderAndFooterColumnStyled";
import "./contactUs.scss";
import telephone from "../../../Images/Icons/telephone.jpg";
import mobile from "../../../Images/Icons/mobile.png";
import eitaa from "../../../Images/Icons/eitaa.png";
import Grow from "@mui/material/Grow";
import Title from '../../../Componnents/Title/Title'


function Main() {
  const [checked, setChecked] = React.useState(false);
  React.useEffect(() => {
    setChecked(true);
  });
  return (
    <>
      <div className="contactUsOuterContainer">
        <div className="contactUsInnerContainer">
          <main>
            <h1 className="contactUsTitle">تماس با گروه فنی مهندسی حججی</h1>
            آدرس : اصفهان،نجف آباد،خیابان 15 خرداد جنوبی جنب چهار راه
            <Grow in={checked}>
              <li className="contactUsitems">
                <img src={telephone} alt="icon" className="contactUsIcons" />
                <span className="contactUsNumbers">03142654534</span>
              </li>
            </Grow>
            <Grow in={checked} timeout={1000}>
              <li className="contactUsitems">
                <img src={mobile} alt="icon" className="contactUsIcons" />
                <span className="contactUsNumbers">09131311475</span>
              </li>
            </Grow>
            <Grow in={checked} timeout={2000}>
              <li className="contactUsitems">
                <img src={mobile} alt="icon" className="contactUsIcons" />
                <span className="contactUsNumbers">09134361540</span>
              </li>
            </Grow>
            <Grow in={checked} timeout={3000}>
              <li className="contactUsitems">
                <img src={mobile} alt="icon" className="contactUsIcons" />
                <span className="contactUsNumbers">09130219017</span>
              </li>
            </Grow>
            <Grow in={checked} timeout={4000}>
              <li className="contactUsitems">
                <img src={eitaa} alt="icon" className="contactUsIcons" />
                <span className="contactUsNumbers">09134361540</span>
              </li>
            </Grow>
            <Grow in={checked} timeout={4000}>
              <li className="contactUsitems">
                <img src={eitaa} alt="icon" className="contactUsIcons" />
                <span className="contactUsNumbers">09130219017</span>
              </li>
            </Grow>
          </main>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
    <Title>
      تماس با ما
    </Title>
    <HeaderAndFooterColumnStyled>
        <Main />
      </HeaderAndFooterColumnStyled>
    </>
  );
}

export default App;
