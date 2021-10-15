export const dotProduct = (data) => {
  let personProp = 0; 
  let elemProps = Object.keys(data[0]).filter(elem => elem !== 'Nombre'); 
  elemProps.forEach((elem,i)=>{
    personProp += data[0][elem] * data[1][elem]
  })
  return personProp;
};