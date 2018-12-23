//reduce

//just like map reduce also runs a callback for each element in an array
//What’s different here is that reduce passes the result of this callback (the accumulator) from one array element to the other.
//The accumulator can be pretty much anything (integer, string, object, etc.) and must be instantiated or passed when calling .reduce().


let ipl = [1, 2, 3, 4];
let cpl = ipl.reduce((x,y) => {
    return x + y;
});
console.log(cpl);

var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

var totalYears = pilots.reduce(function (accumulator, pilot) {
  return accumulator + pilot.years;
}, 0);

//Notice that I’ve set the starting value as 0. I could have also used an existing variable if necessary. 
// After running the callback for each element of the array, reduce will return the final value of our accumulator (in our case: 82).

// Now let’s say I want to find which pilot is the most experienced one. For that, I can use reduce as well:

var mostExpPilot = pilots.reduce(function (oldest, pilot) {
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});

// I named my accumulator oldest. My callback compares the accumulator to each pilot. If a pilot has more years of experience than oldest, then that pilot becomes the new oldest so that’s the one I return.

// As you can see, using .reduce() is an easy way to generate a single value or object from an array.

// .filter()