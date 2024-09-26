function saturdayFun(activities = "roller-skate") {
    console.log('This Saturday, I want to roller-skate!');
return `This Saturday, I want to ${activities}!`
}
function mondayWork(activities = "go to the office"){
console.log(`This Monday, I will ${activities}.`);
return `This Monday, I will ${activities}.`
}
function wrapAdjective(flair = "*"){
    return function(adjective = "special"){
return `You are ${flair}${adjective}${flair}!`
    }
}
