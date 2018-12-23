//map()

//takes 2 arguments, a callback and and optional context(will be considered this in the callback)
//callback runs for each value in the array and returns each new value in the resulting array
//the resulting array will always be the same length as the original array

//have

// What you have
var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];
// What you need
[20, 24, 56, 88]

//running with forEach

var officersIds = [];

officers.forEach(function (officer){
	officersIds.push(officer.id);
});


//running with map()



var officerIds = officers.map(function(officer){
	return officer.id;
});

//or es6

const officersIdsES = officers.map((officer) => officer.id);

let salary = [2000, 4000, 6000, 8000];

var overtimeSalary = salary.map(function(salary){
	return salary * 1.6;
});

var overTimeSalaryES = salary.map((salary) => salary * 1.6);

console.log(officersIdsES)