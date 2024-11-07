function newadd(){
    let newnode=document.createElement('textarea');
    newnode.classList.add("form-control");
    newnode.setAttribute('rows',2)
    newnode.setAttribute('placeholder','enter here')
    
    
    


    let two=document.querySelector(".main1");
    let add=document.querySelector(".add");

    two.insertBefore(newnode,add);
}

function newaddone(){
   let newone=document.createElement('textarea')
   newone.classList.add('form-control1');
   newone.setAttribute('rows',2)
   newone.setAttribute('placeholder','enter here')
   

   let three=document.querySelector(".main1");
   let addone=document.querySelector(".add1")

   three.insertBefore(newone,addone)
}
function newskills(){
    let newskill=document.createElement('textarea')
    newskill.classList.add('skills');
    newskill.setAttribute('rows',2)
    newskill.setAttribute('placeholder','enter here')
    
 
    let one=document.querySelector(".content2");
    let addskill=document.querySelector(".skills1")
 
    one.insertBefore(newskill,addskill)
 }
  
  const resume=document.querySelector(".resume");
  const main=document.querySelector(".main");
  const button=document.querySelector(".button");
  function generate(){
       main.classList.add('active')
       resume.classList.add('active')
       button.classList.add('active');
       let input=document.querySelector(".text").value;
       let name=document.querySelector(".name1");
       document.querySelector(".name2").innerHTML=input;
       document.querySelector(".phone1").innerHTML=document.querySelector(".phone").value;
       document.querySelector(".address1").innerHTML=document.querySelector(".address").value
       document.querySelector(".facebook1").innerHTML=document.querySelector(".facebook").value
       document.querySelector(".Instagram1").innerHTML=document.querySelector(".Instagram").value
       document.querySelector(".Linkedin1").innerHTML=document.querySelector(".Linkedin").value
       document.querySelector(".declaer").innerHTML=document.querySelector(".DECALARATION").value
       document.querySelector(".object1").innerHTML=document.querySelector(".object").value
      

       let work=document.getElementsByClassName("form-control")
       let str=''
       for(let e of work){
           str=str + `<li> ${e.value}</li>`;
       }
       document.getElementById("work1").innerHTML=str;

       let quact=document.getElementsByClassName("form-control1")
       let str1=''
       for(let e of quact){
           str1+= `<li> ${e.value}</li>`;
       }
       document.getElementById("qualication").innerHTML=str1;


       name.innerHTML=input;

       let file=document.querySelector(".group").files[0]
       console.log(file);

       let reader=new FileReader()
       reader.readAsDataURL(file)
       console.log(reader.result);

       reader.onloadend=function(){
           document.querySelector(".img").src=reader.result;
       }
  }
  function printcv(){
   let print=document.querySelector(".print1");

   print.classList.add('active')
   window.print()
  }