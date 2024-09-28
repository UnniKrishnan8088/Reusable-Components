/**
 * @author Unni Krishnan
 *
 * A custom Button component that extends the Material-UI Button.
 * It provides an option to display a loading spinner (CircularProgress)
 * while the button is in a loading state, enhancing the user experience.
 *
 */

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  CircularProgress,
} from "@mui/material";
import { forwardRef } from "react";

type ButtonProps = MuiButtonProps & {
  isLoading?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const { children, isLoading, disabled } = props;
    return (
      <MuiButton disabled={disabled || isLoading} ref={ref} {...props}>
        {isLoading ? (
          <CircularProgress sx={{ color: "white" }} size={20} />
        ) : (
          children
        )}
      </MuiButton>
    );
  }
);
export default Button;
