import React, {useState} from 'react'
import {cosineSimilarityFunc} from '../Sprint2/CosenusSimilarity/cosenus'; 
import NamesInput from '../Sprint2/NamesInput'; 
import Visualization from './Visualization/Visualization'; 

const Sprint3 = ({data}) => {
  const nameHeader = 'Nombre'; 
  const names = data.parsedData.map(name => name[nameHeader]);
  const [currentPerson, setCurrentPerson] = useState(names[0]); 
  const [neighbors, setNeighbors] = useState(0); 
  const [arrayResult, setArrayResult ] = useState([]) ; 
  const submitHandler = (e) => {
    e.preventDefault();
    
    const testArray = []; 
    const currentPersonInData = data.parsedData.find(name => name[nameHeader]===currentPerson);
    const dataToCompare = data.parsedData.filter(name => name[nameHeader]!==currentPerson);
    dataToCompare.forEach(person => {
      const tie = cosineSimilarityFunc([currentPersonInData,person]);
      const name = person[nameHeader]; 
      testArray.push({tie, name}); 
    })
    setArrayResult(testArray.sort((a,b) => b.tie-a.tie).splice(0,neighbors)); 
  }
  const inputHandler = (e) => {
    if(/^\d+$/.test(e.target.value) || e.target.value === '') setNeighbors(e.target.value )
  }

  return (
    <div className="sprint sprint3">
      <h2>Sprint 3</h2>
      <form onSubmit={submitHandler}>
        <label>
          <span>Person</span>
          <NamesInput names={names} onSetValue={setCurrentPerson} />
        </label>
        <label>
          <span>Neighborhood Size</span>
          <input 
            className="input-number"
            value={neighbors} 
            onChange={inputHandler} 
            type="text" />
        </label>
        <button>Submit</button>
      </form>
      {arrayResult.length > 0 && <h3>Nearest Neighbors</h3>}
      <ul>
        {arrayResult.map((elem, index) => <li key={Math.random()}>{index+1} {elem.name}.......{(elem.tie).toFixed(1) } %</li>)}
      </ul>
      <Visualization neighbors={arrayResult}/>
    </div>
  )
}

export default Sprint3
