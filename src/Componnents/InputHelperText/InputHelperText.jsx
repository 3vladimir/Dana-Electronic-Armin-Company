import * as React from "react";
import FormHelperText from "@mui/material/FormHelperText";

export default function InputHelperText({ children = "خطا", ...props }) {
    return (
      <FormHelperText
        sx={{
          textAlign: "center",
          color: "red",
          fontSize: "1em",
        }}
        {...props}
      >
        <span className="formAlertText">{children}</span>
      </FormHelperText>
    );
  }
