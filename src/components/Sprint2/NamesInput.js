import '../../App.css'; 
const NamesInput = ({names,onSetValue}) => {
  const handleInputChange = (event) => {
    onSetValue(event.target.value); 
  }; 
  return(
    <select className="select" onChange={handleInputChange} name="names" id="name-select">
      { names.map(name => <option value={name} key={name}>{name}</option>) }
    </select>
  );
}

export default NamesInput;
