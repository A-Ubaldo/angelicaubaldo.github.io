// =========================
// DARK MODE
// =========================

document.getElementById("themeToggle")
.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

});


// =========================
// SCROLL ANIMATIONS
// =========================

const faders = document.querySelectorAll(".fade");

const appearOptions = {
    threshold: 0.3
};

const appearOnScroll =
new IntersectionObserver(function(entries, observer){

    entries.forEach(entry => {

        if(!entry.isIntersecting){
            return;
        }

        entry.target.classList.add("show");
        observer.unobserve(entry.target);

    });

}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


// =========================
// WEBSITE GALLERY
// =========================

function openWebsiteGallery(){

    document.getElementById("websiteGallery").style.display = "block";

    // Prevent the main website from scrolling
    document.body.style.overflow = "hidden";

}


function closeWebsiteGallery(){

    document.getElementById("websiteGallery").style.display = "none";

    // Allow the main website to scroll again
    document.body.style.overflow = "auto";

}


// =========================
// CLOSE GALLERY WITH ESC KEY
// =========================

document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){

        closeWebsiteGallery();

    }

});
