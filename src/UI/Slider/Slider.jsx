import React, {useState} from 'react'

const Slider = ({handleSetSlider, name}) => {
  const [slidersData, setSlidersData] = useState(1); 
  const handleChange = (e) => {
    const sliderValue = e.target.value; 
    setSlidersData(sliderValue)
    handleSetSlider(sliderValue)
  }
  return (
    <div>
      <span>{name}</span>
      <input 
        type="range" 
        name={name} 
        min="0" 
        max="1"
        step="0.1"
        value={slidersData}
        onChange={handleChange}
      />
    </div>
  )
}

export default Slider
