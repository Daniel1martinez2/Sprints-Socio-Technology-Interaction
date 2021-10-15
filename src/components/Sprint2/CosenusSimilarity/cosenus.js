import {dotProduct} from '../CosenusSimilarity/dotProduct'; 
import { getMagnitude } from '../CosenusSimilarity/magnitude';

export const getSimilarity = ({dot, magnitudeA, magnitudeB}) => {
  const similarity = dot / (magnitudeA* magnitudeB);
  return similarity; 
}

export const cosineSimilarityFunc = (dataArray) => {
  const currentDotProduct = dotProduct(dataArray); 
  const magnitudeA = getMagnitude(dataArray[0]); 
  const magnitudeB = getMagnitude(dataArray[1]); 
  return getSimilarity({dot: currentDotProduct,magnitudeA, magnitudeB });
}