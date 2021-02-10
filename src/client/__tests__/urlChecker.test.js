import { checkUrl } from '../js/urlChecker';

test('checkUrl is declared', () => {
  expect(checkUrl).toBeDefined();
});

test('checkUrl is a function', () => {
  expect(typeof checkUrl).toBe('function');
});