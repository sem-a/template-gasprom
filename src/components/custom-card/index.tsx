import React from 'react';
import styles from './index.module.css';
import { Container } from '../container';

type Props = {
  children: React.ReactNode;
  borderRadius?: string | number | undefined
};

export const Card: React.FC<Props> = ({ children, borderRadius }) => {
  return (
    <>
      <div style={{borderRadius, }} className={styles.content}><Container padding="21px">{children}</Container></div>
    </>
  );
};
