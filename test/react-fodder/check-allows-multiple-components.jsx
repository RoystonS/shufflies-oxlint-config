// Multiple components per file are allowed because react/no-multi-comp is off.
function First() {
  return <span>One</span>;
}

function Second() {
  return <span>Two</span>;
}

export { First, Second };
