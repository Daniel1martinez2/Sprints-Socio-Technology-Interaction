export const getMagnitude = (current) => {
  const total = Object.values(current).splice(1);
  const reducer = (previousValue, currentValue) => previousValue + Math.pow(currentValue, 2);
  const reducedValue = total.reduce(reducer, 0);
  return Math.sqrt(reducedValue);
}