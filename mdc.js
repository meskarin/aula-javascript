const mdc = (a,b) =>{

    while(b != 0){
    resto = a % b
    a = b 
    b = resto

    
    }
    return a
    console.log(a)
}




module.exports = {mdc}
