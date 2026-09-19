// `react/jsx-props-no-spreading` still reports spreading props onto a full React component.
function Inner({ label }) {
  return <span>{label}</span>;
}

export function Outer(props) {
  return (
    // oxlint-disable-next-line react/jsx-props-no-spreading
    <Inner {...props} />
  );
}
