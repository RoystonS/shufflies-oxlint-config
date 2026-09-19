// `react/only-export-components` is off, so a module may export both components
// and non-components.
export const defaultTitle = "Hello";

export function Title() {
  return <h1>{defaultTitle}</h1>;
}
