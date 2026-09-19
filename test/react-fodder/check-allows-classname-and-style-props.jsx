// `react/forbid-component-props` is off, so we may pass `className` and `style`
// to our own components.
function Panel({ className, style, children }) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

export function App() {
  return (
    <Panel className="panel" style={{ color: "red" }}>
      <span>Hello</span>
    </Panel>
  );
}
