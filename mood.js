let angryButton = document.getElementById("angry");

let angrySongs= [
    {
        title: "You'd Think There Were Ten of Me",
        image: "images/tenofme.jpg"
    },
    {
        title: "Some Men Never Live, Some Men Never Die",
        image: "images/neverlive.jpg"
    },
    {
        title: "Sigh",
        image: "images/hymns.jpg"
    }
];

let romanticButton = document.getElementById("romantic");

let romanticSongs = [
    {
        title: "Palm of Your Hand",
        image: "images/palm.jpg"
    },

    {
        title: "New Bad Habit",
        image: "images/newbad.jpg"
    },

    {
        title: "Marijuana Breath",
        image: "images/marijuanabreath.jpg"
    },

    {
        title: "Lovers in the Dark",
        image: "images/lovers.jpg"
    }
]

let restlessButton = document.getElementById("restless");

let restlessSongs= [
    {
        title: "No Rest for the Depressed",
        image: "images/norest.jpg"
    },

    {
        title: "Kill My Mind",
        image: "images/mymind.jpg"
    },

    {
        title: "Numb",
        image: "images/numb.jpg"
    },

    {
        title: "Melancholy Man",
        image: "images/hymns.jpg"
    },

    {
        title: " I Will Only Bring You Down",
        image: "images/hymns.jpg"
    },

    {
        title: "Bathroom Mirror",
        image: "images/bathroom.jpg"
    },

    {
        title: "Invisible",
        image: "images/invisible.jpg"
    }
]

let somberButton = document.getElementById("somber");

let somberSongs = [
    {
        title: "Goodbye Lover",
        image: "images/goodbyelover.jpg"
    },

    {
        title: "Leave Me Alone",
        image: "images/leavemealone.jpg"
    },

    {
        title: "Loneliness",
        image: "images/loneliness.jpg"
    },

    {
        title: "The Writing's on the Wall",
        image: "images/hymns.jpg"
    },

    {
        title: "Deathwish",
        image: "images/deathwish.jpg"
    },

    {
        title: "The Devil was an Angel Too",
        image: "images/angeltoo.jpg"
    }
]

let recommendation = document.getElementById("recommendation");
let moodImage = document.getElementById("mood-image");
let moodSong = document.getElementById("mood-song");

angryButton.addEventListener("click", function(){

    let randomSong = angrySongs[Math.floor(Math.random()* angrySongs.length)];

    moodSong.textContent = randomSong.title;
    moodImage.src= randomSong.image;

    moodImage.style.display = "block";

    recommendation.style.display = "flex";

    recommendation.style.animation = "none";
    recommendation.offsetHeight;
    recommendation.style.animation = "quickFade 0.6s ease-in";
});

romanticButton.addEventListener("click", function(){

    let randomSong = romanticSongs[Math.floor(Math.random()* romanticSongs.length)];

    moodSong.textContent = randomSong.title;
    moodImage.src= randomSong.image;
    moodImage.style.display = "block";

    recommendation.style.display = "flex";

    recommendation.style.animation = "none";
    recommendation.offsetHeight;
    recommendation.style.animation = "quickFade 0.6s ease-in";
});

restlessButton.addEventListener("click", function(){
    
    let randomSong = restlessSongs[Math.floor(Math.random()* restlessSongs.length)];

    moodSong.textContent = randomSong.title;
    moodImage.src= randomSong.image;
    moodImage.style.display = "block";

    recommendation.style.display = "flex";

    recommendation.style.animation = "none";
    recommendation.offsetHeight;
    recommendation.style.animation = "quickFade 0.6s ease-in";
});

somberButton.addEventListener("click", function(){
    
    let randomSong = somberSongs[Math.floor(Math.random()* somberSongs.length)];

    moodSong.textContent = randomSong.title;
    moodImage.src= randomSong.image;
    moodImage.style.display = "block";

    recommendation.style.display = "flex";

    recommendation.style.animation = "none";
    recommendation.offsetHeight;
    recommendation.style.animation = "quickFade 0.6s ease-in";
});

