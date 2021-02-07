const handleSubmit = async (event) => {
    event.preventDefault()
    // check what text was put into the form field
    const userInput = document.getElementById('userInput').value;
    console.log(userInput);
    postData('http://localhost:8081/apiData', { userInput: userInput })
}

const postData = async ( url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    } catch(error) {
      console.log('error', error);
    }
}

export { handleSubmit }