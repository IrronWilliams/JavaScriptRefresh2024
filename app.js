//alert('YAAY!!')
//console.log(3+4)

let rating = 33

if (rating ===3){
    console.log("you are awesome")
}

else if(rating === 2){
    console.log('meets expectations')
}
else if(rating === 1){
    console.log('needs improvement')
}
else (console.log('all other'))


let num = 41
if (num % 2 ===0){
    console.log('positive number')
}

let numOdd = 52
if (numOdd % 2 !== 0){
    console.log('Odd number')
}

let highScore = 15000
let userScore = 1600

if(userScore > highScore){
    console.log(`Your score of ${userScore} is higher then the current score of ${highScore}`)
    highScore = userScore
}

else(console.log(`Your score of ${userScore} did not beat current high score of ${highScore}`))

//nesting conditionals
//check if pw is 6 charachter long and if contains spaces display message pw cannot contain messages
//else display message pw not long enouph 

// let password = 'he'
// if (password.length >=6){
//     if(password.indexOf(" ")){
//         console.log(`password ${password} contains a space`)
//     }
// }
// else(console.log(`password ${password} contains ${password.length} is not long enou`))

//truthy/falsey

let loggedInUser = "."
if(loggedInUser){
    console.log('user logged in')
}
else{
    console.log('please log in')
}

//using && operator to combine 2 pieces of logic into a singal statement
let password = 'chickenGal'
if(password.length>=6 && password.indexOf(" ") === -1){
    console.log('valid pw')
}
else(console.log("invalid pw"))

//check if number is between 1 and 10
let number = 1999
if(number >=1 && number <=10){
    console.log(`the number ${number} is between 1 and 10`)
}
else{
    console.log(`${number} is not between 1 and 10`)
}

//children under 6 and seniors admitted free
let age = 89
if(age <=6 || age>=65){
    console.log('free admission')
}
else{
    console.log('admission not free')
}

//chaining multiple ORs 
let color = 'orange'
if (color === 'violet' || color === 'purple' || color ==='lilac'){
    console.log('shades of purple of beatiful')
}
else{
    console.log('this is not a varianet of purple')
}

//checking if user is logged in
let loggedInUser2
if(!loggedInUser2){
    console.log('you are being removed from page')
}

//only sell 2 flavors grape and cherry. all other flavors receive do not sell messalge
let flavor = 'strawberry'
if(flavor !== 'grape' && flavor !=='cherry'){
    console.log('we do not have that flavor')
}

if(!(flavor==='grape' || flavor==='cherry')){
    console.log('we dont carry that flavor....negate')
}

//check if number 7 is lucky
let numSeven = 7
if (numSeven ===7){
    console.log(`${numSeven} is a lucky number`)
}
else{
    console.log(`${numSeven} is not a lucky number`)
}

//with ternary
numSeven === 7 ? console.log('lucky number - concat') : console.log('not lucky number - concat')

//using ternary to assing a value to a variable. if status on, color red, else color green

let stat = 'online'
let colorr;

if(stat === 'online'){
    colorr ==='green'
    console.log(`stat = ${stat} & color = green`)
}
else{
    console.log(`stat = ${stat} & color = red`)
}

let color2 = stat === 'offline' ? colorr = 'red' : 'green'
console.log(color2, 'with ternary')

let shoppingList = ['chips', 'cereal']
console.log(shoppingList)

shoppingList[1] = 'wheaties'
console.log(shoppingList)

shoppingList[shoppingList.length] = 'ice'
console.log(shoppingList)

let songList = [
    'Poison',
    'Alone',
    "Nasty",
    'Heartbreak'
]

console.log(songList)
songList.push('Hello')
console.log(songList)

let removedSong = songList.pop()
console.log(removedSong, 'removed song')
console.log(songList)

let todo = [
    'eat',
    'sleep'
    ,'exercise',
    'drink'
]
console.log(todo)

let removedItem = todo.shift()
console.log(removedItem, 'unshifted item')
console.log(todo)

todo.unshift('journal', 'meditate')
console.log(todo)

let fruits = ['apple', 'orange']
let veggies = ['spinich', 'peas']
let meats = ['chix', 'turkey']

console.log(fruits, veggies, meats)

//order matters
let AllFoodFruit = fruits.concat(meats, veggies)
let AllFoodMeat = meats.concat(veggies, fruits)
console.log('prioritze fruit=', AllFoodFruit, 'prioritize meat = ', AllFoodMeat)

let ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter'
]

console.log(ingredients.indexOf('water', 'indexOf'))
console.log(ingredients.includes('water', 'includes'))
if (ingredients.includes('cheese')){
    console.log('contains cheese. Do not eat')
}

//reviewed loops 8/19
