const jokes = [
    "Девушка вынашивает ребенка 9 месяцев - я вынес его с одного удара.",
    "Почему карликам нельзя ходить в казино? - потому что ставки слишком высокие.",
    "Какую инструкцию не любят инвалиды? - пошаговую.",
    "Знаешь как посылают послов из других стран?-Посол нахуй отсюда"
]

const jokesTextElement = document.getElementById('joke-text');
const getJokeBtn = document.getElementById('get-joke-btn');

function getRandomJoke(){
    const randomIndex =
Math.floor(Math.random()* jokes.length);
    return jokes[randomIndex];
}

getJokeBtn.addEventListener('click', function(){
    const newJoke = getRandomJoke();
    jokesTextElement.textContent= newJoke
})
