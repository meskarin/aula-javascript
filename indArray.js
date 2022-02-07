const random = [2, 3, 1, 4, 6, 5]; 

const numMaior = Math.max(...random)
const numMenor = Math.min(...random)

const indNumMaior = random.indexOf(numMaior);
const indNumMenor = random.indexOf(numMenor);

//console.log(indNumMaior)
//console.log(indNumMenor)


module.exports = {indNumMaior, indNumMenor}