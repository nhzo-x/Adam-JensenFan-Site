let hymnsEra = document.getElementById("hymns-era");
let earlyEra = document.getElementById("early-era");
let midEra = document.getElementById("mid-era");

function changeEra(era) {

    document.body.classList.add("fade-background");

    setTimeout(function() {

        document.body.classList.remove("mid-era", "hymns-era");
        document.documentElement.classList.remove("mid-era", "hymns-era");

        if (era === "mid") {
            document.body.classList.add("mid-era");
            document.documentElement.classList.add("mid-era");
        }

        if (era === "hymns") {
            document.body.classList.add("hymns-era");
            document.documentElement.classList.add("hymns-era");
        }

        sessionStorage.setItem("era", era);

        document.body.classList.remove("fade-background");

    }, 300);
}


if (hymnsEra) {
    hymnsEra.addEventListener("click", function() {
        changeEra("hymns");
    });
}


if (earlyEra) {
    earlyEra.addEventListener("click", function() {
        changeEra("early");
    });
}


if (midEra) {
    midEra.addEventListener("click", function() {
        changeEra("mid");
    });
}


let savedEra = sessionStorage.getItem("era");

if (savedEra === "mid") {
    document.body.classList.add("mid-era");
}

if (savedEra === "hymns") {
    document.body.classList.add("hymns-era");
}


document.querySelectorAll(".navbar a").forEach(function(link) {
    if (link.pathname === window.location.pathname) {
        link.classList.add("active");
    }
});
