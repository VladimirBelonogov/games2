const generateRandomNumbers = () => {
    return Math.round(Math.random() * 100);
}

const isEven = (number) => {
    return number % 2 === 0;
}

const startRound = () => {
    const randomNumber = generateRandomNumbers();
    const answer = prompt(`${name},Является ли число ${randomNumber} чётным? Ответь "Да" или "Нет"`);
    const correctAnswer = isEven(randomNumber) ? 'да' : "нет";

if (answer.toLowerCase() === correctAnswer){
    alert('Ответ правильный!');
    return true;
} else {
    alert (`Ответ неправильный! Правильный ответ : '${correctAnswer}'`);
    return false;
}
}
const name = prompt('Как тебя зовут?');
alert(`Привет,${name}, теперь я знаю твоё имя и буду его использовать в грязных целях!!!`);
for (let i = 0; i < 3; i++){
    const isCorrect = startRound();
    if (!isCorrect) {
        alert('Я с даунами не играю.... Для тебя игра окончена.');
        break;
    }
    
}




