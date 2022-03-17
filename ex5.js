function printNum(){
    const limit = document.getElementById('txt-num-ex5').value*1;
    let res = "";
    for(let i = 1; i <= limit; i++)
        res += `${i} `;
    document.getElementById('ex5-result').innerText = res;
}