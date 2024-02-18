/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { articlesInformations } from "../Articles";

function App() {
  let currntArticle = "";
  const articleID = location.hash.substring(1);
  for (let i = 0; i < articlesInformations.length; i++) {
    for (let j = 0; j < articlesInformations[i].answer.length; j++) {
      if (articlesInformations[i].answer[j].id === articleID) {
        currntArticle = articlesInformations[i].answer[j].link;
      }
    }
  }
  function nextPage() {
    if (currntArticle) {
      location.assign("/articles");
    } else {
      location.assign("/");
    }
  }
  async function loadPDF() {
    await window.open(currntArticle, "_blank");
    nextPage();
  }
  loadPDF();

  return <></>;
}

export default App;
