// An image without alt text should be reported by jsx-a11y/alt-text.
export function Logo() {
  return (
    // oxlint-disable-next-line jsx-a11y/alt-text
    <img src="logo.png" />
  );
}
