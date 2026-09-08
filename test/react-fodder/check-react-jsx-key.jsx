// A list rendered without keys should be reported by react/jsx-key.
const items = ["alpha", "beta"];

// oxlint-disable-next-line react/jsx-key
const listItems = items.map((item) => <li>{item}</li>);

export function List() {
  return <ul>{listItems}</ul>;
}
