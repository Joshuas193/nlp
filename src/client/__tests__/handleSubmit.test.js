import { handleSubmit } from "../js/handleSubmit";

test('handleSubmit is declared', () => {
  expect(handleSubmit).toBeDefined();
});

test('handleSubmit is a function', () => {
  expect(typeof handleSubmit).toBe('function');
});