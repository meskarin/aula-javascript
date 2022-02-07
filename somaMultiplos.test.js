
const {somarMultiplos5} = require('./somaMultiplos')
const {somarMultiplos7} = require('./somaMultiplos')

describe('Teste de Unidade da suite Soma de Multiplos do Módulo 20', () => {
    it('Soma dos multiplos', () => {
        expect(somarMultiplos5(1000)).toBe(100500)
        expect(somarMultiplos7(1000)).toBe(71071)
        
    });
});