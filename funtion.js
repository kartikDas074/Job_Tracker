const accept= new Array(9).fill(0);
const reject= new Array(9).fill(0);
const total =  new Array(9).fill(1);
let tok=true,aok=false,bok=false;
if(tok){
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
}
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
    if(bok){
        show_id('reject',reject);
    }
      }
   // action for clicking on Reject button 
     if (e.target.classList.contains("reject")) {
    // 1.parent find
    const par = e.target.closest(".par");
    // 2.toogole 
    const togol=par.querySelector('.tog');
    //3. Update the togole
    if(togol!=null)
    updateinText('REJECTED',togol);
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
    if(aok){
        show_id('interview',accept);
    }
    }
    if (e.target.classList.contains("delme")){
     // 1.parent find
     const par = e.target.closest(".par");
     //2. get job's index
     const ind=par.querySelector('.cnt');
     let index=convertnum(ind.innerText);
     par.classList.add('hidden');
     if(accept[index]==1){
         decrese('interview');
     }
     if(reject[index]==1){
        decrese('reject');
     }
     if(total[index]==1){
        decrese('tot');
     }
     total[index]=2;
     accept[index]=2;
     reject[index]=2;
     //show after deleting
     if(tok){
      show_id('tot',total);
     }else if(aok){
        show_id('interview',accept);
     }else{
        show_id('reject',reject);
     }
    }
});
//All job
document.getElementById('Alljob').addEventListener("click",
    function (){
        //Active the tok 
        tok=true;
        aok=false;
        bok=false;
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
        // cheak if any job is available+show
        show_id('tot',total);

    }
)

//Interview
document.getElementById('intjob').addEventListener("click",
    function (){
        //Active the aok 
        tok=false;
        aok=true;
        bok=false;
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
        // cheak if any job is available+show
         show_id('interview',accept);

    }
    
)

//Rejection
document.getElementById('retjob').addEventListener("click",
    function (){
        //Active the tok 
        tok=false;
        aok=false;
        bok=true;
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
        // cheak if any job is available+show
        show_id('reject',reject);

    }
    
)