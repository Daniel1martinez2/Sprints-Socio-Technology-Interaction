import React, {useState} from 'react'; 
import NamesInput from './NamesInput'; 
import {cosineSimilarityFunc} from './CosenusSimilarity/cosenus'; 
import { checkAngle} from './CosenusSimilarity/checkAngle'; 


const Sprint2 = ({data}) => {
  const firstColumnName = data.headers[0]; 
  const names = data.parsedData.map(name => name[firstColumnName]); 
  const [inputValues, setInputValues] = useState({input1:names[0], input2:names[0]}); 
  const [isFixed, setIsFixed] = useState(false); 
  const [similarityPercentage, setSimilarityPercentage] = useState(0); 
  
  const onSetInput1 = (value) => {
    setInputValues(prev => ({...prev, input1: value}));
  };  
  const onSetInput2 = (value) => {
    setInputValues(prev => ({...prev, input2: value})); 
  }; 

  const handleButtonClick = () => {
    setIsFixed(false); 
    const dataArray = data.parsedData.filter(name => name[firstColumnName]===inputValues.input1 || name[firstColumnName]===inputValues.input2);
    if (dataArray.length === 1){
      setSimilarityPercentage(100); 
      return; 
    }

    if(checkAngle(dataArray)){
      // setSimilarityPercentage(fixedSim(dataArray)); 
      setIsFixed(true); 
      // return; 
    }; 
    const similarityConstant = cosineSimilarityFunc(dataArray, firstColumnName); 
    setSimilarityPercentage(similarityConstant); 
  }
  return(
    <div className="sprint sprint2">
      <h2>Sprint 2</h2>
      <div className="sprint2__info">
        <div className="sprint2__actions">
          <NamesInput names={names} onSetValue={onSetInput2}/>
          <NamesInput names={names} onSetValue={onSetInput1}/>
          <button onClick={handleButtonClick}>Submit</button>
        </div>
        <div className="sprint2__result">
          <h1 className="important">{similarityPercentage.toFixed(1)}%</h1>
          <h3 style={{color: '#ecf0f3'}}>{isFixed&& 'Fixed'}</h3>
        </div>
      </div>
    </div>
  )
}
export default Sprint2;