console.log('loaded')

// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log(maxOfTwoNumbers(3, 9));

//2.
var maxOfThree = function (x, y, z){
    return (Math.max(x, y, z))
};
console.log(maxOfThree(3, 100, 15));

//3.
function isCharAVowel(char){
  return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false;
}

var xyz = 'b';
var abc = 'a';
console.log(isCharAVowel(xyz));
console.log(isCharAVowel(abc));

//4.

var sumArray = function(arr){
  // console.log('function is running');
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    // console.log('loop is running');
      sum += arr[i];
      // console.log(sum);
  }
  return sum;
};
var arr2 = [2, 5, 9, 10];
console.log(sumArray(arr2));

//5.
var multiplyArray = function(arr){
  // console.log('function is running');
  var result = 1;
  for (var i = 0; i < arr.length; i++){
     // console.log('loop is running');
      result *= arr[i];
      // console.log(result);
  }
  return result;
};

var arr2 = [2, 5, 9, 10];
console.log(multiplyArray(arr2));



