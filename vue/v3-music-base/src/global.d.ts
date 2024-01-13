declare global {
  interface Number {
    numberFormat: () => string | number;
  }
}
