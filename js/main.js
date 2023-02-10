const red1 = document.querySelector('.light1 > div[name=red]');
const yellow1 = document.querySelector('.light1 > div[name=yellow]');
const green1 = document.querySelector('.light1 > div[name=green]');
const red2 = document.querySelector('.light2 > div[name=red]');
const yellow2 = document.querySelector('.light2 > div[name=yellow]');
const green2 = document.querySelector('.light2 > div[name=green]');

const red = (colordiv1, colordiv2, colordiv3) => {
    colordiv1.classList.add('red');
    colordiv2.classList.remove('yellow');
    colordiv3.classList.remove('green');
};

const yellow = (colordiv1, colordiv2, colordiv3) => {
    colordiv1.classList.remove('red');
    colordiv2.classList.add('yellow');
    colordiv3.classList.remove('green');
};

const green = (colordiv1, colordiv2, colordiv3) => {
    colordiv1.classList.remove('red');
    colordiv2.classList.remove('yellow');
    colordiv3.classList.add('green');
};

setInterval(() => yellow(red1, yellow1, green1), 5000);
setInterval(() => red(red1, yellow1, green1), 20000);
setInterval(() => yellow(red1, yellow1, green1), 30000);
setInterval(() => green(red1, yellow1, green1), 40000);
setInterval(() => yellow(red1, yellow1, green1), 45000);


setInterval(() => yellow(red2, yellow2, green2), 5000);
setInterval(() => green(red2, yellow2, green2), 20000);
setInterval(() => yellow(red2, yellow2, green2), 30000);
setInterval(() => red(red2, yellow2, green2), 40000);
setInterval(() => yellow(red2, yellow2, green2), 45000);