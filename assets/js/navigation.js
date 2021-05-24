// get menu button
const menuBtn = document.querySelector(".menu-btn");
// get navigation section
const navigation = document.querySelector(".navigation");

// javascript for video slider
const btns = document.querySelectorAll(".nav-btn");

// get all video or image slide
const slides = document.querySelectorAll(".img-slide")

// get all video slide contents
const contents = document.querySelectorAll(".content")


// event listener to toggle the menu icon
menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle("active")
    navigation.classList.toggle("active")
})


const sliderNav = (manual) =>{
    // remove active from other btn
    btns.forEach((btn) => {
        btn.classList.remove("active")
    });

    // remove active from other slides
    slides.forEach((slide) => {
        // OTHER SLIDES
        slide.classList.remove("active")


        // TOGGLE THE HAMBURGER ALSO
        menuBtn.classList.toggle("active")
        // CLOSE THE NAVIGATION WHEN USER CLICK A NAVLINK
        navigation.classList.remove("active")
    });

    // remove active from other contents
    contents.forEach((content) => {
        content.classList.remove("active")
    });

    // add active to the current btn
    btns[manual].classList.add("active")
    // add active to the current slide
    slides[manual].classList.add("active")
    // add active to the current content
    contents[manual].classList.add("active")
}


btns.forEach((btn, i) => {
    btn.addEventListener("click", ()=>{
        sliderNav(i)

        // DISPLAY MEDIA ICON ON LANDING PAGE
        if(i === 0){
            document.querySelector(".hide-media-icons").classList.replace("hide-media-icons", "media-icons")
        }else if((i === 1 || i === 2 || i=== 3 || i === 4) && window.screen.availWidth < 900){// HIDE ICONS FOR PROJECT, CERTIFICATE AND CONTACT PAGE ON SMALL DEVICES
            document.querySelector(".media-icons").classList.replace("media-icons", "hide-media-icons")
        }
    })
});