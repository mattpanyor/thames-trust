import stringIdGenerator from 'src/utils/stringIdGenerator.js';

describe('Utility function - random String', () => {
  it('Generates 143 long random string', () => {
    const test_number = 143;
    const result = stringIdGenerator(test_number);
    expect(result.length).toEqual(test_number);
  });
});
