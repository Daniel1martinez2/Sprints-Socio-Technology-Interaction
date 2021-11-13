import React, { useEffect, useState} from 'react'; 
import Sprint1 from './components/Sprint1'; 
import Sprint2 from './components/Sprint2/Sprint2'; 
import Sprint3 from './components/Sprint3/Sprint3';
import Sprint4 from './components/Sprint4/Sprint4';
import { csvParser } from './modules/csvParser';
import  fetchCSV  from './modules/fetchCSV'; 
import DATA from './data/sp3.csv'; 
import './App.css';

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
      {dataConverted && <Sprint2 data={dataConverted} />}
      {dataConverted && <Sprint3 data={dataConverted}/>}
      {dataConverted && <Sprint4 data={dataConverted}/>}
      
    </div>
  );
}

export default App;
