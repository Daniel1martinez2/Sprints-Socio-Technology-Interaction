import React from 'react'
import styles from './Visualization.module.css'; 

const Visualization = ({neighbors, onGetNeighbor, setVisualizationPerson}) => {
  
  return (
    <div className={styles['visualization-container']}>
      <div className={styles['visualization']}>
        <h1 className={styles['indicator']}>100%</h1>
        {neighbors.map(elem => (
          <div 
            key={Math.random()}
            style={{
              left: `${100-((elem.tie)).toFixed(3)}%`,
              transform: `translate(-${100-((elem.tie)).toFixed(3)}%, 0)`,
            }}
            onMouseEnter={() => onGetNeighbor(elem.name)} 
            onMouseLeave={() =>setVisualizationPerson(null) }
            className={styles['example']}
          >
            <span>{elem.name}</span>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Visualization
