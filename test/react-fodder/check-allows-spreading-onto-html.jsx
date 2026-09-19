// `react/jsx-props-no-spreading` ignores HTML elements, so spreading props onto one
// is allowed.
export function Button({ label, ...rest }) {
  return (
    <button type="button" {...rest}>
      {label}
    </button>
  );
}
