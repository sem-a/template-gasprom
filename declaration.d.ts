declare module '*.module.css' {
  const styles: { [key: string]: string };
  export default styles;
}
declare module '*.css' {
  const styles: { [key: string]: string };
  export default styles;
}
declare module 'react-slick';
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}