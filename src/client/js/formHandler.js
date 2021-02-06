const handleSubmit = async (event) => {
    event.preventDefault()
    // check what text was put into the form field
    const userInput = document.getElementById('userInput').value;
    console.log(userInput);
    const apiUrl = `http://localhost:8081/apiData`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json);

}

export { handleSubmit }