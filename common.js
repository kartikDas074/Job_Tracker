function updateinText (stri,cla){
    cla.innerText=stri;
}
function convertnum (stri){
    return parseInt(stri);
}
function convertstr (num){
    return num.toString();
}

function show(arr){
    let parents=document.getElementsByClassName('par');
    for (let i = 0; i < parents.length; i++) {
         parents[i].classList.add('hidden');
    }
   for (let i = 0; i < parents.length; i++) {
         const ind=parents[i].querySelector('.cnt');
         
         let index=convertnum(ind.innerText);
         console.log(index);
         console.log(arr[index]);
         if(arr[index]==1)parents[i].classList.remove('hidden');
    }
}