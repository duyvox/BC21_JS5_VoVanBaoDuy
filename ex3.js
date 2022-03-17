function getFactorial(){
    const num = document.getElementById('txt-giaithua').value*1;
    let fac =1;
    for(var i = 1; i <= num; i++)
        fac *= i;
    document.getElementById('ex3-result').innerText = fac;
}