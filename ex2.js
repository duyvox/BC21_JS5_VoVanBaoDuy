function getSum(){
    const x = document.getElementById('txt-x').value*1;
    const n = document.getElementById('txt-n').value*1;
    let sum = 0;
    for(let i = 1; i <= n; i++)
        sum += Math.pow(x, i);
    document.getElementById('ex2-result').innerText = sum
}