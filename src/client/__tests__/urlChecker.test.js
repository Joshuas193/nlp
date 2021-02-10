import { checkUrl } from '../js/urlChecker';

checkUrl();

describe("Test: 'checkUrl()'", () => {
  test('checkUrl should be defined', () => {
    expect(checkUrl).toBeDefined();
  });

  test('Checking that checkUrl is a function', () => {
    expect(typeof checkUrl).toBeDefined('function');
  })
})