import React from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import { Editor, Frame, Canvas } from '@craftjs/core';

import { Toolbox } from './components/Toolbox';
import { SettingsPanel } from './components/SettingsPanel';
import { Topbar } from './components/Topbar';
import Container from './components/Container';
import Button from './components/Button';
import { Card, CardTop, CardBottom } from './components/Card';
import Text from './components/Text';

import Dashboard from './components/Dashboard';
import Widget from './components/Widget';

const ListComponents = { Card, Button, Text, Container, CardTop, CardBottom };

export default function App() {
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
      <Editor resolver={ListComponents} >
        <Topbar />
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Grid item xs>
            <Frame>
              <Canvas is={Dashboard} padding={0} background="#eee">

                <Canvas is={Widget}>

                </Canvas>
                <Canvas is={Dashboard}>

                </Canvas>
              </Canvas>
              {/* <Canvas is={Container} padding={5} background="#eee">
                <Card />
                <Button size="small" variant="outlined">Click</Button>
                <Text size="small" text="Hi world!" />
                <Canvas is={Container} padding={6} background="#999">
                  <Text size="small" text="It's me again!" />
                </Canvas>
              </Canvas> */}
            </Frame>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}