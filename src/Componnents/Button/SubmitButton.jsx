import { Button } from "@mui/material";
import "../../style/formItems.scss";

export default function SubmitButton({ content, ...props }) {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{ width: "100%", fontSize: "large", fontWeight: "700" }}
      {...props}
    >
      <span className="formSubmitButtonText">{content}</span>
    </Button>
  );
}
