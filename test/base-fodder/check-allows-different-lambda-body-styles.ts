// We should be able to have a simple inline lambda
const trulyInline = (value: number): number => value;

// Or one with a block, even if it's only a return
const withBlock = (value: number): number => {
  return value;
};

export { trulyInline, withBlock };
