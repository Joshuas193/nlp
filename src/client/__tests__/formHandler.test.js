const postData = require('..js/formHandler');

test('the function queries a url and sends back data', async => {
  const url = 'https://www.washingtonpost.com/us-policy/2021/02/08/democrats-stimulus-checks-covid-relief/';
  const data = await postData('http://localhost:8081/apiData', { url })
  .then()
})