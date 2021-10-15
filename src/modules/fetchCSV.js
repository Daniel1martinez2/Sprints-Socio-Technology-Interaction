async function getData(DATA) {
  const response = await fetch(DATA, {
      headers: {
        'content-type': 'text/csv;charset=UTF-8'
      }
    })
    .catch(function () {
      console.log("error");
    });
  const data = await response.text();
  return data;
};

export default getData; 