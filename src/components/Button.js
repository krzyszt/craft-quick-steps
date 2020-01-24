import React from "react";
import { Button as MaterialButton } from "@material-ui/core";
import { useNode } from '@craftjs/core';

const Button = ({ size, variant, primary, children }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <MaterialButton ref={ref => connect(drag(ref))} size={size} variant={variant} color={primary}>
      {children}
    </MaterialButton>
  )
}

export { Button as default, Button };