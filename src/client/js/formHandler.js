const handleSubmit = async (event) => {
    event.preventDefault()
    // check what text was put into the form field
    const userInput = document.getElementById('userInput').value;
    postData('api', { userInput });
    console.log(userInput);
    const baseUrl = '/api';
    const response = await fetch(baseUrl);
    const json = await response.json();
    console.log(json);
}

const postData = async (url = '', data = {}) => {
    const response  = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

export { handleSubmit }