const percent = document.getElementById('percent');
const amount = document.getElementById('amount');
const calculateBtn = document.getElementById('calculate');
const total = document.getElementById('total');

function addTip(x) {
    x = x/100;
    return function (y) {
        const p = x * y;
        return p + y;
    }
}

calculateBtn.addEventListener('click', e=>{
    e.preventDefault();
    const calculatTip = addTip(+percent.value);
    total.textContent = `Total Due: $${calculatTip(+amount.value).toFixed(2)}`;
})
