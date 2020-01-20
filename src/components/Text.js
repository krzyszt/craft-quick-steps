import React from "react";
import { Typography } from "@material-ui/core";

const Text = ({text, fontSize}) => {
  return (
      <div>
         <p style={{fontSize}}>{text}</p>
      </div>
  )
}

export default Text;