// Combining .map(), .reduce(), and .filter()
// Since all three are called on arrays and since .map() and .filter() both return arrays, we can easily chain our calls.

// Let’s check out another example. Here’s our data:

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];


// Our objective: get the total score of force users only. Let’s do it step by step!

// First, we need to filter out the personnel who can’t use the force:

var jediPersonnel = personnel.filter(function (person) {
  return person.isForceUser;
});
// Result: [{...}, {...}, {...}] (Luke, Ezra and Caleb)
// With that we have 3 elements left in our resulting array. We now need to create an array containing the total score of each Jedi.

var jediScores = jediPersonnel.map(function (jedi) {
  return jedi.pilotingScore + jedi.shootingScore;
});

// Result: [154, 110, 156]
// And let’s use reduce to get the total:

var totalJediScore = jediScores.reduce(function (acc, score) {
  return acc + score;
}, 0);

// Result: 420
// And now here’s the fun part… we can chain all of this to get what we want in a single line:

var totalJediScore2 = personnel
  .filter(function (person) {
    return person.isForceUser;
  })
  .map(function (jedi) {
    return jedi.pilotingScore + jedi.shootingScore;
  })
  .reduce(function (acc, score) {
    return acc + score;
  }, 0);

  
// And look how pretty it is with arrow functions:

const totalJediScore3 = personnel
  .filter(person => person.isForceUser)
  .map(jedi => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);


//////////////////// EX2

let ipl = [1, 2, 3, 4];
let cpl = ipl.map(x => x * 2)
             .filter(x => x > 3)
             .reduce((x, y) => x + y);

console.log(cpl);
console.log(ipl);



// output
// 18
// [1, 2, 3, 4]