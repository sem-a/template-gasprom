import { useEffect, useState } from 'react';
import { ReactECharts } from '../../Echarts/ReactECharts';
import { mockData, MockDataType } from '../../data/data';
import { selectOption, SelectOption } from './selectOptionData';
import { Select } from '../select';
import { Layout } from '@consta/uikit/Layout';

import styles from './index.module.css';
import { CustomText } from '../text';

export const EChartsItem = () => {
  // Состояние для хранения выбранной валюты
  const [currency, setCurrency] = useState<SelectOption>(selectOption[0]);

  const optionTemp = {
    title: {
      text: `${currency.id}, ${currency.name}/₽`, // отображаем id и имя валюты
    },
    tooltip: {
      trigger: 'axis', // тип триггера для подсказки
    },
    xAxis: {
      type: 'category', // тип оси - категория
      boundaryGap: false, // отображаем границы оси
      axisLine: {
        show: false, // убрать горизонтальные линии оси
      },
      axisLabel: {
        margin: 25, // отступ для меток оси
      },
      axisTick: {
        show: false, // убрать метки оси
      },
      // данные для оси X
      data: mockData
        .filter((item: MockDataType) => item.indicator === currency.id)
        .map((item) => item.month),
    },
    yAxis: {
      type: 'value', // тип оси - значение
      fontSize: '16px', // размер шрифта для меток оси
      min: Math.min.apply(
        null,
        mockData
          .filter((item) => item.indicator === currency.id)
          .map((item) => item.value)
      ) - 3, // минимальное значение для оси Y
      splitLine: {
        lineStyle: {
          type: 'dashed', // тип линии для разделения оси Y
        },
      },
    },
    series: [
      {
        name: currency.id, // имя серии - id валюты
        type: 'line', // тип серии - линия
        stack: 'Total', // стэк для серии
        data: mockData.filter((item: MockDataType) => item.indicator === currency.id),
        itemStyle: {
          color: 'rgba(243, 139, 0, 1)', // цвет для серии
        },
        lineStyle: {
          width: 2, // ширина линии
          cap: 'round', // тип конца линии
        },
        symbol: 'none', // тип маркера для серии
      },
    ],
  };

  const [option, setOption] = useState<any>({}); // Состояние для хранения опций графика
  const [average, setAverage] = useState<number>(0);  // Состояние для хранения среднего значения

  // Функция для обработки выбора валюты
  const handleSelect = (item: SelectOption) => {
    setCurrency(item);
  };

  // Эффект для обновления опций графика и расчета среднего значения
  useEffect(() => {
    setOption(optionTemp);
    const calcAverage = () => {
      const arrValue = mockData
        .filter((item: MockDataType) => item.indicator === currency.id)
        .map((item) => item.value);
      const average = arrValue.reduce((acc, current) => acc + current, 0) / arrValue.length;
      setAverage(average);
    };
    calcAverage();
  }, [currency]);


  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
        <Select
          option={selectOption}
          currency={currency}
          onSelect={handleSelect}
        />
      </div>
      <Layout style={{height: '375px'}}>
        <Layout flex={7}>
        <ReactECharts option={option} />
        </Layout>
        <Layout flex={1}>
        <div className={styles.average}>
          <div>
            <CustomText textAlign="center" fontWeight="200">
              Среднее за период
            </CustomText>
            <CustomText
              fontSize="48px"
              lineHeight="72px"
              textAlign="center"
              color="rgba(243, 139, 0, 1)"
            >
              {average.toFixed(1)}
              <span className={styles.span}>₽</span>
            </CustomText>
          </div>
        </div>
        </Layout>
      </Layout>
      {/* <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '375px',
        }}
      >
        <ReactECharts option={option} />
        <div className={styles.average}>
          <CustomText textAlign="center" fontWeight="200">
            Среднее за период
          </CustomText>
          <CustomText
            fontSize="48px"
            lineHeight="72px"
            textAlign="center"
            color="rgba(243, 139, 0, 1)"
          >
            {average.toFixed(1)}
            <span className={styles.span}>₽</span>
          </CustomText>
        </div>
      </div> */}
    </div>
  );
};
