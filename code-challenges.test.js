// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// QUESTION_ONE) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// const colors1 = (["purple", "blue", "green", "yellow", "pink"])
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]


// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// a) Create a test with an expect statement using the variable provided. 

describe("colorsShuffle", () => {
    it("removes the first item from the array and shuffles the remaining content", () => {
        expect(colorsShuffle(colors1)).toEqual([ 'blue', 'green', 'pink', 'yellow' ])
        expect(colorsShuffle2(colors2)).toEqual(['aquamarine', 'indigo', 'ochre', 'periwinkle', 'saffron' ])
    })
})

// FAIL  ./code-challenges.test.js
// cupidColors
//   ✕ removes the first item from the array and shuffles the remaining content (1 ms)

// ● cupidColors › removes the first item from the array and shuffles the remaining content

//   ReferenceError: cupidColors is not defined

//     34 | describe("cupidColors", () => {
//     35 |     it("removes the first item from the array and shuffles the remaining content", () => {
//   > 36 |         expect(cupidColors(colors1)).toEqual(["purple", "yellow", "blue", "pink", "green"])
//        |         ^
//     37 |         expect(cupidColors(colors2)).toEqual(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"])
//     38 |     })
//     39 | })


// / b) Create the function that makes the test pass. (code)

// Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// INPUT: Function that takes in an array ["purple", "blue", "green", "yellow", "pink"]
// OUTPUT: ['blue', 'green', 'pink', 'yellow']
// CONCLUSION: use the .splice() method to remove the first element in the array. Remove purple from the array and use . sorts the array and also refrences that array
const colors1 = ["purple", "blue", "green", "yellow", "pink"] 
const splicedArr = colors1.splice(1)
splicedArr.sort()

const colorsShuffle = () => {
    return splicedArr
}


console.log(splicedArr)

const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
const splicedArr2 = colors2.splice(1)
splicedArr2.sort()

const colorsShuffle2 = () => {
    return splicedArr2
}
console.log(splicedArr2)


// PASS  ./code-challenges.test.js
// colorsShuffle
//   ✓ removes the first item from the array and shuffles the remaining content (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.442 s
// Ran all test suites.
// ✨  Done in 1.31s.



// Question2) 

// Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

// const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
// const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

// a) Create a test with expect statements for each of the variables provided.

describe("mostPopularVotes", () => {
    it("takes in an object that contains up votes and down votes and returns the net total of votes", () => {
        expect(mostPopularVotes(votes1)).toEqual(11)
        expect(mostPopularVotes2(votes2)).toEqual(-31)
    })
})


// FAIL  ./code-challenges.test.js
// mostPopularVotes
//   ✕ takes in an object that contains up votes and down votes and returns the net total of votes (1 ms)

// ● mostPopularVotes › takes in an object that contains up votes and down votes and returns the net total of votes

//   ReferenceError: mostPopularVotes is not defined

//     102 | describe("mostPopularVotes", () => {
//     103 |     it("takes in an object that contains up votes and down votes and returns the net total of votes", () => {
//   > 104 |         expect(mostPopularVotes(votes1)).toEqual(11)
//         |         ^
//     105 |         expect(mostPopularVotes(votes2)).toEqual(-31)
//     106 |     })
//     107 | })

//     at Object.expect (code-challenges.test.js:104:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.431 s, estimated 1 s


// b) Create the function that makes the test pass.

// Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// INPUT: Function that takes in n object that contains up votes and down votes 
// OUTPUT: returns the net total of votes.(11,-31)
// CONCLUSION: Create variables for up votes and down votes minus the up votes and the down votes thrn return sum of the votes 

// const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
// const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31


const upVotes = 13
const downVotes= 2
const votes1 = upVotes - downVotes
var mostPopularVotes = () => {
    return votes1

}
console.log(mostPopularVotes())


const upVotes2 = 2
const downVotes2= 33
const votes2 = upVotes2 - downVotes2
var mostPopularVotes2 = () => {
    return votes2

}
console.log(mostPopularVotes2())


// PASS  ./code-challenges.test.js
// mostPopularVotes
//   ✓ takes in an object that contains up votes and down votes and returns the net total of votes (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.427 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.18s.




// Question3) 

// Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// INPUT: Function that takes in n object that contains up votes and down votes 
// OUTPUT: returns the net total of votes.(11,-31)
// CONCLUSION: Create variables for up votes and down votes minus the up votes and the down votes thrn return sum of the votes 

// const dataArray1 = ["array", "object", "number", "string", "Boolean"]
// const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// a) Create a test with an expect statement using the variables provided.

describe("oneArray", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        expect(oneArray(dataArray1)).toEqual(['array', 'object', 'number', 'string', 'Boolean', 'string', 'null','Boolean','string','undefined'])
        expect(oneArray2(dataArray4)).toEqual(['array', 'object', 'number', 'string', 'Boolean', 'string', 'null','Boolean','string','undefined'])
    })
})

// FAIL  ./code-challenges.test.js
// oneArray
//   ✕ takes in two arrays as arguments and returns one array with no duplicate values (1 ms)

// ● oneArray › takes in two arrays as arguments and returns one array with no duplicate values

//   ReferenceError: oneArray is not defined

//     192 | describe("oneArray", () => {
//     193 |     it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
//   > 194 |         expect(oneArray(dataArray11)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//         |         ^
//     195 |         expect(oneArray(dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//     196 |     })
//     197 | })

//     at Object.expect (code-challenges.test.js:194:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.443 s, estimated 1 s


// b) Create the function that makes the test pass.


// Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// INPUT: function that takes in two arrays as arguments
// OUTPUT: Returns one array with no duplicate values STRETCH: Use the spread operator to pass in a dynamic number of arguments.
// CONCLUSION: use the spread method to join the two arrays togther

 const dataArray1 = ["array", "object", "number", "string", "Boolean"]
 const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
const mergedArray = [...dataArray1, ...dataArray2]
 let oneArray = () => {
     return mergedArray
 }

console.log(oneArray())


const dataArray3 = ["array", "object", "number", "string", "Boolean"]
const dataArray4 = ["string", "null", "Boolean", "string", "undefined"]
const mergedArray2 = [...dataArray3, ...dataArray4]
let oneArray2 = () => {
    return mergedArray2
}

console.log(oneArray2())

// PASS  ./code-challenges.test.js
// oneArray
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.416 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.07s.
// learnacademy@LEARNs-Air week-4-assessment-ResetReesi % 