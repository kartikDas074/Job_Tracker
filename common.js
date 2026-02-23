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
         if(arr[index]==1)parents[i].classList.remove('hidden');
    }
}
function jobcountchange (id){
    let getjobdet=document.getElementById(id);
    let jobcount=convertnum(getjobdet.innerText);
    getjobdet=document.getElementById('jobcount');
    getjobdet.innerText=convertstr(jobcount);
    return jobcount;
}

function decrese(id){
         let intview=document.getElementById(id);
         let intcount=convertnum(intview.innerText);
         intcount-=1;
         intview.innerText=convertstr(intcount);
}

//show the element based on id+ arr

function show_id(id,arr){
        let jobcount=jobcountchange(id);
        if(jobcount==0){
            let no_job=document.getElementById('nojob');
            no_job.classList.remove('hidden');
            show(arr);
            return;
        }else{
            let no_job=document.getElementById('nojob');
            no_job.classList.add('hidden');
            show(arr);
        }
}