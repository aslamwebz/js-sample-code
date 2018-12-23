//forEach

//the foreach function creates a new array and assings value one by one to that array

let display = document.getElementById('app');

let score = [1,2,3,4,5,6,7];

score.forEach(x => console.log(x * x));

console.log(score);

score.forEach(function(x){
	console.log("Score:" + x );
	display.innerHTML += "Score:" + x + '<br />' ;
});

