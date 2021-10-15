import React, { useState, Fragment } from 'react'; 
import { sortingHandler } from '../modules/sort'; 
import TableUi from '../UI/TableUi'; 
const Sprint1 = props => {
  const [inputValueName, setInputValueName] = useState('A'); 
  const [inputValueOrder, setInputValueOrder] = useState('1'); 
  const { data} = props;
  const [copyCatData, setCopyCatData] = useState({...data}); 
  //submit
  const handlerSubmit = (event) => {
    event.preventDefault();
    const ascendent = inputValueOrder === '1' ? true : false; 
    const dataSorted = sortingHandler({
      data: [...copyCatData['parsedData']], 
      ascendent, 
      column: inputValueName
    }); 
    setCopyCatData({headers: copyCatData['headers'], parsedData: dataSorted}); 
  }; 
  return (
    <div className="sprint sprint1">  
      <h2>Sprint 1</h2>
      <form className="form" onSubmit={handlerSubmit}>
        <select
          className="select" 
          value={ inputValueName } 
          onChange={(e) => setInputValueName(e.target.value)}
        >
          <option value="A">A</option>
          <option value="B">B</option>
        </select>
        <select 
          className="select"
          value={inputValueOrder}
          onChange={(e) => setInputValueOrder(e.target.value)}
        >
          <option value="1">Ascendent</option>
          <option value="0">Descendent</option>
        </select>
        <button name="submit" className="btn">Send</button>
      </form>
      {data && <TableUi data={copyCatData} />}
    </div>
  );
}; 
export default Sprint1;