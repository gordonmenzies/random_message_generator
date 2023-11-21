// Random Message Generator 
/* 
Needs to take an input from the terminal and output something from three different data structures.
example 
"Hi how are you doing, Input your brith day"
-- Receive Input
"Nice according to the mad world of modern theology that means you are [data structure one] type of 
[data structure two] and have the following characteristics [data structure 3]"
*/


/* 
    random number generator to start 
    three arrays (star sign) (silly type) (favourite food)

*/

// Random number generator 
// stored information in arrays 
// tool to iterate over arrays 
// message outputted 
// enact program

const randomNumberGenerator = (num) => {
    return Math.floor(Math.random() * num)
}

// The things that can someone can be 
const starSign = ["Pisces", "Aquarius","Capricorn","Libra","Leo","Taurus",
                "Aries","Sagittarius","Cancer","Scorpio","Gemini","Virgo"] 
//console.log(starSign.length)

const sillyType = ["Spicy","Chocolatey","Sleepy","Grumpy","Chatty","Sensitive",
                "Awkward","Vengeful","Scaredy","Introspective","Funny","moody"]
//console.log(sillyType.length)

const favouriteFood = ["Spahgetti", "Pasta El Forno", "Pizza", "Bruschetta", "Burnt Leeks",
                    "Profiteroles", "Tagliatelle","Sandwhiches","Bacon","Sausages","Bread","chocolate"]
//console.log(favouriteFood.length)

// produce number to select elements in the array
let randomNumberOne = randomNumberGenerator(starSign.length)
//console.log(randomNumberOne)

let randomNumberTwo = randomNumberGenerator(sillyType.length)
//console.log(randomNumberTwo)

let randomNumberThree = randomNumberGenerator(favouriteFood.length)
//console.log(randomNumberThree)

// the combination of things that someone is 
let typeOfPerson = []

//the tool that iterates over the things that someone can be to produce the message

typeOfPerson.push(starSign[randomNumberOne])
typeOfPerson.push(favouriteFood[randomNumberThree])
typeOfPerson.push(sillyType[randomNumberTwo])

// the message that the thing that someone is produces

const produceMessage = (typeOfPerson) => {
    console.log(`You are a ${typeOfPerson[2]} ${typeOfPerson[0]} who enjoys eating ${typeOfPerson[1]}`)
}

produceMessage(typeOfPerson)

/*
- You are a sillyType starSign who loves favouriteFood
*/ 

// print the message 
