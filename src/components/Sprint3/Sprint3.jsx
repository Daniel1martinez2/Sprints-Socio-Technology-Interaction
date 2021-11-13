import React, {useState} from 'react'
import {getKNeighbors} from '../Sprint2/CosenusSimilarity/getKNeighbors'; 
import NamesInput from '../Sprint2/NamesInput'; 

const Sprint3 = ({data}) => {
  const nameHeader = data.headers[0]; 
  const names = data.parsedData.map(name => name[nameHeader]);
  const [currentPerson, setCurrentPerson] = useState(names[0]); 
  const [neighbors, setNeighbors] = useState(0); 
  const [arrayResult, setArrayResult ] = useState([]) ; 
  
  const submitHandler = (e) => {
    e.preventDefault();
    setArrayResult(getKNeighbors(data.parsedData,currentPerson,nameHeader, neighbors)); 
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
        {arrayResult.map((elem, index) => (
          <li key={Math.random()}>
            {index+1} {elem.name}.......{(elem.tie).toFixed(1) } %
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Sprint3
