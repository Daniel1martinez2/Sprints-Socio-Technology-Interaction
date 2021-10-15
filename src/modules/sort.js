 //Handle Sorting
 export const sortingHandler =  (info) => {
  const {data, ascendent, column} = info; 
  let dispatch = [...data]; 
  if(ascendent){
    dispatch.sort((a, b) => a[column] - b[column]);
  }else{
    dispatch.sort((a, b) => b[column] - a[column]); 
  }; 
  return dispatch;
}; 
