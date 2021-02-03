function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    const chosenUrl = document.getElementById('chosenUrl').value
    console.log(chosenUrl)
    postData(chosenUrl.value)
}

const postData = async (url) => {
    const response = await fetch('/api', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(url)
    })
}

export { handleSubmit }
