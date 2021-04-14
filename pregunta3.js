// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    let arr = nums.sort(function(a,b){ return (b-a)});
    if(arr.length<3) return undefined;

    let mayor = arr[0];
    let array = arr.filter(number => mayor!=number);

    let segundo = array[0]

    let numbers = array.filter(number => segundo!=number);

    return numbers[0];
    

}


// TESTs no modificar

console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === undefined);
console.log(greater3([1,1,2,5]) === 1);