// Code your solutions in this file
function writeCards(array, eventName) {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        let message =  `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`;
        newArray.push(message);
    }
    return newArray;
}

const countDown = i => { while(i >= 0) { console.log(i); i--; }};