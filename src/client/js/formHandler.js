const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";
const options = "&lang=en&URL=";
const apiKey = `${process.env.API_KEY}`;

/* function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
} */

const fetchData = async (baseUrl, options, apiKey, chosenUrl) => {
    let chosenUrl = document.getElementById('chosenUrl');
    const res = await fetch(baseUrl+apiKey+options+chosenUrl)
    try {
        const data = await res.json();
        console.log(data);
        return data;
    }   catch(error)    {
        console.log('error', error);
    }
}

export { handleSubmit }
