const randomArray =() =>{
    let number= Math.floor(Math.random()*4);
    return number;
}

let arrArray=[
    ["Abraham Lincoln was a licensed bartender", "During his entire lifetime, Vincent Van Gogh is known to have sold only a single painting", "Queen lead singer Freddie Mercury was born with four extra teeth in his upper jaw giving him his distinct smile","Napoleon Bonaparte was once attacked by a swarm of rabbits"],
    ["The only way to do great work is to love what you do","Life is like riding a bicycle. To keep your balance, you must keep moving", "Keep moving forward!", "Fish and visitors smell in three days"],
    ["What is a flea’s favorite way to travel? Itch hiking", " How many tickles does it take to get an octopus to laugh? Ten tickles", "Why aren’t koalas actual bears? They don’t meet the koalafications"],
    ["Yes","No","Maybe","Don't overthink it"]
];
num1=randomArray();
num2=randomArray();
switch (num1){
    case 0:
        console.log("The Random Fact of the day is: ")
        break;
    case 1:
        console.log ("The quote of the day is: ")
        break;
    case 2:
        console.log ("the joke of the day is: ")
        break;
    case 3:
        console.log("The answer is: ")
}
console.log(arrArray[num1][num2]);
