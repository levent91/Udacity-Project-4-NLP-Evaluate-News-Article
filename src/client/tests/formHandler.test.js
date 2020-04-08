import { handleSubmit } from '../js/formHandler.js'

describe('handleSubmit() is declared?' , () => {
    it('True is the expected value', () => {
        expect(handleSubmit).toBeDefined();
    });
});
describe('handleSubmit() is a function?' , () => {
    it('True is the expected value', () => {
        expect(typeof handleSubmit).toBe("function");
    });
});