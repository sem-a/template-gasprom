import React, { useEffect, useState } from 'react';
import { Container } from '../container';
import { ReactECharts } from '../../Echarts/ReactECharts';
import { mockData } from '../../data/data';
import { selectOption } from './selectOptionData';
import { option } from './optionReactECharts';
import { Select } from '../select';
import styles from './index.module.css';

export const EChartsItem = () => {
  const [currency, setCurrency] = useState<string>(selectOption[0].id);

  const handleSelect = (id: string) => {
    setCurrency(id)
  };

  useEffect(() => {
    console.log(currency, 'валюта')
  }, [currency])

  return (
    <>
      <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
        <Select option={selectOption} currency={currency} onSelect={handleSelect} />
        {/* <ReactECharts /> */}
      </div>
    </>
  );
};
