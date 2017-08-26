The Challenge:

link : https://discuss.codecademy.com/t/challenge-calculate-max-min-and-averages/214283

You’re training for a marathon and have a list of times in which you’ve completed your training runs. Write a function, averageFinder that will return the mean69 and mode106 of your race times. Make sure that you write your functions and find these answers from scratch – don’t use imported tools!
Function name: averageFinder
Input: an array with race times, each a natural number representing the minutes it took you to finish your run (you can presume that race times are rounded up to the nearest minute so we do not have to deal with seconds)
Output: an array, with mean time and mode time (in that order)
Example: averageFinder([500, 450, 400, 400, 375, 350, 325, 300]) => [387.5, 400]
Please include the above sample input array in your submission as a test.
Always remember to explain your code and the thought processes behind it!
As always solutions using imports to do all the heavy lifting such as itertools will not be considered for the winner (and are not what interviewers are looking for) – you should write your functions from scratch.
What if your interviewer had follow-up questions, for example asking for maximum, median, and minimum times instead of mean and mode? What if your input array did not have duplicate values? Don’t anticipate what exactly those follow-ups or changes may be, but try to write your code so that it is easily read, easily maintained, and can be adapted to potential modifications in the interviewer’s questioning.

Solution:

var arr = [500, 500, 450, 400, 375, 350, 325, 300, 300];

function avarageFinder (arr) {
  
  // find mean
  var count = 0,
      modeArr = [],
      obj = {};
	for (i = 0; i< arr.length; i++) {
  	count += arr[i];
    if (!(String(arr[i]) in obj)) {
    	var s = String(arr[i]);
      obj[s] = 0;
    } else {
    var s = String(arr[i]);
   	 obj[s] = obj[s] + 1;
    } 
  };
  mean = count/arr.length;
  
  //find mode
  var largest = 0,
	  mode,
	  modeArr;
  for(var k in obj) {
  	 if (obj[k] > largest) {
     largest = (obj[k]);
     mode = k;
     };
  }
  modeArr.push(mode)
   for(var k in obj) {
  	 if (obj[k] == largest && k != mode && largest != 0) {
     modeArr.push(k)
     };
  }
  if (modeArr[0] == undefined) { modeArr = 'No mode was found'}

  return [mean,modeArr];
  
}

var meanMode = avarageFinder(arr);
console.log(meanMode)