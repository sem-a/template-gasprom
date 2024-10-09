import React, { useState } from 'react';
import styles from './index.module.css';

type Props = {
  option: {
    id: string;
    name: string;
  }[];
  onSelect: (valuta: string | null) => void;
};

export const Select: React.FC<Props> = ({ option, onSelect }) => {
  const [activeOption, setActiveOption] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveOption(id);
    //console.log(activeOption);
    // onSelect(activeOption);
  };

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
