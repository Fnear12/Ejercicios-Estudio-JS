// Ejercicios obtenidos de: https://twitter.com/svpino/status/1536317468079050754?s=21&t=qsJmhK8f5e5TGAivd2teCw


//EJERCICIO 1
/*

1. Write a function that reverses an array in place.

In other words, the function should not use an auxiliary array to do the work.

*/

function randomArray(n) {
  const randomarray = []
  for (let i = 1; randomarray.push(i++) < n;);

  for (let i = randomarray.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [randomarray[i], randomarray[rand]] = [randomarray[rand], randomarray[i]];
  }
  return randomarray
}


function operator(myoperator) {
  let myInput = document.getElementById("myInput").value.split(/, | /)

  switch (myoperator) {
    case 'Reverses':
      result = myInput.reverse();
      break;

    case 'Sort':
      result = myInput.sort((a, b) => a - b);
      break;

    case 'Duplicated':
      let uniquemyInput = myInput.filter((element, index) => {
        return myInput.indexOf(element) === index;
      })
      result = uniquemyInput;
      break;
    case 'missing_number':
      const random_array_miss = randomArray(myInput)
      deleted_number = random_array_miss.splice(Math.floor(Math.random() * myInput), 1)
      result = randomArray(myInput).filter(x => !random_array_miss.includes(x))
      break
  }

  return `Resultado final = ${result.join(" ")}`
}


const btn = document.getElementById('btn')

btn.addEventListener('click', function () {
  const myoperator = document.getElementById('myOperator').value
  console.log(myoperator)
  document.getElementById('myResult').innerHTML = operator(myoperator);
})