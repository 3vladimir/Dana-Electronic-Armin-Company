/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { SnackbarContext} from "../../Contexts/ContextForSnackbar";

function SnackBarForEnglishTyping() {
  const [
    snackbarState,
    setSnackbarState,
    handleSnackbarStateOpen,
    handleSnackbarStateClose,
  ] = React.useContext(SnackbarContext);
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarState}
        onClose={handleSnackbarStateOpen}
        key={"top-center"}
      >
        <Alert
          severity="warning"
          onClose={handleSnackbarStateClose}
          sx={{ direction: "ltr", fontFamily: "inherit" }}
        >
          <spa className="formAlertText">
            صفحه کلید را به حالت فارسی تغییر دهید
          </spa>
        </Alert>
      </Snackbar>
    </>
  );
}

export default SnackBarForEnglishTyping;
