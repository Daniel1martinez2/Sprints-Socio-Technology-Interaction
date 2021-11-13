export const dotProduct = (data, firstColumnName) => {
  let personProp = 0; 
  let elemProps = Object.keys(data[0]).filter(elem => elem !== firstColumnName); 
  elemProps.forEach((elem,i)=>{
    personProp += data[0][elem] * data[1][elem]
  })
  return personProp;
};