import React  from "react";
import {Button as MaterialButton} from "@material-ui/core";

const Button = ({size, variant, primary, children}) => {
  return (
    <MaterialButton size={size} variant={variant} color={primary}>
      {children}
    </MaterialButton>
  )
}

export default Button;