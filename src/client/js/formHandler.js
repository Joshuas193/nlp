function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    const chosenUrl = document.getElementById('chosenUrl').value
    console.log(chosenUrl);
}

export { handleSubmit }
