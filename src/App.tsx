import React from 'react';
import { Container } from './components/container';
import { Card } from './components/custom-card';
import { CustomText } from './components/text';
import { EChartsItem } from './components/echarts-item';
import { ReactECharts } from './Echarts/ReactECharts';

function App() {
  return (
    <div>
      <Container
        width="100vw"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Card borderRadius="7px">
          <EChartsItem />
        </Card>
      </Container>
    </div>
  );
}

export default App;
