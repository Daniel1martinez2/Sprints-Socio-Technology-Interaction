import {dotProduct} from '../CosenusSimilarity/dotProduct'; 
import { getMagnitude } from '../CosenusSimilarity/magnitude';
import {checkAngle, fixedSim} from '../CosenusSimilarity/checkAngle'; 

export const getSimilarity = ({dot, magnitudeA, magnitudeB}) => {
  const similarity = dot / (magnitudeA* magnitudeB);
  return similarity; 
}

export const cosineSimilarityFunc = (dataArray, firstColumnName) => {
  const currentDotProduct = dotProduct(dataArray, firstColumnName); 
  const magnitudeA = getMagnitude(dataArray[0]); 
  const magnitudeB = getMagnitude(dataArray[1]); 
  if(checkAngle(dataArray)){
    return fixedSim(dataArray)* 100; 
  }else{
    return getSimilarity({dot: currentDotProduct,magnitudeA, magnitudeB })* 100; 
  }
}