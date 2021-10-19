import React, { useEffect, useState} from 'react'; 
import Sprint1 from './components/Sprint1'; 
import Sprint2 from './components/Sprint2/Sprint2'; 
// import ChartExample from './components/ChartExample'; 
import { csvParser } from './modules/csvParser';

import  fetchCSV  from './modules/fetchCSV'; 
import DATA from './data/sp3.csv'; 
import './App.css';
import Sprint3 from './components/Sprint3/Sprint3';

const App = () => {
  const [dataConverted, setDataConverted] = useState(null);

  const getDataConverted = async () => {
    const fetchData = await fetchCSV(DATA);
    return csvParser(fetchData); 
  }; 
  
  useEffect(()=>{
    getDataConverted().then( val => {
      setDataConverted(val)
    });
  }, []);

  return (
    <div className="sprints-container">
      {dataConverted && <Sprint1 data={dataConverted} />}
      {/* <ChartExample/> */}
      {dataConverted && <Sprint2 data={dataConverted} />}
      {dataConverted && <Sprint3 data={dataConverted}/>}
      
    </div>
  );
}

export default App;
