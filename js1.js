var ourArray = [1,2,3,1,1,6,3,2,7]

// Uniq
// Lessons Learned: use indexOf() to check if an array contains an element

Array.prototype.uniq2 = function(){
  var uniqArray = [];
  for(var i = 0; i < this.length; i++) {
    if (uniqArray.indexOf(this[i]) === -1) {
      uniqArray.push(this[i]);
    }
  }
  console.log(uniqArray);
  return uniqArray
}

// ourArray.uniq2()
var hasTwoSums = [-1,1,0,3,5,-5,-2,9,2,1,1,1,1];

// Two_sum:
Array.prototype.two_sum = function(){
  var sumBucket = [];
  for (var i = 0; i < (this.length - 1); i++) {
    for (var j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        sumBucket.push([i, j]);
      }
    }
  }
  console.log(sumBucket);
  return sumBucket;
}

// hasTwoSums.two_sum();

// Robust Transpose Uses a helper method to make non-MxN arrays transposeable
Array.prototype.transpose = function(){
  var transposedArray = [];
  var transposableArray = this.makeTransposable();
  for (var i = 0; i < transposableArray.length; i++) {
    console.log("Outermost Loop");
    transposedArray.push([]);
    for (var j = 0; j < transposableArray[i].length; j++) {
      console.log("Inner Loop");
      transposedArray[i].push(transposableArray[j][i]);
    }
  }
  console.log(transposedArray);
  return transposedArray;
}

Array.prototype.makeTransposable = function(){
  var maxLength = 0;
  this.forEach (function(entry) {
    if (entry.length > maxLength) {
      maxLength = entry.length;
    }
  });
  this.forEach (function(entry) {
    while(entry.length < maxLength) {
      entry.push(0);
    }
  });
  return this;
}

var untransposeableArray = [[1,2,3],[4],[7,8,9]];
untransposeableArray.transpose();
