//Fonction minimum
function min(a,b){
  if (a<b) {
    return a;

  } else if (a>b){
    return b;

  } else {
    return a;
  }
}

//Fonction maximum
function max(a,b){
  if (a<b) {
    return b;

  } else if (a>b){
    return a;

  } else {
    return b;
  }
}

//Fonction reduce
function reduce(numbers, fn){

  if (numbers.length < 2) {
    return null;

  } else {

    resultat = fn(numbers[0], numbers[1]);

      for (let index = 0; index < numbers.length; index++) {

        newResultat = fn(resultat,numbers[index])
        resultat = newResultat;

      }
      return newResultat;
    }

  }
//Fonction filtre
function filter(numbers, fn){
  i = 0;
  let resultat = [];
  for (let index = 0; index < numbers.length; index++) {
    if (fn(numbers[index])=== true) {
      resultat[i] = numbers[index];
      i++;
    }
  }
  return resultat;
}

//TEST
const myTestNumbers = [5, 8, 13, 21, 34, 610, 55, 3, 89, 144, 233, 377]
console.log(reduce(myTestNumbers,min));
console.log(reduce(myTestNumbers,max));
console.log(filter(myTestNumbers, (element) => {
  if (element >=30){
    return true;
  }else {
    return false;
  }
}
));
