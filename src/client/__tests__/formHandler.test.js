import { handleSubmit, postData } from '../js/formHandler';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({data: {
    "Score Tag": "N",
    "Agreement": "DISAGREEMENT",
    "Subjectivity": "SUBJECTIVE",
    "Confidence": "76",
    "Irony": "IRONIC"}})
  })
)

it('retrieves data from an API', async () => {
  const data = await postData('http://localhost:8081/apiData', { userInput: userInput});
  expect(data).toBe({
    "Score Tag": "N",
    "Agreement": "DISAGREEMENT",
    "Subjectivity": "SUBJECTIVE",
    "Confidence": "76",
    "Irony": "IRONIC"});
})