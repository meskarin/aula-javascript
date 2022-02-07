const {mdc} = require('./mdc')

describe('Teste de Unidade da suite MDC do módulo 20 ', () => {
    it('MDC', () => {
        expect(mdc(12,18)).toBe(6)
        expect(mdc(50,100)).toBe(50)
        expect(mdc(16,8)).toBe(8)
        expect(mdc(23,58)).toBe(1)
        expect(mdc(1546,1546)).toBe(1546)
    });

});