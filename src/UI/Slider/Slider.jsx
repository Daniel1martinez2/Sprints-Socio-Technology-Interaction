import styles from './Slider.module.css'; 
const Slider = ({handleSetSlider, name, value, onChange}) => {
  return (
    <div className={styles['slider']}>
      <span>{name}</span>
      <input 
        type="range" 
        name={name} 
        min="0" 
        max="1"
        step="0.1"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Slider
