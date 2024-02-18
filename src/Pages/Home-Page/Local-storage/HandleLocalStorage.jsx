/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import uuid from "react-uuid";

function handleLocalStoarege() {
  const customersPersonalInformationsDatabse = [
    {
      firstName: "متین",
      lastName: "بهجتی",
      phoneNumber: "09132345678",
      city: "ویلاشهر",
      username: "matin",
      password: "1234",
      workDomain: "منزل",
      externalDescriptions: "چوم",
      id: uuid(),
    },
    {
      firstName: "علی",
      lastName: "امیرکاوه",
      phoneNumber: "09371212094",
      city: "نجف آباد",
      username: "ali",
      password: "1234",
      workDomain: "گلخانه",
      externalDescriptions: "هیچی",
      id: uuid(),
    },
  ];

  if (!window.localStorage.getItem("customersPersonalInformationsDatabse")) {
    window.localStorage.setItem(
      "customersPersonalInformationsDatabse",
      JSON.stringify(customersPersonalInformationsDatabse)
    );
  }

  const managersInformationsDatabase = [
    { firstName: "عماد", lastName: "حججی", username: "emad", password: "1234" },
    { firstName: "امین", lastName: "حججی", username: "amin", password: "1234" },
  ];
  window.localStorage.setItem(
    "managersInformationsDatabase",
    JSON.stringify(managersInformationsDatabase)
  );

  const agentsInformationsDatabase = [
    {
      firstName: "مهدی",
      lastName: "جاری",
      username: "mehdi",
      password: "1234",
    },
    { firstName: "رضا", lastName: "جاری", username: "reza", password: "1234" },
  ];
  window.localStorage.setItem(
    "agentsInformationsDatabase",
    JSON.stringify(agentsInformationsDatabase)
  );
}

export { handleLocalStoarege };
