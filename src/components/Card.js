import React from "react";
import { useNode, Canvas } from '@craftjs/core';

import Text from "./Text";
import Button from "./Button";
import Container from "./Container";

export const CardTop = ({ children }) => {
  const { connectors: { connect } } = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  )
}

CardTop.craft = {
  rules: {
    canMoveIn: (incomingNode) => incomingNode.data.type === Text,
  }
}

export const CardBottom = ({ children }) => {
  const { connectors: { connect } } = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  )
}

CardBottom.craft = {
  rules: {
    canMoveIn: (incomingNode) => incomingNode.data.type === Button,
  }
}


export const Card = ({ background, padding = 20 }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <Container ref={ref => connect(drag(ref))} background={background} padding={padding}>
      <Canvas id="text" is={CardTop}>
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Canvas>
      <Canvas id="buttons" is={CardBottom}>
        <Button size="small" variant="contained" color="primary">
          Learn More
        </Button>
      </Canvas>
    </Container>
  )
}