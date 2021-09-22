// var a = ['dog', 'cat', 'hen']
// a[100] = 'fox'
// console.log(a[100])

// - Make a game of rock,paper, and scissors in a form of JS function.
// - You input your choice in the parameter of the function in a form of string, while the function will return a random choice.
// - The return of the fucntion must be according to the rule(ie. rock beats scissors, scissors beats paper, paper beats rock, and same choice will result a tie)
// - when you put a string other than rock, paper, or scissors as the arguement, it will return an error "(string) is not part of the game!"
// - when you put something other than string as the arguement, it will return an error "please input rock, paper, or scissors only!"


// console.log(math.floor(math.random(suit.length)))

// const suit = ['Rock', 'Paper', 'Scissor']

// const Computer = Math.floor(Math.random() * suit.length)
// console.log(suit[Computer])

function janken(input) {
    const suit = ['Rock', 'Paper', 'Scissor']

    const Computer = Math.floor(Math.random() * suit.length)
    // console.log(suit[coba])
    if (input == 'Rock' && suit[Computer] == 'Rock') {
        return 'tie'
    } else if (input == 'Rock' && suit[Computer] == 'Paper') {
        return 'You lose, Paper beats Rock'
    } else if (input == 'Rock' && suit[Computer] == 'Scissor') {
        return 'You win, Rock beats Scissor'
    } else if (input == 'Paper' && suit[Computer] == 'Paper') {
        return 'tie'
    } else if (input == 'Paper' && suit[Computer] == 'Scissor') {
        return 'You Lose, Scissor beats Paper'
    } else if (input == 'Paper' && suit[Computer] == 'Rock') {
        return 'You Win, Paper beats Rock'
    } else if (input == 'Scissor' && suit[Computer] == 'Scissor') {
        return 'tie'
    } else if (input == 'Scissor' && suit[Computer] == 'Paper') {
        return 'You win, Scissor beats Paper'
    } else if (input == 'Scissor' && suit[Computer] == 'Rock') {
        return 'You lose, Rock beats Scissor'
    } else if (typeof input!=='string'){
        return "please input rock, paper, or scissors only!"
    } else {
        return `${input} is not part of the games`
    }
}

    console.log(janken(['']))