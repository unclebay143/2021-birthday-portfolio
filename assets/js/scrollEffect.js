const projectWindow = document.querySelector(".project-section")



// FUNCTION THAT HANDLES THE REVEAL OF SECTIONS 
const reveal = () =>{
    // GET THE ELEMENTS WITH REVEAL CLASS NAME
    const reveals = document.querySelectorAll('.reveal');
    // FORLOOP FOR EACH OF THE REVEALS
    for(let i = 0; i < reveals.length; i++){
        // GET THE BROWSER WINDOW HEIGHT
        const windowheight = window.innerHeight;
        // GET THE POSITION OF THE CURRENT ELEMENT ON THE BROWSER
        const revealtop = reveals[i].getBoundingClientRect().top;
        // CONSTANT VALUE OF OUR REVIEW POINT
        const revealpoint = 100;
        // IF THE TOP IS ON FOCUS ACTIVE THE ELEMENT
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{// IF NOT REMOVE THE ACTIVE CLASS
          reveals[i].classList.remove('active');
        }
    }
}


// ADD EVENT LISTENER TO THE BROWSER WINDOW
// window.addEventListener('scroll', reveal);



// USING THE PROJECT SECTION PARENT CONTAINER AS SCROLL BECAUSE OF OVERFLOW-SCROLL
projectWindow.addEventListener('scroll', reveal);
