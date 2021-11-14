import React, {useState} from 'react'
import Slider from '../../UI/Slider/Slider'; 
import { nanoid } from 'nanoid'

const Sprint4 = ({data}) => {
  const [state, setState] = useState(false); 
  const {parsedData} = data; 
  const dataValues = Object.keys(parsedData[0]).splice(1); 
  const defaultData = dataValues.map( dv => ({id: dv.split(' ').join(''), value: 0}))
  const [values, setValues] = useState(defaultData); 

  const handleSetSlider = (value) => {

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('----------------------------------------------------------------');
    console.log(values);
    setState(prev => !prev)
  }
  //set
  const onChange = (id, newData) =>{
    const copy = [...values]; 
    const current = copy.findIndex(e => e.id === id); 
    console.log(current);
    if(current === -1) return
    copy[current].value = newData; 
    setValues(copy); 
  }
  return (
    <div className="sprint">
      <h2>Sprint 4</h2>
      <form onSubmit={handleSubmit} className="sprint4__form">  
        {values.map((elem, index) => (
          <Slider
            key={elem.id}
            handleSetSlider={handleSetSlider} 
            name={elem.id}
            onChange={(e) => onChange(elem.id, parseFloat(e.target.value))}
            value={elem.value}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Sprint4
