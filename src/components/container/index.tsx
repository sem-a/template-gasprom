import React from 'react';

type Props = {
  children: React.ReactNode;
  padding?: string | number | undefined;
  display?: string | undefined;
  alignItems?: string | undefined;
  justifyContent?: string | undefined;
  width?: string | number | undefined;
  height?: string | number | undefined;
};

export const Container: React.FC<Props> = ({
  children,
  padding = '0 105px',
  display = 'block',
  alignItems,
  justifyContent,
  height,
  width,
}) => {
  return (
    <div
      style={{
        padding,
        display,
        alignItems,
        justifyContent,
        height, 
        width,
      }}
    >
      {children}
    </div>
  );
};
