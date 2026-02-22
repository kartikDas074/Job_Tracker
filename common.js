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
    let parent=document.getElementsByClassName('par');
   for (let i = 0; i < parent.length; i++) {
        console.log(parent[i]);
    }
}