import { useNumberFormat } from "./number";


Number.prototype.numberFormat = function () {
  return useNumberFormat(this.valueOf());
};
