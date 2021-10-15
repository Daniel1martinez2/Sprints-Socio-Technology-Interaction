import React from 'react'
import styles from './Visualization.module.css'; 

const Visualization = ({neighbors}) => {
  
  return (
    <div className={styles['visualization-container']}>
      <div className={styles['visualization']}>
        {neighbors.map(elem => (
          <div 
            style={{
              left: `${((elem.tie)*100).toFixed(3)}%`,
              transform: `translate(-${((elem.tie)*100).toFixed(3)}%, 0)`,
            }} 
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
