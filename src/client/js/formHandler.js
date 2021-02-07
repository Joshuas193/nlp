const handleSubmit = async (event) => {
  event.preventDefault();
  // check what text was put into the form field
  const userInput = document.getElementById("userInput").value;
  console.log(userInput);
  postData("http://localhost:8081/apiData", { userInput: userInput });
};

const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  try {
    const data = await response.json().then((data) => {
      document.getElementById("score_tag").innerHTML = `Score Tag: ${data.score_tag}`;
      document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`;
      document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`;
      document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`;
      document.getElementById("irony").innerHTML = `Irony: ${data.irony}`;
    });
  } catch (error) {
    console.log("error", error);
  }
};

export { handleSubmit };
