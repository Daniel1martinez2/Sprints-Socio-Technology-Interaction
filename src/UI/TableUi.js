import  rand  from "random-key";
import classes from './TableUi.module.css'; 
const TableUi = props => {
  const {headers, parsedData} = props.data; 
  const td = () => {
    const getTd = (e) => {
      const tdInfo = [];
      for (let key in e) {
        tdInfo.push(e[key]); 
      }; 
      return tdInfo;
    } 
    return parsedData.map(elem => {
      return (
        <tr className={classes['tr-table']} key={rand.generate()} >
          {getTd(elem).map(e => <td className={classes['td']} key={rand.generate()}>{e}</td>) }
        </tr>
      )
    }) 
  }
  return (
    <table>
      <thead>
      <tr>
        {headers.map(e => <th key={rand.generate()} className={classes['tfoot']}>{e}</th>)}
      </tr>
      </thead>
      <tbody>{td()}</tbody>
    </table>
  ); 
}
export default TableUi; 