//alert(3)
let i, numArr;
function init() {
    i = 0;
    numArr = [];
    document.getElementById("calc-field").value = "";
}



document.querySelector('.numbers').addEventListener('click', function () {

    //Setting up numbers buttons in calc  
    let eventClassName = event.target.className;
    let numButton = parseInt(eventClassName.replace('button-', ''));
    if (numButton || numButton === 0) {

        numArr[i] = numButton;
        i++;
        document.getElementById("calc-field").value = numArr.join("");
        //console.log(numButton);
        //console.log(numArr);
    }

})

document.querySelector('.calc-func').addEventListener('click', function () {
    //Setting up arithmetic func of calc
    let eventClassName = event.target.id.split("_");
    numArr.push(eventClassName[1]);
    i++;
    document.getElementById("calc-field").value = numArr.join("");
    console.log(eventClassName[1])
})

document.querySelector('.calc-button').addEventListener('click', function () {
    //Setting up arithmetic func of calc
    let str;
    str = document.getElementById("calc-field").value

    //N Factorial func
    if (str.includes('!')) {
        let nFactorial = parseInt(str.replace(/\!/g, ''));
        function getFactorial(nFactorial) {
            if (nFactorial === 1) {
                return 1;
            }
            else {

                return nFactorial * getFactorial(nFactorial - 1);
            }
        }
        //alert(getFactorial(nFactorial))
        document.getElementById("calc-field").value = getFactorial(nFactorial);
        i = 0;
        numArr = [];
    } else {
        document.getElementById("calc-field").value = eval(document.getElementById("calc-field").value);
        console.log(eval(document.getElementById("calc-field").value));
        i = 0;
        numArr = [];
    }
})

document.querySelector('.refresh').addEventListener('click', function () {
    //Refresh all data

    init();


})

document.getElementById("calc-field").addEventListener("keydown", function (e) {
    // Backspace event listener
    if (e.key == 'Backspace') {
        numArr.pop();
    }
});

init()