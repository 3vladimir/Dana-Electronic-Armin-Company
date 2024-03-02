/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { Link } from "react-router-dom";
import { HeaderAndFooterColumnStyled } from "../../../Componnents/Header-And-Footer-column-Styled/HeaderAndFooterColumnStyled";
import "./Articles.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import uuid from "react-uuid";
import Title from "../../../Componnents/Title/Title";
import firstArticle from "../../../articles/first.pdf";
import secondArticle from "../../../articles/second.pdf";
import thirdArticle from "../../../articles/third.pdf";
import fourthArticle from "../../../articles/fourth.pdf";

export const articlesInformations = [
  {
    question: "اتوماسیون چیست",
    answer: [
      {
        title: "مقاله ی اول ",
        link: firstArticle,
        id: uuid(),
      },
      {
        title: "مقاله ی دوم",
        link: secondArticle,
        id: uuid(),
      },
    ],
  },

  {
    question: "گلخانه چیست",
    answer: [
      {
        title: "مقاله ی سوم",
        link: thirdArticle,
        id: uuid(),
      },
      {
        title: "مقاله ی چهارم",
        link: fourthArticle,
        id: uuid(),
      },
    ],
  },
];
function Main() {
  function AccordionDetailsPersonalized({ children }) {
    return (
      <>
        <AccordionDetails>
          <Typography sx={{ "&:hover": { color: "DodgerBlue" } }}>
            <span className="articlesTitles">{children}</span>
          </Typography>
        </AccordionDetails>
      </>
    );
  }

  function AccordionTransition({ question, answer }) {
    const [firstAccordionexpanded, setFirstAccordionExpanded] =
      React.useState(false);

    const handleFirstAccordionExpansion = () => {
      setFirstAccordionExpanded((prevExpanded) => !prevExpanded);
    };

    return (
      <div>
        <Accordion
          expanded={firstAccordionexpanded}
          onChange={handleFirstAccordionExpansion}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 1000 } }}
          sx={{
            "& .MuiAccordion-region": {
              height: firstAccordionexpanded ? "auto" : 0,
            },
            "& .MuiAccordionDetails-root": {
              display: firstAccordionexpanded ? "block" : "none",
              textAlign: "center",
              marginLeft: "30px",
              backgroundColor: "",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ backgroundColor: "" }}
          >
            <Typography sx={{ margin: "0 auto" }}>
              <span className="articlesTitles">{question}</span>
            </Typography>
          </AccordionSummary>
          {[...answer].map((item, index) => (
            <AccordionDetailsPersonalized>
              <Link to={`/articles-display#${item.id}`}>{item.title}</Link>
            </AccordionDetailsPersonalized>
          ))}
        </Accordion>
      </div>
    );
  }
  return (
    <>
      <div className="articlesOuterContainer">
        <main>
          {[...articlesInformations].map((item, inex) => (
            <AccordionTransition
              question={item.question}
              answer={item.answer}
            ></AccordionTransition>
          ))}
        </main>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Title>مقالات</Title>
      <HeaderAndFooterColumnStyled>
        <Main />
      </HeaderAndFooterColumnStyled>
    </>
  );
}

export default App;
