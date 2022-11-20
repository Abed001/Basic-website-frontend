
    const bottomContainerEl=document.querySelector(".brand-story");
    const navbarEl=document.querySelector(".nav");
    const card=document.querySelector(".card");
    const underline_header=document.querySelector(".h1-underline");

    const card1=document.querySelector("#card1");
    const underline_header1=document.querySelector("#h1-underline1");

    const card2=document.querySelector("#card2");
    const underline_header2=document.querySelector("#h1-underline2");


    card.addEventListener('mouseover', (event) => {
        if(event){
            underline_header.style.textDecoration="underline";
        }
    
    });
    card.addEventListener('mouseout', (event) => {
        if(event){
            underline_header.style.textDecoration="none";
        }
    
    });

    card1.addEventListener('mouseover', (event) => {
        if(event){
            underline_header1.style.textDecoration="underline";
        }
    
    });
    card1.addEventListener('mouseout', (event) => {
        if(event){
            underline_header1.style.textDecoration="none";
        }
    
    });


    card2.addEventListener('mouseover', (event) => {
        if(event){
            underline_header2.style.textDecoration="underline";
        }
    
    });
    card2.addEventListener('mouseout', (event) => {
        if(event){
            underline_header2.style.textDecoration="none";
        }
    
    });


    




    window.addEventListener("scroll",()=>{
       /* if (document.body.scrollTop >= 200 ) {
        navbarEl.classList.add("change-text-color");
        myNav.classList.remove("active");}*/

        if(window.scrollY>bottomContainerEl.offsetTop-navbarEl.offsetHeight-50){
            navbarEl.classList.add("active");
        
        }else{
            navbarEl.classList.remove("active");}
    })
    let prevScrollpos=window.pageYOffset;

    window.onscroll=function(){
        let currentScrollPos=window.pageYOffset;
        if(prevScrollpos>currentScrollPos){
            document.querySelector(".nav").style.top="0";

        }else{
            document.querySelector(".nav").style.top="-100px";
        }
        prevScrollpos=currentScrollPos;
    }

  
      
    