import {cosineSimilarityFunc} from './cosenus'; 
export const getKNeighbors = (parsedData, person, nameHeader, entries) => {
  const testArray = []; 
  const currentPersonInData = parsedData.find(name => name[nameHeader]===person);
  const dataToCompare = parsedData.filter(name => name[nameHeader]!==person);
  dataToCompare.forEach(p => {
    const tie = cosineSimilarityFunc([currentPersonInData,p], nameHeader);
    const name = p[nameHeader]; 
    testArray.push({tie, name}); 
  })
  return testArray.sort((a,b) => b.tie-a.tie).splice(0,entries)
  
}