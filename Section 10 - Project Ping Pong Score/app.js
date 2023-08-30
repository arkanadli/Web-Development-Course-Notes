const btnPlus1 = document.querySelector('#plusPlayer1');
const btnPlus2 = document.querySelector('#plusPlayer2');
const btnReset = document.querySelector('#reset');
const scores = document.querySelectorAll('h2 span');
const target = document.querySelector('select')
const searchScore = function (id) {
    const score = document.querySelector(`#${id}`);
    return score;
}

const addScore = function (id) {
    const scorePlayer = searchScore(id);
    score = parseInt(scorePlayer.innerText);
    score += 1;
    scorePlayer.innerText = score;
    if (score >= goalScore()) {
        playerWin(id);
    }
}

const resetScore = function () {
    for (score of scores) {
        btnPlus1.removeAttribute('disabled')
        btnPlus2.removeAttribute('disabled')
        score.classList.remove('win', 'lose')
        score.innerText = 0;
    }
}

const goalScore = function () {
    return parseInt(target.value);
}

const playerWin = function (id) {
    for (score of scores) {
        if (score === searchScore(id)) {
            score.classList.toggle('win')
        } else {
            score.classList.toggle('lose')
        }
    }
    btnPlus1.toggleAttribute('disabled')
    btnPlus2.toggleAttribute('disabled')
}



btnPlus1.addEventListener('click', function () {
    addScore('scorePlayer1');
});

btnPlus2.addEventListener('click', function () {
    addScore('scorePlayer2');
});

btnReset.addEventListener('click', function () {
    resetScore();
})

target.addEventListener('change', function () {
    goalScore();
    resetScore();
})



