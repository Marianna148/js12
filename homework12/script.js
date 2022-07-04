//debugger

const arr = [1, 2, "str", true, function f1() {}]

function copy(list, func) {
    const newArr = list.slice();

    if(typeof func === "function") {
      for(let i = 0; i < newArr.length; i++); {
          if(typeof newArr[i] === "number") func(newArr[i]);
      } 
    }
    return newArr
}

function mult(a) {
    return a *= 10 
}

newList = copy(arr, mult);
console.log(newList);