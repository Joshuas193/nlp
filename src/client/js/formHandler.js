const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = 'key=6aa96edd41d49a3229fe5debcc178470&lang=en&url=';

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    const userInput = document.getElementById('userInput').value;
    getData(baseUrl, apiKey, userInput)
}

const getData = async (baseUrl, apiKey, userInput) => {
    const res = await fetch (baseUrl+apiKey+userInput)
    try {
        const data = await res.json();
        console.log(data);
        return data;
    }   catch(error)    {
        console.log('error', error);
    }
}

export { handleSubmit }