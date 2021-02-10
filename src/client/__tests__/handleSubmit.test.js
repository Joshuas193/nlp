import { handleSubmit } from "../js/handleSubmit";

handleSubmit();

describe("Test: 'handleSubmit()'", () => {
  test('handleSubmit should be defined', () => {
    expect(handleSubmit).toBeDefined();
  });

  test('Checking handleSubmit is a function', () => {
    expect(typeof handleSubmit).toBeDefined('function')
  })
});