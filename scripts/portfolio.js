const text = document.querySelector(".writer-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Developer"
    }, 0);
    setTimeout(() => {
        text.textContent = "Problem Solver"
    }, 3000);
    setTimeout(() => {
        text.textContent = "Nonstop learner"
    }, 6000);
}

textLoad();
setInterval(textLoad, 9000);