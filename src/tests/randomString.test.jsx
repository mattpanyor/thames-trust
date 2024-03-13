import randomStringBySize from "../utils/randomString";
import { render } from '@testing-library/react';

describe("Utility function - random String", () => {
    it("Generates 143 long random string", () => {
        const test_number = 143;
        const result = randomStringBySize(test_number)
        expect(result.length).toEqual(test_number)
    })
})