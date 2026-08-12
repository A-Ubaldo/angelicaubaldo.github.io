```javascript
// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

    });

}


// =========================
// SCROLL ANIMATIONS
// =========================

const faders = document.querySelectorAll(".fade");

const appearOptions = {
    threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting) {

                return;

            }

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        });

    },

    appearOptions

);


faders.forEach(function (fader) {

    appearOnScroll.observe(fader);

});


// =========================
// WEBSITE GALLERY
// =========================

function openWebsiteGallery() {

    const gallery =
        document.getElementById("websiteGallery");

    if (gallery) {

        gallery.style.display = "block";

        document.body.style.overflow = "hidden";

    }

}


function closeWebsiteGallery() {

    const gallery =
        document.getElementById("websiteGallery");

    if (gallery) {

        gallery.style.display = "none";

        document.body.style.overflow = "auto";

    }

}


// =========================
// CLOSE GALLERY WITH ESC KEY
// =========================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeWebsiteGallery();

    }

});
```
