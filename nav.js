window.onload = function () {
    scrollLargerThanZero()
    window.onscroll = function () {
        scrollLargerThanZero()
    }
}

function scrollLargerThanZero() {
    let nav = document.getElementById("nav")

    if (window.scrollY > 0) {
        nav.classList.add("nav-small")
    }
    else {
        nav.classList.remove("nav-small")
    }
}