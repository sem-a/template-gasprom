import { Container } from './components/container';
import { Card } from './components/custom-card';
import { EChartsItem } from './components/echarts-item';

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
        <Card height="400px" width="100%" borderRadius="7px">
          <EChartsItem />
        </Card>
      </Container>
    </div>
  );
}

export default App;
