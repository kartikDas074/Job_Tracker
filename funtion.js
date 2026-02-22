const accept= new Array(9).fill(0);
const reject= new Array(9).fill(0);
const total =  new Array(9).fill(1);

document.addEventListener("click", function (e) {
  // action for clicking on interview button
  if (e.target.classList.contains("interview")) {
    // 1.parent find
    const par = e.target.closest(".par");
    // 2.toogole 
    const togol=par.querySelector('.tog');
    //3. Update the togole
    if(togol!=null)
    updateinText('INTERVIEW',togol);
    //4. get job's index
    const ind=par.querySelector('.cnt');
    let index=convertnum(ind.innerText);
    //5. update interview count if needed
    let intview=document.getElementById('interview');
    if(accept[index]==0){
        let intcount=convertnum(intview.innerText);
        intcount+=1;
        intview.innerText=convertstr(intcount);
    }
    intview=document.getElementById('reject');
    if(reject[index]==1){
        let retcount=convertnum(intview.innerText);
        retcount-=1;
        intview.innerText=convertstr(retcount);
    }
    //6. Update array
    accept[index]=1;
    reject[index]=0;
      }
   // action for clicking on Reject button 
     if (e.target.classList.contains("reject")) {
    // 1.parent find
    const par = e.target.closest(".par");
    // 2.toogole 
    const togol=par.querySelector('.tog');
    //3. Update the togole
    if(togol!=null)
    updateinText('REJECT',togol);
    //4. get job's index
    const ind=par.querySelector('.cnt');
    let index=convertnum(ind.innerText);
    //5. update interview count if needed
    let intview=document.getElementById('reject');
    if(reject[index]==0){
        let intcount=convertnum(intview.innerText);
        intcount+=1;
        intview.innerText=convertstr(intcount);
    }
    intview=document.getElementById('interview');
    if(accept[index]==1){
        let retcount=convertnum(intview.innerText);
        retcount-=1;
        intview.innerText=convertstr(retcount);
    }
    //6. Update array
    accept[index]=0;
    reject[index]=1;
    }
});
//All job
document.getElementById('Alljob').addEventListener("click",
    function (){
        // get the all job bar
        let idget=document.getElementById('Alljob');
        let pdget=document.getElementById('intjob');
        let cdget=document.getElementById('retjob');
        // color change
        idget.classList.add('change');
        pdget.classList.add('change');
        cdget.classList.add('change');
        pdget.classList.remove('change');
        cdget.classList.remove('change');
        // cheak if any job is available
        let getjobdet=document.getElementById('tot');
        let jobcount=convertnum(getjobdet.innerText);
         getjobdet=document.getElementById('jobcount');
         getjobdet.innerText=convertstr(jobcount);
        if(jobcount==0){
            let no_job=document.getElementById('nojob');
            no_job.classList.remove('hidden');
             show(total);
            return;
        }else{
            let no_job=document.getElementById('nojob');
            no_job.classList.add('hidden');
        }
        
        //show the needed one
        show(total);

    }
)

//Interview
document.getElementById('intjob').addEventListener("click",
    function (){
        // get the all job bar
        let idget=document.getElementById('Alljob');
        let pdget=document.getElementById('intjob');
        let cdget=document.getElementById('retjob');
        
        // color change
         idget.classList.add('change');
        pdget.classList.add('change');
        cdget.classList.add('change');
        idget.classList.remove('change');
        cdget.classList.remove('change');
        // cheak if any job is available
        let getjobdet=document.getElementById('interview');
        let jobcount=convertnum(getjobdet.innerText);
         getjobdet=document.getElementById('jobcount');
         getjobdet.innerText=convertstr(jobcount);
        if(jobcount==0){
            let no_job=document.getElementById('nojob');
            no_job.classList.remove('hidden');
             show(accept);
            return;
        }else{
            let no_job=document.getElementById('nojob');
            no_job.classList.add('hidden');
        }
        
        //show the needed one
        show(accept);

    }
    
)

//Rejection
document.getElementById('retjob').addEventListener("click",
    function (){
        // get the all job bar
        let idget=document.getElementById('Alljob');
        let pdget=document.getElementById('intjob');
        let cdget=document.getElementById('retjob');
        // color change
        idget.classList.add('change');
        pdget.classList.add('change');
        cdget.classList.add('change');
        idget.classList.remove('change');
        pdget.classList.remove('change');
        // cheak if any job is available
        let getjobdet=document.getElementById('reject');
        let jobcount=convertnum(getjobdet.innerText);
         getjobdet=document.getElementById('jobcount');
         getjobdet.innerText=convertstr(jobcount);
        if(jobcount==0){
            let no_job=document.getElementById('nojob');
            no_job.classList.remove('hidden');
            show(reject);
            return;
        }else{
            let no_job=document.getElementById('nojob');
            no_job.classList.add('hidden');
        }
        
        //show the needed one
        show(reject);

    }
    
)