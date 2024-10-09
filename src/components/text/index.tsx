import React from 'react';
import { Text } from '@consta/uikit/Text';

type Props = {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right' | undefined;
};

export const CustomText: React.FC<Props> = ({ children, align = 'left' }) => {
  return (
    <Text weight="regular" font="primary" align={align}>
      {children}
    </Text>
  );
};
