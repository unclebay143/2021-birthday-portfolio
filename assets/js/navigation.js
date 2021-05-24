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
        slide.classList.remove("active")
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

        console.log();
        // ONLY DISPLAY THE MEDIA ICONS ON HOME, ABOUT AND CONTACT PAGE
        if(i === 0){
            // REMOVE THE MEDIA ICON FROM THE PROJECT PAGE
            document.querySelector(".hide-social-media").classList.replace("hide-social-media", "media-icons")
        }else if( (i === 3 || i === 4) && window.screen.availWidth > 900){
            // REMOVE THE MEDIA ICON FROM THE PROJECT PAGE
            document.querySelector(".media-icons").classList.replace("media-icons", "hide-social-media")
        }else{
            // REMOVE THE MEDIA ICON FROM THE PROJECT PAGE
            document.querySelector(".media-icons").classList.replace("media-icons", "hide-social-media")
        }
    })
});