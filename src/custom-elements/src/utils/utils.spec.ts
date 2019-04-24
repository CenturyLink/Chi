import { calculateClasses } from './utils';

it('should create empty classes from empty attributes', () => {

  expect(calculateClasses()).toBe('');

});


it('should create binary classes from attributes', () => {

  expect(calculateClasses({
    binary: [
      ['class1', true],
      ['class2', false],
    ]
  })).toBe('class1');

  expect(calculateClasses({
    binary: [
      ['class1', true],
      ['class2', true],
    ]
  })).toBe('class1 class2');

  expect(calculateClasses({
    binary: [
      ['class1', false],
      ['class2', false],
    ]
  })).toBe('');

});

it('should create prefixed classes from attributes', () => {

  expect(calculateClasses({
    prefixed: [
      {prefix: '-', value: 'class1'}
    ]
  })).toBe('-class1');

  expect(calculateClasses({
    prefixed: [
      {suffix: '-', value: 'class1'}
    ]
  })).toBe('class1-');

  expect(calculateClasses({
    prefixed: [
      {prefix: '-', value: 'class1', suffix: '_'}
    ]
  })).toBe('-class1_');

});

it('should create classes from a function generator', () => {

  expect(calculateClasses({
    generated: [
      {value: 'class1', generator: (value) => '-prefix-' + value + '-suffix'}
    ]
  })).toBe('-prefix-class1-suffix');

});

it('should create classes from a multiple attribute types', () => {

  expect(calculateClasses({
    binary: [
      ['class1', false],
      ['class2', true],
    ],
    prefixed: [
      {prefix: '-', value: 'class1', suffix: '_'}
    ],
    generated: [
      {value: 'class1', generator: (value) => '-prefix-' + value + '-suffix'}
    ]
  })).toBe('class2 -class1_ -prefix-class1-suffix');

});
