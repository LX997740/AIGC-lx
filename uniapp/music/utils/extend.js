import { useNumberFormat } from "./useNumberFormat.js";


Number.prototype.numberFormat = function () {
  return useNumberFormat(this.valueOf());
};
