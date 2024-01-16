import { get } from "./axios.js";

const getSeller = get("/api//seller");
const getGood = get("/api/goods");
export { getSeller, getGood };
