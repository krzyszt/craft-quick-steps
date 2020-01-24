import React, { useState, useEffect } from "react";
import { FormControl, FormLabel, Slider } from "@material-ui/core";
import { useNode } from '@craftjs/core';
import ContentEditable from 'react-contenteditable';

const Text = ({ text, fontSize, textAlign }) => {
  const { connectors: { connect, drag }, setProp, selected, dragged } = useNode(state => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !selected && setEditable(false)
  }, [selected]);

  const handleChange = e =>
    setProp(props =>
      props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
    );

  return (
    <div
      ref={ref => connect(drag(ref))}
      onClick={e => setEditable(true)}
    >
      <ContentEditable
        disabled={!editable}
        html={text}
        onChange={handleChange}
        tagName="p"
        style={{ fontSize: `${fontSize}px`, textAlign }}
      />
      {
        selected && (
          <FormControl className="text-additional-settings" size="small">
            <FormLabel component="legend">Font size</FormLabel>
            <Slider
              defaultValue={fontSize}
              step={1}
              min={7}
              max={50}
              valueLabelDisplay="auto"
              onChange={(_, value) => {
                setProp(props => props.fontSize = value)
              }}
            />
          </FormControl>
        )
      }
    </div>
  )
}

Text.craft = {
  rules: {
    canDrag: node => node.data.props.text !== 'Drag',
  }
}

export { Text as default, Text };