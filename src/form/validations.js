/* eslint-disable import/prefer-default-export */
const required = (value) =>
  value || typeof value === "number" ? undefined : "Required";

export { required };
