// selectors
const phoneDecrement = document.getElementById('phone-decrement');
const phoneIncrement = document.getElementById('phone-increment');
const caseDecrement = document.getElementById('case-decrement');
const caseIncrement = document.getElementById('case-increment');
const totalCost = document.getElementById('totalCost');
const tax = document.getElementById('tax');
const grandTotal = document.getElementById('grandTotal');

let price;

let phonePrice = 1219;
let casePrice = 59;

const handelCountChange = (product, isIncrease) => {

    const input = document.getElementById(product + '-input');
    const productPrice = document.getElementById(product + '-price');

    let count = parseInt(input.value);
    let newCount = 1;

    if(isIncrease === true) {
        newCount = count + 1;
    } else if(isIncrease === false && count > 0) {
        newCount = count - 1;
    } else {
        newCount = 0;
    };

    input.value = newCount;

    if (product === 'phone') {
        price = 1219 * newCount;

        phonePrice = price;
    };
    if (product === 'case') {
        price = 59 * newCount;

        casePrice = price;
    };

    productPrice.innerText = price;

    calcTotal();
};

const calcTotal = () => {
    let totalCostAmount = phonePrice + casePrice;
    totalCost.innerText = totalCostAmount;
    let taxAmount = Math.round(totalCostAmount * 0.01);
    tax.innerText = taxAmount;
    let grandTotalAmount = totalCostAmount + taxAmount;
    grandTotal.innerText = grandTotalAmount;
};

phoneIncrement.addEventListener('click', () => {
    handelCountChange('phone', true);
});

phoneDecrement.addEventListener('click', () => {
    handelCountChange('phone', false);
});

caseIncrement.addEventListener('click', () => {
    handelCountChange('case', true);
});

caseDecrement.addEventListener('click', () => {
    handelCountChange('case' ,false);
});