import React from 'react';
import styles from './index.module.css';
import { Container } from '../container';

type Props = {
  children: React.ReactNode;
  borderRadius?: string | number | undefined
  width?: string | number | undefined;
  height?: string | number | undefined;
};

export const Card: React.FC<Props> = ({ children, borderRadius, width, height }) => {
  return (
    <>
      <div style={{borderRadius, width, height}} className={styles.content}><Container padding="21px">{children}</Container></div>
    </>
  );
};
