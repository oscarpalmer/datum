// src/constants.ts
var maximumTime = 1e8 * 24 * 60 * 60 * 1000;
var minimumTime = -maximumTime;
// src/is.ts
function isDate(value) {
  return value instanceof Date;
}
function isDateOrTimestamp(value) {
  return isDate(value) || isTimestamp(value);
}
function isTimestamp(value) {
  return typeof value === "number" && value >= minimumTime && value <= maximumTime;
}
// src/value.ts
function getDate(value) {
  if (value instanceof Date) {
    return value;
  }
  if (typeof value === "number" && value >= minimumTime && value <= maximumTime) {
    return new Date(value);
  }
}
export {
  minimumTime,
  maximumTime,
  isTimestamp,
  isDateOrTimestamp,
  isDate,
  getDate
};
