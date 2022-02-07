const somarMultiplos5 = (indMax) => {

    let multiplosDe5 = 0;

    for( i = 0; i <= indMax; i++){
        if(i % 5 === 0 )
        multiplosDe5 += i;
    }
    return multiplosDe5
    console.log(`A soma dos multiplos de 5 é ${multiplosDe5}`);
}

const somarMultiplos7= (indMax) => {

    let multiplosDe7 = 0;

    for( i = 0; i <= indMax; i++){
        if(i % 7 === 0 )
        multiplosDe7 += i;
    }
    return multiplosDe7
    console.log(`A soma dos multiplos de 7 é ${multiplosDe7}`);
}

//somarMultiplos5(1000)
//somarMultiplos7(1000)

module.exports = {somarMultiplos5, somarMultiplos7}