import { test as testHandler } from '../index';

test('test handler test zxl', () => {
  expect(testHandler('zxl')).toBe('i am a zxl');
});

test('test handler test yangzuogui', () => {
  expect(testHandler('yangzuogui')).toBe('i am a yangzuogui');
});
