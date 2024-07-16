/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { HeaderAndFooterColumnStyled } from "../../../Components/Header-And-Footer-column-Styled/HeaderAndFooterColumnStyled";
import "./contactUs.scss";
import telephone from "../../../Images/Icons/telephone.jpg";
import mobile from "../../../Images/Icons/mobile.png";
import eitaa from "../../../Images/Icons/eitaa.png";
import Grow from "@mui/material/Grow";
import Title from "../../../Components/Title/Title";

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
            <div className="leftAndRightPartItemsParent">
              <div className="sideOfItems">
                <Grow in={checked} timeout={1000}>
                  <div>
                    <h3>تلفن ثابت</h3>
                    <li className="contactUsitems">
                      <img
                        src={telephone}
                        alt="icon"
                        className="contactUsIcons"
                      />
                      <span className="contactUsNumbers">03142654534</span>
                    </li>
                  </div>
                </Grow>
                <Grow in={checked} timeout={4000}>
                  <div>
                    <h3>تلفن همراه</h3>
                    <li className="contactUsitems">
                      <img src={mobile} alt="icon" className="contactUsIcons" />
                      <span className="contactUsNumbers">09131311475</span>
                    </li>
                    <li className="contactUsitems">
                      <img src={mobile} alt="icon" className="contactUsIcons" />
                      <span className="contactUsNumbers">09134361540</span>
                    </li>
                    <li className="contactUsitems">
                      <img src={mobile} alt="icon" className="contactUsIcons" />
                      <span className="contactUsNumbers">09130219017</span>
                    </li>
                  </div>
                </Grow>
                <Grow in={checked} timeout={6000}>
                  <div>
                    <h3>ایتا</h3>
                    <li className="contactUsitems">
                      <img src={eitaa} alt="icon" className="contactUsIcons" />
                      <span className="contactUsNumbers">09134361540</span>
                    </li>
                    <li className="contactUsitems">
                      <img src={eitaa} alt="icon" className="contactUsIcons" />
                      <span className="contactUsNumbers">09130219017</span>
                    </li>
                  </div>
                </Grow>
              </div>

              <div className="sideOfItems">
                <Grow in={checked} timeout={2000}>
                  <div>
                    <h3>آدرس</h3>
                    <div>
                      اصفهان،نجف آباد،خیابان 15 خرداد جنوبی جنب چهار راه
                    </div>
                    <br />
                    <div>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1038.742842308744!2d51.35278179130304!3d32.627308468019635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbdd5d0acafb293%3A0xff56294aead7140c!2z2LTYsdqp2Kog2K_Yp9mG2Kcg2KfZhNqp2KrYsdmI2YbbjNqpINii2LHZhduM2YY!5e0!3m2!1sen!2sus!4v1707749868599!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        style={{ width: "15em", height: "10em" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </Grow>
              </div>
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
      <Title>تماس با ما</Title>
      <HeaderAndFooterColumnStyled>
        <Main />
      </HeaderAndFooterColumnStyled>
    </>
  );
}

export default App;
