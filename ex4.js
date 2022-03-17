function showDiv(){
    const listContainerEl = document.getElementById('ex4-list');
    let divList = "";
    for(let i = 1; i <= 10; i++){
        if(i % 2){
            divList += `<div class="bg-primary" style="width: 50%; height: 100px; margin: 0 auto;"></div>`
        }
        else{
            divList += `<div class="bg-danger" style="width: 50%; height: 100px; margin: 0 auto;"></div>`
        }
    }
    listContainerEl.innerHTML = divList;
}