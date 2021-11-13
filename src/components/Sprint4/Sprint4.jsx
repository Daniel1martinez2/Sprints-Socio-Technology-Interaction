import React, {useState, useRef} from 'react'
import Slider from '../../UI/Slider/Slider'; 

const Sprint4 = ({data}) => {
  // console.log(data.parsedData);
  const formRef =  useRef();
  const {parsedData} = data; 
  const dataValues = Object.keys(parsedData[0]).splice(1); 
  console.log(dataValues);
  const handleSetSlider = (value) => {
    // console.log(value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('----------------------------------------------------------------');
    const editedWeights = dataValues.map( w => formRef.current[w].value)
    console.log(editedWeights);
  }
  return (
    <div className="sprint">
      <h1>Sprint 4</h1>
      <form onSubmit={handleSubmit} ref={formRef}>  
        {dataValues.map((elem, index) => (
          <Slider
            key={Math.random().toString()}
            handleSetSlider={handleSetSlider} 
            name={elem}
            // value={elem}
            // setValue={(e) => handleSetSlider(index, e.target.value)}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Sprint4
