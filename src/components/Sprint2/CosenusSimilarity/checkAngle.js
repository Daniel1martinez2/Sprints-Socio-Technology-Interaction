import {getMagnitude} from './magnitude'; 
const ridOfHeader = (item) => {
  return Object.values(item).splice(1);
}
export const checkAngle = ([rowA, rowB]) => {
  const rowAConverted = ridOfHeader(rowA);
  const rowBConverted = ridOfHeader(rowB);
  const rowAMax = Math.max(...rowAConverted); 
  const rowBMax = Math.max(...rowBConverted); 
  const rowANormalized = rowAConverted.map(item => item / rowAMax); 
  const rowBNormalized = rowBConverted.map(item => item / rowBMax); 
  let final = 0; 
  rowANormalized.forEach((item,i) => {
    final =+ (item - rowBNormalized[i]); 
  });   
  return final === 0? true : false;
}; 
export const fixedSim = ([rowA, rowB]) => {
  const a = getMagnitude(rowA); 
  const b = getMagnitude(rowB); 
  return a === b ? 1 : (Math.abs(a - b) / Math.max(a, b)); 
}