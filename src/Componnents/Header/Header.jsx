/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import "./Header.scss";
import { Menu } from "./Menu/HeaderMenu";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import brandIcon from "../../Images/logo.png";


function Title() {
  return (
    <>
      <div className="title">
        <img src={brandIcon} alt="brandIcon" width={"13%"}  />
        <h2 className="titleText">شرکت دانا الکترونیک آرمین
        </h2>
      </div>
    </>
  );
}

function Nav() {
  const [singInItemState, setSingInItemState] = React.useState(false);
  function handleOpenSingInItemState() {
    setSingInItemState(true);
  }
  function handleCloseSingInItemState() {
    setSingInItemState(false);
  }

  const initialUserStatus = {
    name: "unknown",
    status: "مهمان",
  };  

  if (!window.localStorage.getItem("userStatus")) {
    window.localStorage.setItem(
      "userStatus",
      JSON.stringify(initialUserStatus)
    );
  }

  let userStatus = window.localStorage.getItem("userStatus");
  userStatus = JSON.parse(userStatus);

  function UserIsSignedIn() {
    let pannelAddress = "";
    switch (userStatus.status) {
      case "نماینده":
        pannelAddress = "/Agents-page";
        break;
      case "مشتری":
        pannelAddress = "/Customers-page";
        break;
      case "مدیر":
        pannelAddress = "/managers-page";
        break;
      default:
    }

    function handleClickSignOut() {
      window.localStorage.setItem(
        "userStatus",
        JSON.stringify(initialUserStatus)
      );
      location.assign("/");
    }

    return (
      <>
        <Link to={pannelAddress}>
          <li className="navListItems">پنل کاربری</li>
        </Link>
        <li className="navListItems">
          <FaUser style={{ color: "lightGray" }} /> {userStatus.name}
        </li>
        <li onClick={handleClickSignOut} className="navListItems">
          خروج از حساب کاربری
        </li>
      </>
    );
  }

  function UserIsnotSignedIn() {
    return (
      <>
        <li
          className="navListItems"
          onMouseOver={handleOpenSingInItemState}
          onMouseOut={handleCloseSingInItemState}
        >
          ورود به پنل کاربری
          {singInItemState ? (
            <Menu
              listItems={[
                <Link to={"/sign-in-customers"}>ورود مشتریان</Link>,
                <Link to={"/sign-in-agents"}>ورود نمایندگان</Link>,
                <Link to={"/sign-in-managers"}>ورود مدیران</Link>,
              ]}
            />
          ) : null}
        </li>
        <li className="navListItems">
          <Link to={"/sign-up-customer"}>ثبت نام</Link>
        </li>
      </>
    );
  }

  return (
    <>
      <nav className="nav">
        <ul className="navList">
          <li className="navListItems">
            <Link to={"/"}>صفحه اصلی</Link>
          </li>

          <li className="navListItems">
            <Link to={"/about-us"}>درباره ما</Link>
          </li>
          <li className="navListItems">
            <Link to={"/contact-us"}>تماس با ما</Link>
          </li>
          {userStatus.status === "مهمان" ? (
            <UserIsnotSignedIn />
          ) : (
            <UserIsSignedIn />
          )}
        </ul>
      </nav>
    </>
  );
}

function App() {
  return (
    <>
      <div className="headerOuterContainer">
        <header>
          <div className="headerInnerContainer">
            <Title />
            <Nav />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
