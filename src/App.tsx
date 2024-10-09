import React, { useState, useEffect } from 'react';
import { Container } from './components/container';
import { Card } from './components/custom-card';
import { CustomText } from './components/text';
import { EChartsItem } from './components/echarts-item';
import { ReactECharts } from './Echarts/ReactECharts';
import { Loader } from '@consta/uikit/Loader';

function App() {
  const [loading, setLoading] = useState(false); // создаем состояние loading

  // useEffect(() => {
  //   // здесь можно добавить логику для загрузки данных или инициализации компонента
  //   setTimeout(() => {
  //     setLoading(false); // после загрузки страницы, меняем состояние loading на false
  //   }, 2000); // примерное время загрузки страницы
  // }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Loader size="m" />
        </div> // отображаем компонент Loader, пока страница загружается
      ) : (
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
      )}
    </div>
  );
}

export default App;
