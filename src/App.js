/* eslint-disable no-unused-vars */
import * as React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./Pages/Home-Page/HomePage.jsx";
import SignInManager from "./Pages/Nav-link-pages/Sign-in/SignInManager.jsx";
import SignInAgents from "./Pages/Nav-link-pages/Sign-in/SignInAgents.jsx";
import SignInCustomer from "./Pages/Nav-link-pages/Sign-in/SignInCustomer.jsx";
import AboutUs from "./Pages/Nav-link-pages/About-us/AboutUs.jsx";
import SignUpCustomer from "./Pages/Nav-link-pages/Sign-up/SignUpCustomer.jsx";
import ContactUs from "./Pages/Nav-link-pages/Contact-us/ContactUs.jsx";
import ManagersPage from "./Pages/Dedicated-Pages/Managers/ManagersPage.jsx";
import AgentsPage from "./Pages/Dedicated-Pages/Agents/AgentsPage.jsx";
import CustomersPage from "./Pages/Dedicated-Pages/Customers/CustomersPage.jsx";
import RealtedSoftwares from "./Pages/Footer-Link-Pages/Related-softwares/RealtedSoftwares.jsx";
import Products from "./Pages/Footer-Link-Pages/Products/Products.jsx";
import RelatedWebsites from "./Pages/Footer-Link-Pages/Related-websites/RelatedWebsites.jsx";
import Articles from "./Pages/Main-Link-Pages/Articles/Articles.jsx";
import Catalogues from "./Pages/Main-Link-Pages/Catalogues/Catalogues.jsx";
import ArticlesDispaly from "./Pages/Main-Link-Pages/Articles/articles-display/ArticlesDispaly.jsx";
import ScrollToTop from "./Componnents/ScrollToTop/ScrollToTop.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route
            path="/sign-up-customer"
            element={<SignUpCustomer></SignUpCustomer>}
          ></Route>
          <Route
            path="/sign-in-managers"
            element={<SignInManager></SignInManager>}
          ></Route>
          <Route
            path="/sign-in-agents"
            element={<SignInAgents></SignInAgents>}
          ></Route>
          <Route
            path="/sign-in-customers"
            element={<SignInCustomer></SignInCustomer>}
          ></Route>
          <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
          <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
          <Route
            path="/managers-page"
            element={<ManagersPage></ManagersPage>}
          ></Route>
          <Route
            path="/Agents-page"
            element={<AgentsPage></AgentsPage>}
          ></Route>
          <Route
            path="/Customers-page"
            element={<CustomersPage></CustomersPage>}
          ></Route>

          <Route
            path="/related-softwares"
            element={<RealtedSoftwares></RealtedSoftwares>}
          ></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route
            path="/related-website"
            element={<RelatedWebsites></RelatedWebsites>}
          ></Route>

          <Route path="/articles" element={<Articles></Articles>}></Route>
          <Route path="/catalogues" element={<Catalogues></Catalogues>}></Route>
          <Route
            path="/articles-display"
            element={<ArticlesDispaly></ArticlesDispaly>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
