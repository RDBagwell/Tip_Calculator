const percent = document.getElementById('percent');
const amount = document.getElementById('amount');
const calculateBtn = document.getElementById('calculate');
const total = document.getElementById('total');

function addTip(x) {
    x = x/100;
    return function (y) {
        const p = x * y;
        return {tip: p, total: p + y };
    }
}

calculateBtn.addEventListener('click', e=>{
    e.preventDefault();
    const calculatTip = addTip(+percent.value);
    const data = calculatTip(+amount.value)
    total.innerHTML = `
    <div class="tip">
        <p>Tip: $${data.tip.toFixed(2)}</p>
    </div>
    <div class="totalAmount">
        <p>Total: $${data.total.toFixed(2)}</p>
    </div>`;
})
