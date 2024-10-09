import React from 'react';
import { Text } from '@consta/uikit/Text';

type Props = {
  children: React.ReactNode;
  textAlign?: 'left' | 'center' | 'right' | undefined;
  fontSize?: string | number | undefined;
  fontWeight?: string | number | undefined;
  lineHeight?: string | number | undefined;
  color?: string;
};

export const CustomText: React.FC<Props> = ({
  children,
  textAlign = 'left',
  fontSize = '16px',
  fontWeight = '400',
  lineHeight = '24px',
  color = 'rgba(102, 121, 133, 1)',
}) => {
  return (
    <p
      className="text"
      style={{ textAlign, fontSize, fontWeight, lineHeight, color}}
    >
      {children}
    </p>
  );
};
