/* eslint-disable no-unused-vars */
import * as React from "react";

export const SnackbarContext = React.createContext();

export function SnackbarContextProvider(props) {
  const [snackbarState, setSnackbarState] = React.useState(false);
  function handleSnackbarStateOpen() {
    setSnackbarState(true);
  }
  function handleSnackbarStateClose() {
    setSnackbarState(false);
  }
  return (
    <SnackbarContext.Provider
      value={[
        snackbarState,
        setSnackbarState,
        handleSnackbarStateOpen,
        handleSnackbarStateClose,
      ]}
      {...props}
    ></SnackbarContext.Provider>
  );
}
