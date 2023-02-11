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

const redyellow = (colordiv1, colordiv2, colordiv3) => {
    colordiv1.classList.add('red');
    colordiv2.classList.add('yellow');
    colordiv3.classList.remove('green');
};

const green = (colordiv1, colordiv2, colordiv3) => {
    colordiv1.classList.remove('red');
    colordiv2.classList.remove('yellow');
    colordiv3.classList.remove('black');
    colordiv3.classList.add('green');
};

const black = (colordiv3) => {
    colordiv3.classList.remove('green');
    colordiv3.classList.add('black');
};

// const blinkGreen = () => {

// };

const render = () => {
    setTimeout(() => red(red1, yellow1, green1), 10000);
    setTimeout(() => redyellow(red1, yellow1, green1), 20000);
    setTimeout(() => green(red1, yellow1, green1), 30000);
    setTimeout(() => black(green1), 36000);
    setTimeout(() => green(red1, yellow1, green1), 37000);
    setTimeout(() => black(green1), 38000);
    setTimeout(() => green(red1, yellow1, green1), 39000);
    setTimeout(() => yellow(red1, yellow1, green1), 40000);

    setTimeout(() => green(red2, yellow2, green2), 10000);
    setTimeout(() => black(green2), 16000);
    setTimeout(() => green(red2, yellow2, green2), 17000);
    setTimeout(() => black(green2), 18000);
    setTimeout(() => green(red2, yellow2, green2), 19000);
    setTimeout(() => yellow(red2, yellow2, green2), 20000);
    setTimeout(() => red(red2, yellow2, green2), 30000);
    setTimeout(() => redyellow(red2, yellow2, green2), 40000);
};

render();

setInterval( () => {
    render();
}, 40000);






//setInterval(() => yellow(red1, yellow1, green1), 5000);
//setInterval(() => red(red1, yellow1, green1), 10000);
//setInterval(() => redyellow(red1, yellow1, green1), 10000);
//setInterval(() => green(red1, yellow1, green1), 10000);
//setInterval(() => yellow(red1, yellow1, green1), 10000);

//setInterval(() => yellow(red2, yellow2, green2), 5000);
// setInterval(() => green(red2, yellow2, green2), 10000);
// setInterval(() => yellow(red2, yellow2, green2), 20000);
// setInterval(() => red(red2, yellow2, green2), 30000);
// setInterval(() => redyellow(red2, yellow2, green2), 40000);