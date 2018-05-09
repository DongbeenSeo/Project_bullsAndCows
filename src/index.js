class baseballGame {
    player= [];
    answer = [];
    strike = 0;
    ball = 0;

    randomNumber(n) {
        let len = n;
        this.answer = new Array(len);
        this.answer.fill(0);

        for (let i = 0; i < len; i++) {
            this.answer[i] = Math.floor(Math.random() * 10);
            for (let j = 0; j < i; j++) {
                if (this.answer[i] === this.answer[j]) {
                    i--;
                    break;
                }
            }
        }
        return this.answer;
    }

    check() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.player[i] === this.answer[j]) {
                    if (i === j) {
                        this.strike++;
                    } else {
                        this.ball++;
                    }
                }
            }
        }
    }
}

const game = new baseballGame();

game.randomNumber(3);


const inputNum = document.querySelectorAll('.number');
const trial = document.querySelector('.trial');
const reset = document.querySelector('.reset');

inputNum.addEventListener('input', e => {
    console.log()
})
