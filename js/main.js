const red1 = document.querySelector('.light1 > div[name=red]');
const yellow1 = document.querySelector('.light1 > div[name=yellow]');
const green1 = document.querySelector('.light1 > div[name=green]');
const count1 = document.querySelector('.light1 > .count');
const red2 = document.querySelector('.light2 > div[name=red]');
const yellow2 = document.querySelector('.light2 > div[name=yellow]');
const green2 = document.querySelector('.light2 > div[name=green]');
const count2 = document.querySelector('.light2 > .count');

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

// const blinkGreen = (colordiv3) => {
    
// };

const redt = (count) => {
    count.classList.remove('greentext');
    count.classList.add('redtext');
}

const greent = (count) => {
    count.classList.remove('redtext');
    count.classList.add('greentext');
}

const delay = 10000;
let id;
const delayshag = delay + 1000;

const timer = (count, colort, delayshag) => {
    delayshag = delayshag - 1000;
    if (delayshag>0) {
            id = setTimeout(timer, 1000, count, colort, delayshag);
            count.innerHTML = delayshag/1000;    
    } else {
        count.innerHTML = '--';  
        clearTimeout(id);
        return;
    }  
};
                        
const render = () => {
    setTimeout(() => timer(count1, redt(count1), delayshag), delay);
    setTimeout(() => red(red1, yellow1, green1), delay);       
    setTimeout(() => redyellow(red1, yellow1, green1), delay+10000);
    setTimeout(() => timer(count1, greent(count1), delayshag), delay+20000);
    setTimeout(() => green(red1, yellow1, green1), delay+20000);
    setTimeout(() => black(green1), delay+26000);
    setTimeout(() => green(red1, yellow1, green1), delay+27000);
    setTimeout(() => black(green1), delay+28000);
    setTimeout(() => green(red1, yellow1, green1), delay+29000);
    setTimeout(() => yellow(red1, yellow1, green1), delay+30000);

    setTimeout(() => timer(count2, greent(count2), delayshag), delay);
    setTimeout(() => green(red2, yellow2, green2), delay);
    setTimeout(() => black(green2), delay+6000);
    setTimeout(() => green(red2, yellow2, green2), delay+7000);
    setTimeout(() => black(green2), delay+8000);
    setTimeout(() => green(red2, yellow2, green2), delay+9000);
    setTimeout(() => yellow(red2, yellow2, green2), delay+10000);
    setTimeout(() => timer(count2, redt(count2), delayshag), delay+20000);
    setTimeout(() => red(red2, yellow2, green2), delay+20000);
    setTimeout(() => redyellow(red2, yellow2, green2), delay+30000);
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