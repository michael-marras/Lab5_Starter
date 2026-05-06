// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('(123) 456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('123-456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('12345 is not a valid phone number', () => {
  expect(isPhoneNumber('12345')).toBe(false);
});
test('abc-def-ghij is not a valid phone number', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

// isEmail
test('test@example.com is a valid email', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('hello@mail.org is a valid email', () => {
  expect(isEmail('hello@mail.org')).toBe(true);
});
test('missingatsign.com is not a valid email', () => {
  expect(isEmail('missingatsign.com')).toBe(false);
});
test('missing@dotcom is not a valid email', () => {
  expect(isEmail('missing@dotcom')).toBe(false);
});

// isStrongPassword
test('Hello123 is a strong password', () => {
  expect(isStrongPassword('Hello123')).toBe(true);
});
test('abcd_ is a strong password', () => {
  expect(isStrongPassword('abcd_')).toBe(true);
});
test('abc is not a strong password (too short)', () => {
  expect(isStrongPassword('abc')).toBe(false);
});
test('1abc is not a strong password (starts with number)', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

// isDate
test('1/1/2023 is a valid date', () => {
  expect(isDate('1/1/2023')).toBe(true);
});
test('12/31/2023 is a valid date', () => {
  expect(isDate('12/31/2023')).toBe(true);
});
test('123/1/2023 is not a valid date (month too long)', () => {
  expect(isDate('123/1/2023')).toBe(false);
});
test('12/31/23 is not a valid date (year not 4 digits)', () => {
  expect(isDate('12/31/23')).toBe(false);
});

// isHexColor
test('#fff is a valid hex color', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('1a2b3c is a valid hex color', () => {
  expect(isHexColor('1a2b3c')).toBe(true);
});
test('#gggggg is not a valid hex color', () => {
  expect(isHexColor('#gggggg')).toBe(false);
});
test('#12345 is not a valid hex color (5 digits)', () => {
  expect(isHexColor('#12345')).toBe(false);
});