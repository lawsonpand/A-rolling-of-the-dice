let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//let rollingDice = document.getElementById("#roll")
//with let sumResult = document.getElementById("#result")

// Work Zachary kline on 6-1-2021 with class 


rollBtn = document.getElementById("roll")
resultDiv = document.getElementById("result")
graphDiv = document.getElementById("graph")
rollDiv = document.getElementById("roll1000")




// Your Code Here!
function rollingDice() {
    return Math.floor(Math.random() * 6) + 1
}

function rollingTwoDices() {
    let diceOne = rollingDice()
    let diceTwo = rollingDice()
    let sum = diceOne + diceTwo
    diceRoll(sum)
    return sum

}
function diceRoll(sum) {
    resultDiv.innerHTML = `I rolled a ${sum}!`
    results[sum] += 1
    totalResults()
    
}

rollBtn.addEventListener("click", rollingTwoDices)

function totalResults() {
    graphDiv.innerHTML=""
    for (let index = 0; index < results.length; index++) {
        if (results[index] !== null) {
            let graph = document.createElement('div');
            graph.classList.add("rollbox");
            graph.innerHTML = `your rolled ad ${index}: ${results[index]} times`
            graphDiv.append(graph)
        } 
    }
}

function rollUp(){
    for (let index = 0; index <= 1000; index++)
    rollingTwoDices() 
}
rollDiv.addEventListener("click",rollUp)

//  let button = document.getElementById("resetButton") 
//  button.addEventListener("click", resetBox)
