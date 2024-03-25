const USDformatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const curr = (val) => USDformatter.format(val);

export { curr };
