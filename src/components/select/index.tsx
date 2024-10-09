import React, { useEffect, useState } from 'react';
import { SelectOption } from '../echarts-item/selectOptionData';
import styles from './index.module.css';

type Props = {
  option: SelectOption[];
  onSelect: (valuta: SelectOption) => void;
  currency: SelectOption;
};

export const Select: React.FC<Props> = ({ option, currency, onSelect }) => {
  const [activeOption, setActiveOption] = useState<SelectOption>(currency);

  const handleClick = (item: SelectOption) => {
    setActiveOption(item);
    onSelect(item);
  };

  return (
    <>
      <div className={styles.content}>
        {option.map((item) => {
          const isActive = item.id === activeOption.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                handleClick(item);
              }}
              className={isActive ? styles.active : ''}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </>
  );
};
