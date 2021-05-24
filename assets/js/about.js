/* THIS SCRIPT CONTROLS THE READ MORE AND LESS ON THE ABOUT PAGE */


// GET THE MORE PARAGRAPH
const moreAboutMe = document.querySelectorAll(".hidden-about")
// GET THE READ MORE BUTTON
const readMoreBtn = document.querySelector(".read-more-btn")
// GET THE ABOUT TEXT WRAPPER
const aboutTextWrapper = document.querySelector(".about-caption")


// FUNCTION THAT HANDLES THE TOGGLE
const showHiddenAbout = () =>{
    // TOGGLE THE DISPLAY OF THE PARAGRAPH
    moreAboutMe.forEach((mores)=>mores.classList.toggle("hidden-about"))
    aboutTextWrapper.classList.toggle("scroll-about");

    // CHANGE THE TEXT OF THE BOTTON BASED ON TOGGLE
    if(readMoreBtn.innerHTML === "Read More"){
        readMoreBtn.innerHTML = "Read Less";
    }else{
        readMoreBtn.innerHTML = "Read More";
    }

}