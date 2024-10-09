import React, { useEffect, useState } from 'react';
import styles from './index.module.css';

type Props = {
  option: {
    id: string;
    name: string;
  }[];
  onSelect: (valuta: string) => void;
  currency: string;
};

export const Select: React.FC<Props> = ({ option, currency, onSelect }) => {
  const [activeOption, setActiveOption] = useState<string>(currency);

  const handleClick = (id: string) => {
    setActiveOption(id);
    onSelect(id);
  };

  useEffect(() => {
    console.log(activeOption)
  }, [activeOption])

  return (
    <>
      <div className={styles.content}>
        {option.map((item) => {
          const isActive = item.id === activeOption;
          return (
            <button
              key={item.id}
              onClick={() => {
                handleClick(item.id);
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
