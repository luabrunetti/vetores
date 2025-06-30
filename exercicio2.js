// Exercício 2

function separa(nums) {
    let totalPares = 0;
    let totalImpares = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            totalPares++;
        } else {
            totalImpares++;
        }
    }

const pares = new Array(totalPares);
const impares = new Array(totalImpares);
  
let indicePar = 0;
let indiceImpar = 0;
    
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    pares[indicePar] = nums[i];
            indicePar++;
} else {
      impares[indiceImpar] = nums[i];
            indiceImpar++;
      }
}

    return [pares, impares];
}
