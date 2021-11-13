async function getData(DATA) {
  const response = await fetch(DATA, {
      headers: {
        'content-type': 'text/csv;charset=UTF-8'
      }
    })
    .catch(function () {
    });
  const data = await response.text();
  return data;
};

export default getData; 