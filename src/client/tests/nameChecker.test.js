import { checkURL } from '../js/nameChecker.js'

describe('checkURL() is declared?' , () => { //namechecker should be declared
    it('True is the expected value', () => {
        expect(checkURL).toBeDefined();
    });
});
describe('checkURL() is a function?' , () => { //namechecker should be a func
    it('True is the expected value', () => {
        expect(typeof checkURL).toBe("function");
    });
});