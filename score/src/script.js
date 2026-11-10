const subjects = ["国語", "数学", "英語"];

const errorMessage = document.getElementById("errorMessage");
const calcButton = document.getElementById("calcButton");
const sumPoint = document.getElementById("sumPoint");
const averagePoint = document.getElementById("averagePoint");

for (let i = 0; i < subjects.length; i++) {
    const scoreInput = document.getElementById("score" + i);
    const result = document.getElementById("result" + i);

    scoreInput.addEventListener("input", () => {
        const score = Number(scoreInput.value);
        if (score < 0 || 100 < score) {
            errorMessage.textContent = "エラー：０～１００の間で入力してください";
            scoreInput.value = 0;
            result.textContent = judge(scoreInput.value);
            return;
        }
        errorMessage.textContent = "";
        result.textContent = judge(score);
    })
}

calcButton.addEventListener("click", () => {
    let total = 0;
    for (let i = 0; i < subjects.length; i++) {
        const score = Number(document.getElementById("score" + i).value);
        total += score;
    }
    sumPoint.textContent = total;
    averagePoint.textContent = (total / subjects.length).toFixed(1);
})

function judge(score) {
    if (60 <= score) {
        return "合格";
    } else {
        return "不合格";
    }
}