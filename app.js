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
//reviewed functions 8/20

let randomNum = Math.floor(Math.random() *6) +1
console.log(randomNum, 'random number')

console.log(typeof(5), 'typeof numb')
console.log(typeof('he'), 'typeof string')
console.log(parseInt('245days'), 'retrieving num')

//always use triple equal for comparison ===

let ages =32
if(ages === 3){
    console.log(`you are ${ages}`)
}
else{
    console.log('you are NOT 3')
}

let colors = ['red', 'blue', 'orange', 'pink', 'yellow']
console.log(colors, 'initial colors')
console.log(colors.length, 'length of colors')
console.log(colors[2], 'item at position 2')
console.log(colors.length-1, 'return last indexin array')
colors[3] = 'violet'
console.log(colors, 'colors update')
console.log(colors[colors.length-1] = 'black', 'updating last color')
console.log(colors)

let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R']
console.log(letters, 'initial letters')
console.log(letters.reverse(),  'letters reversed')
console.log(letters.join(' '), 'joining letters from arrary')

let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortise']
console.log(animals, 'here are animals')
let swimmers = animals.slice(0, 3)
let bearsPlus = animals.slice(3)
let lastAnimal = animals.slice(-1)
let last3Animals = animals.slice(-3)
let whaleLizard = animals.slice(-4,-3)
console.log(swimmers, 'swimmers')
console.log(bearsPlus, 'everything starting from bear and after')
console.log(lastAnimal, 'last animal')
console.log(last3Animals, 'last3Animals')
console.log(whaleLizard, 'from whale to lizard')

let animalCopy = animals.slice()
console.log(animalCopy, 'copy of animals')

animals.push('panther')
console.log(animals, 'original animals')
console.log(animalCopy, 'animal copy')

let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
console.log(letter, 'initial letter')
updatedLetter = letter.splice(0,0,100)
console.log(updatedLetter, 'updated letter')
console.log(letter, 'added 100')

let remove100 = letter.splice(0,1)
console.log(remove100, 'removing 100')
console.log(letter, 'confirming 100 removed')

letter.splice(letter.length, 0, 'h')
console.log(letter, 'adding h to end')

console.log(letter.length, 'length of letter')

let removeMiddle = letter.splice(2, 2, "C", "D")
console.log(removeMiddle, 'removed c, d')
console.log(letter, 'confirming caps added')


const animalPairs = [
    ['doe', 'buck'],
    ['ewe', 'ram'],
    ['peahen', 'peacock']
]
// console.log(animalPairs)
let peacock = animalPairs[2][1]
console.log(peacock, 'found peacock')

animalPairs[0][2] = 'stag'
console.log(animalPairs[0][2])


const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue:'#30336b'
}

console.log(palette)
palette.pink = 'pink'
console.log(palette)
palette.seven = 7

console.log(palette)
palette.seven +=3
console.log(palette)

const student = {
    'firstName': 'Glenn',
    'lastName': 'Jones',
    'talents': ['History', 'Language'],
    exams: {
        'midterm': 92,
        'final': 78
    }
}

let finalGrade = (student.exams.midterm+student.exams.final)/2
console.log(finalGrade)

let nums = [1, 2, 3]
let mystery = [1, 2, 3]
console.log(nums === mystery)
let moreNums = nums
console.log(moreNums === nums)
console.log(nums, 'numsArray', moreNums, 'moreNumsArray')
nums.push(11)
console.log(nums, 'numsArray', moreNums, 'moreNumsArray')
moreNums.push('11')
console.log(nums, 'numsArray', moreNums, 'moreNumsArray')


const user = {
    userName:   'gwizz4nbs',
    email: 'gry@msn',
    notifications: [1]

}

// console.log(user.notifications.length ===0)

// for(let i=1; i<=10; i++){console.log('Hello')}
// for(let i=1; i<=10; i++){console.log('hello', i)}
// for(let i=1; i<=10; i+=3){console.log('hey', i)}

// for(let i=1; i<=20; i++){
//     console.log(`${i} x ${i} = ${i*i}`)
// }

// for(let i=50; i>=0; i-=2){console.log(i, 'declining')}

// let animalss = ['lions', 'tigers', 'bears']
// for(let i=0; i<=animalss.length-1; i++){
//     console.log(`${i}-${animalss[i]}`)
// }

// const myStudents = [
//     {firstName: 'Zeus', grade: 87},
//     {firstName: 'Artemis', grade: 97},
//     {firstName: 'Hera', grade: 77},
//     {firstName: 'Apollo', grade: 92}

// ]
// for(let i=0; i<=myStudents.length-1; i++){console.log(i, myStudents[i])}
// for(let i=0; i<=myStudents.length-1; i++){
//     let student = myStudents[i]
//     console.log(`${student.firstName} - ${student.grade}`)
// }

// let totalGrade =0
// for(let i=0; i<=myStudents.length-1; i++){
//     let student = myStudents[i]
//     totalGrade += student.grade
//     console.log(student, totalGrade)

// }
// console.log(totalGrade, 'finalGrade')
// console.log(totalGrade/myStudents.length, 'avg grade')

// const word = 'stressed'
// for(i=0; i<=word.length; i++){console.log(word[i])}
// for(let i=word.length-1; i>0; i--){console.log(word[i])}
// let reverseWord = ''
// for(let i=word.length-1; i>0; i-- ){
//     reverseWord +=word[i]
//     console.log(reverseWord)
// }
// console.log(reverseWord)
// for(let i=1; i<=20; i++){
//     console.log('Outerloop', i)
//     for(let j=10; j>0; j-=2){
//         console.log('  Inner loop', j)
//     }
// }

// const gameBoard = [
//     [4, 32, 8, 4],
//     [64, 8, 32,2],
//     [8, 32, 16, 4],
//     [2, 8, 4, 2],
// ]
// for(let i=0; i<gameBoard.length; i++){console.log(i, gameBoard[i])}

// for(let i=0; i<gameBoard.length; i++){
//     let row = gameBoard[i]
//     console.log(row, 'row')
//     for(let j=0; j<row.length; j++){
//         console.log(row[j])
//     }
// }
// let totalScore = 0
// for(let i=0; i<gameBoard.length; i++){
//     let row = gameBoard[i]
//     for(let j=0; j<row.length; j++){
//         totalScore += row[j]
//         console.log(totalScore)
//     }
// }
// console.log(totalScore, 'totalScore')
// let totalGame = 0
// for(let i=0; i<=gameBoard.length; i++){
//     let row = gameBoard[i]
//     console.log(row)
//     for(let j=0; j<=row.length; j++){
//         totalGame += row[j]
//         console.log(totalGame)
//     }
// }
// console.log(totalGame)

// let numz=0
// while (numz<10){
//     console.log(numz, 'while loop')
//     numz++
// }
// for(let i=0; i<10; i++){console.log(i, 'for loop')}

// const target = Math.floor(Math.random() *10)
// let guess = Math.floor(Math.random() *10)
// console.log('target=', target)
// while(guess !== target){
//     console.log(`target: ${target}, guess: ${guess}`)
//     guess = Math.floor(Math.random()*10)
//     // console.log(guess)
// }

// console.log(`Target: ${target}, Guess: ${guess}`)

// let subreddits = ['soccer', 'popheads', 'cringe', 'books']
// for(let i=0; i<subreddits.length; i++){console.log(subreddits[i], 'for loop')}
// for(let sub of subreddits){console.log(sub, 'for of loop')}
// for (let char of 'cockadoodledoo'){console.log(char)}

// let magicSquare = [ [2,7,6], [9,5,1], [4,3,8] ]
// for(let i=0; i<magicSquare.length; i++){
//     let row =magicSquare[i]
//     let total =0
//     for(j=0; j<row.length; j++){
//         total += row[j]
//     }
//     console.log(`${row} summed to ${total}`)
// }

// for(let row of magicSquare){
//     let total = 0
//     for(let num of row ){
//         total += num
//         // console.log(total)
//     }

//     console.log(row, total)
// }

// const words1 = ['mail', 'milk', 'bath', 'black']
// const words2 = ['box', 'shake', 'tub', 'berry']
// for(let i=0; i<words1.length; i++){
//     console.log(`${words1[i]} - ${words2[i]}`)
// }

let movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 9,
    'In Bruges': 9,
    Amadeus: 10,
    'Kill Bill': 8,
    'Little Miss Sunshine': 8.5,
    X: 7.5
}

// for(let movie of Object.keys(movieReviews)){console.log(movie)}

// let ratings = Object.values(movieReviews)
// let totalRating = 0
// for(let rating of ratings){
//     totalRating +=rating
//     // console.log(rating, ratings)
// }
// console.log(ratings)

//for of = arrays/strings. for in = objects
// const jeopardyWinnings = {
//     regularPlay :  2522700,
//     watsonChallenge:  300000,
//     tournamentOfChampions :  500000,
//     battleOfTheDecades :  100000,
// }

// for (let prop in jeopardyWinnings){
//     console.log(prop)
//     console.log(jeopardyWinnings[prop])
// }
// let totalJep = 0
// for(let prop in jeopardyWinnings){
//     totalJep += jeopardyWinnings[prop]
//     console.log(prop)
// }
// console.log(totalJep, 'total winnings')

// function rollDie(){
//     let roll = Math.floor(Math.random()*6) +1
//     console.log(`Rolled: ${roll}`)
// }
// rollDie()
// rollDie()
// rollDie()
// rollDie()
// rollDie()

// }


// function throwDice(numRolls){
//     for(let i=0; i<numRolls; i++){
//         rollDie()
//     }
// }

// throwDice(6)

//can only return just 1 value from function. could collect multiple values in array or string
function addNums(x, y){
    // console.log(x, y)
    // return x + y
    // return [x, y]
    return `${x}, ${y}`
}

let answerAddNums = addNums(15,10)
// console.log('answer is', answerAddNums)

function isPurple(color){
    if(color.toLowerCase() === 'purple'){
        return true
    }
    return false
}

let answerIsPurple = isPurple('purple')
// console.log(answerIsPurple, 'true or false')

//if returning a boolean, can write return statement on a single line
function isPurple2(color){
    return color.toLowerCase() === 'purple'
}

let answerIsPurple2 = isPurple('ORANGE')
// console.log(answerIsPurple2, 'true or false')

function containsPurple(arr){
    for(let a of arr){
        if(a === 'magenta' || a === 'purple'){
            return true
        }
    }
    return false
}


let colorList = ['blue', 'pink', 'magenta2', 'purple2']

let answerContainsPurple = containsPurple(colorList)
console.log(answerContainsPurple, 'contains purple variant?')


//for of loops arrays/strings. for in loops over objects

// function isValidPassword(pw, user){
//     if(pw.length >=8 && pw.indexOf(user) === -1 && pw.indexOf(" ") === -1){
//         return true
//     }
//     return false
// }


function isValidPassword(pw, user){
    if(pw.length <8){
        return false
    }
    if (pw.indexOf(" ") !== -1){
        return false
    }
    if(pw.indexOf(user) !== -1){
        return false
    }
    return true

}
let answerIsValidPassword = isValidPassword('chicken12', 'fadfdis')
console.log(answerIsValidPassword, 'valid password ')

function averageNumbers(arr){
    let totalNums = 0
    for(let a of arr){
        totalNums += a
        
    }
    return totalNums/arr.length
}

const arrayNums = [75, 76, 80, 95, 100]
let answerAverageNumbers = averageNumbers(arrayNums)
console.log(answerAverageNumbers, 'avg num')

// function isPangram(sentence){
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     //remove spaces from sentence --> join
    
//     //loop thru sentence
//     for(let char of sentence){
//         if(char.indexOf(alphabet)){
//             return 'This is a Pangram'
//         }
//     }
//     //compare sentence to alphabet
//      return 'This is not a pangram'

// }

function isPangram(sentence){
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(sentence.indexOf(char) === -1){
            return false
        }
    }
    return true
}
let sentence = 'the five boxing wizards jump quickly'
let answerIsPangram = isPangram(sentence)
console.log(answerIsPangram, '     ----pangram?')



function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() *13)
    console.log(randomNumber, 'randomCard Function')
    return randomNumber

}


function getCard(){

    let randomNumber= generateRandomNumber()
    // console.log(randomNumber, 'logging random number')
    // return randomNumber

    const cardDeck = {
        'K':10,
        'Q':10,
        'J':10,
        '10':10,
        'A':1,
        '2':2,
        '3':3,
        '4':4,
        '5':5,
        '6':6,
        '7':7,
        '8':8,
        '9':9
    }
    let cardValues = Object.keys(cardDeck)
    // console.log(cardValues, 'cardvalues')
    // console.log(cardValues[cardValues.length -1], 'guesss')

    // let randomCard = cardValues[randomNumber]
    // let cardValue = cardDeck[randomCard]

    let randomCard =0
    for(let i=0; i<cardValues.length-1; i++){
        randomCard = cardValues[randomNumber]
        // console.log(randomCard, 'randomCardfromdeck')

    }

    // console.log(cardValues, 'card keys')
    // let playerCard = cardDeck[randomNumber]

    return `Player picked card ${randomCard} with a value of ${cardDeck[randomCard]}`

    // console.log(randomCard, 'this is randomcard')
    
}

let playerMessage = getCard()
// console.log(playerMessage)




 
// }

// let getRandCard = getCard()
// console.log(getRandCard, 'calling random card')






// let funcRandomCard = randomNumber()
// console.log(funcRandomCard, 'functionRandomCard')

// let playingCards = Object.keys(cardDeck)

// let cardValues = Object.values(cardDeck)
// console.log(playingCards, 'playingCards')
// console.log(cardValues, 'cardValues')
// console.log(randomCard, randomCard)


// for(let card in cardDeck){
//     console.log(card)
    
// 


//scope is variable visbility 
let bird = 'mandarin duck'
console.log(bird, 'bird before function')

function birdWatch(){
    let bird = 'golden phesant'
    console.log(bird, 'bird in function')
}
birdWatch()
console.log(bird, 'bird after function')

function doubleArr(arr){
    let doubleNums = []
    for(let a of arr){
        doubleNums.push(a*2)
    }
    return doubleNums
}

let doubleArrResults = doubleArr([4,5,6])
console.log(doubleArrResults, 'doubling array of nums')

//Lexical scope. nested functions are lexically bound tot he scope of its parent outer function
//cannot call the inner function outside the parent outer function
function outer(){
    let movie = 'Amadeus'

    function inner(){
        let x = 10
        // let movie = "The Shining"

        function extraInner(){
            // let movie = 'The Color Purple'
            console.log(movie.toUpperCase())
        }
        extraInner()
    }
    inner()
    // console.log(x)
}
// outer()

// function add(x, y){
//     return x+y
// }

// const sum = function(x, y){
//     return x+y
// }
// console.log(add(2, 3), 'regular function add')
// console.log(sum(2,3), 'function expression sum')

function add(x, y){
    return x+y
}

const subtract = function(x,y){
    return x-y
}

function multiply(x,y){
    return x*y
}

const divide = function(x,y){
    return x/y
}

const operations = [add, subtract, multiply, divide]
// console.log(operations, 'logging operations')
// console.log(operations[3](100, 4))

for(let ops of operations){
    let result = ops(30,5)
    // console.log(result)
    // console.log(ops(30,5))
    // return ops(10,5)
    

}

//Higher order functions --> accepts other functions as arguments
function callThreetimes(f){
    f()
    f()
    f()
}
function cry(){
    console.log('Boo hoo Im sad and crying')
}
function rage(){
    console.log('I am raging now!!!')
}
function repeatNTimes(action, num){
    for(let i=0; i<num; i++){
        action()
    }
}

callThreetimes(cry)
callThreetimes(rage)
repeatNTimes(cry, 11)


function pickOne(f1, f2){
    let randomNum = Math.random()
    console.log(randomNum, 'random number')
    if(randomNum <=.5){
        f1()
    }
    else f2()
}

pickOne(cry, rage)
