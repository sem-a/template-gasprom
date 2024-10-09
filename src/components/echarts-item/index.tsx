import React, { useState } from 'react';
import { Container } from '../container';
import { ReactECharts } from '../../Echarts/ReactECharts';
import { mockData } from '../../data/data';
import { selectOption } from './selectOptionData';
import { option } from './optionReactECharts';
import { Select } from '../select';
import styles from './index.module.css';

export const EChartsItem = () => {
  const [currency, setCurrency] = useState<string | null>(selectOption[0].id);

  const handleSelect = (id: string | null) => {
    setCurrency(id)
    //console.log(`Валюта: ${currency}`)
  };

  return (
    <>
      <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
        <Select option={selectOption} onSelect={handleSelect} />
        {/* <ReactECharts /> */}
      </div>
    </>
  );
};
