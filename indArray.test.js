const  {indNumMaior} = require('./indArray')
const  {indNumMenor} = require('./indArray')


describe('Teste de Unidade da suite IndMax do Módulo 20', () => {
    it('Índice do maior valor da Array ', () => {
        expect(indNumMaior).toBe(4)
    });
    it('Índice do menor valor da Array', () => {
        expect(indNumMenor).toBe(2)
    });
});