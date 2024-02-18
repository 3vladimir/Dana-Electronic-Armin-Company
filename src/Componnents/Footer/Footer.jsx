/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import "./Footer.scss";
import brandIcon from "../../Images/logo.png";
import eitaa from "../../Images/Icons/eitaa.png";
import telegram from "../../Images/Icons/telegram.jpg";
import whatsApp from "../../Images/Icons/whatsApp.png";
import instagram from "../../Images/Icons/instagram.jpg";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="footerOuterContainer">
        <footer>
          <div className="footerInnerContainer">
            <div className="footerItemsAndLinksDivision">
              <li className="footerColumns footerBrand">
                <div className="footerBrandIcon">
                  <img width={"60%"} src={brandIcon} alt="brandicon" />
                </div>
                <br />
                <span className="footerBramdName footerItemsTitles">
                  دانا الکترونیک آرمین
                </span>
                <p
                  style={{ padding: "0" }}
                  className="footerItems footerBrandText"
                >
                  شرکت دانا الکترونیک آرمین،تولید کننده ی تخصصی اتوماسیون و
                  هوشمند سازی گلخانه،سردخانه،پرورش ماهی،مزارع و... می باشد
                </p>
              </li>
              <li className="footerColumns footerWithUs">
                <ul>
                  <li className="footerItems footerItemsTitles">همراه با ما</li>
                  <li className="footerItems footerLinks">
                    <Link to={"/products"}>محصولات</Link>
                  </li>
                  <li className="footerItems footerLinks">
                    <Link to={"/related-website"}>وبسایت های مرتبط</Link>
                  </li>
                  <li className="footerItems footerLinks">
                    <Link to={"/related-softwares"}>نرم افزار های مرتبط</Link>
                  </li>
                </ul>
              </li>
              <li className="footerColumns footerContactUs">
                <ul className="footerContactList">
                  <li className="footerItems footerItemsTitles">
                    ارتباط با ما
                  </li>
                  <li className="footerItems">
                    آدرس : اصفهان،نجف آباد،خیابان 15 خرداد جنوبی جنب چهار راه
                    <br />
                    <br />
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1038.742842308744!2d51.35278179130304!3d32.627308468019635!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbdd5d0acafb293%3A0xff56294aead7140c!2z2LTYsdqp2Kog2K_Yp9mG2Kcg2KfZhNqp2KrYsdmI2YbbjNqpINii2LHZhduM2YY!5e0!3m2!1sen!2sus!4v1707749868599!5m2!1sen!2sus"
                      width="600"
                      height="450"
                      style={{ width: "15em", height: "10em" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </li>
                  <li className="footerItems">
                    <div className="footerContactListItemsPhone">
                      تلفن :
                      <div style={{ textAlign: "left" }}>
                        03142654534
                        <br />
                        09134361540
                      </div>
                    </div>
                    <li className="footerItems">
                      <div className="footerContactListItemsemail">
                        ایمیل :
                        <div className="f" style={{ textAlign: "left" }}>
                          Deaarminelectronics@gmail.com
                        </div>
                      </div>
                    </li>
                  </li>
                </ul>
              </li>
              <li className="footerColumns socialNetworks">
                <ul>
                  <li className="footerItems footerItemsTitles">
                    شبکه های اجتماعی
                  </li>
                  <li className="footerItems footerSocialNetworks">
                    تلگرام
                    <Link to={"http://t.me/Emh96"}>
                      <img
                        className="footerIcons"
                        style={{ clipPath: "circle(50% at 50% 50%)" }}
                        src={telegram}
                        alt="telegram"
                      />
                    </Link>
                  </li>
                  <li className="footerItems footerSocialNetworks">
                    واتساپ
                    <Link to={""}>
                      <img
                        className="footerIcons"
                        style={{ clipPath: "circle(50% at 50% 50%)" }}
                        src={whatsApp}
                        alt="whatsApp"
                      />
                    </Link>
                  </li>
                  <li className="footerItems footerSocialNetworks">
                    ایتا
                    <Link to={""}>
                      <img className="footerIcons" src={eitaa} alt="eitaa" />
                    </Link>
                  </li>
                  <li className="footerItems footerSocialNetworks">
                    اینستاگرام
                    <Link
                      to={
                        "https://www.instagram.com/dana_electronicarmin?igsh=b2EyeDR4NzZ0ZDVo"
                      }
                    >
                      <img
                        className="footerIcons"
                        style={{
                          clipPath:
                            "polygon(15% 0, 86% 0, 100% 17%, 100% 84%, 84% 100%, 17% 100%, 0 82%, 0 15%)",
                        }}
                        src={instagram}
                        alt="instagram"
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </div>
            <div className="footerDivider"></div>
            <div className="footerRightsManifest">
              تمامی حقوق این وبسایت متعلق به شرکت دانا الکترونیک آرمین میباشد.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
