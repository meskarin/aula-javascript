function somarMultiplos(indMax) {

    let multiplosDe5 = 0;

    for( i = 0; i <= indMax; i++){
        if(i % 5 === 0 )
        multiplosDe5 += i;
    }
    console.log(multiplosDe5);
}

somarMultiplos(1000)