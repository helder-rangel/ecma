//min
function min(array) {
  minValue = array[0]
    for(let flag = 1; flag < array.length; flag++){
      if(minValue > array[flag])
          minValue = array[flag]
    }
    return minValue

}
let array = [11,4,2,6,10,3]
console.log(min(array))

//max
function max(array) {
    maxValue = array[0]
    for(let flag =1; flag < array.length; flag++){
        if(maxValue < array[flag])
            maxArray = array[flag]
    }
    return maxValue
}

console.log(max(array))

//range