function getSmallestNumber(){
    let num = 0;
    do{
        num++;
        if((num * (num + 1) / 2) > 10000){
            break;
        }
    }while(true);
    document.getElementById('ex1-result').innerText = num;
}