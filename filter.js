//Filter

//Filter is used to filter an array when you need only some items from it

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];

//We want two arrays, one for imperial and one for rebel

var rebels = pilots.filter(function(pilot){
	return pilot.faction === 'Rebels';
});

var imperial = pilots.filter(function(pilot){
	return pilot.faction === 'Empire';
})


//Es6

const rebels1 = pilots.filter((pilot) => pilot.faction === 'Rebels');
const imperial1 = pilots.filter((pilot) => pilot.faction === 'Imperial');


//EX2

let credit = [1000, 500, 2000, 10, 5, 100];
let lowerCredit = credit.filter(function(credit){
	return credit < 150;
});

//Es6

let higerCredit = credit.filter((credit) => credit > 150);

