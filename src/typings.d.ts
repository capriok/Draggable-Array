/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

interface props {
  // children?: React.ReactNode
  // items: itemObj[],
  // images?: boolean
}
