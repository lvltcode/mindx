// ENTRANCE TEST TO CODE INTENSIVE (CIJS)

// A. PROBLEM SOLVING
// 1. Finding array includes the longest strings - #1

// function allLongestString(inputArray){
//   // find the longest strings
// 	const longestString = inputArray.reduce((previous, current) => {
//   if (current.length < previous.length) {
//   /* console.log(previous) */
//   return previous;
//   } else {
//   return current;
//   }
//   });
//   // filter strings with the same length
//   const longestStringArray = inputArray.filter ((string) =>
//    string.length == longestString.length
//   );
//   //join the strings in to the array
//   return longestStringArray;
// }


// 1. Finding array includes the longest strings - #2
function allLongestString(inputArray){
	let longestString;
	let currentString = '';
	let nextString = '';

	let longestStringArray = [];

	for (i=0; i < inputArray.length - 1; i++) {
		currentString = inputArray[i];
		nextString = inputArray[i+1];

		if (currentString.length < nextString.length) {
			longestString = nextString;
		}
	}

	for (j=0; j < inputArray.length; j++) {
		if (inputArray[j].length === longestString.length) {
			longestStringArray.push(inputArray[j])
		}
	}
	return longestStringArray
}

// TEST CASE

const arr = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH", "K0NGLPp", "aa4bcne"];

console.log(allLongestString(arr));


// 2. Split rows and sum their weights
function alternatingSums(weightArray) {
  let finalWeight = [0,0];
  weightArray.map((item, index) => {
    console.log(item, index)
    if (index % 2 == 0){
      finalWeight[0] += item
    } else {
      finalWeight[1] += item
    }
  })
  return finalWeight
}


const arr1 = [60, 40, 55, 75, 64];

console.log(alternatingSums(arr1));
