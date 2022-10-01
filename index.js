function saturdayFun(satString = "roller-skate") {
    return `This Saturday, I want to ${satString}!`
}

function mondayWork(monString = "go to the office") {
    return `This Monday, I will ${monString}.`;
}

function wrapAdjective(symbol = "*") {
    return function innerF(person = "a hard worker") {
        return `You are ${symbol}${person}${symbol}!`;
    }
}
wrapAdjective('||')('a dedicated programmer');