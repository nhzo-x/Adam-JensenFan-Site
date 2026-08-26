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
    },
    {
        title: "The Arsonist",
        image: "images/arsonist.jpg"
    },

    {
        title: "Warpath",
        image: "images/warpath.jpg"
    },
    
    {
        title: "Street Brawling Millionare",
        image: "images/streetbrawling.jpg"
    },

    {
        title: "Rabbit Hole",
        image: "images/hymns.jpg"
    },

    {
        title: "Your Fantasy Is My Nightmare",
        image: "images/fantasy.jpg"
    },

    {
        title: "Bullet With Your Name on It",
        image: "images/bullet.jpg"
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
    },

    {
        title: "Mercy",
        image: "images/mercy.jpg"
    },

    {
        title: "Tall Glass of Cyanide",
        image: "images/tallglass.jpg"
    },

    {
        title: "Gravedigger",
        image: "images/gravedigger.jpg"
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
    },

    {
        title: "Pales",
        image: "images/pales.jpg"
    },

    {
        title: "Nemesis",
        image: "images/nemesis.jpg"
    },

    {
        title: "Pretty Please",
        image: "images/prettyplease.jpg"
    },

    {
        title: "Cellophane",
        image: "images/hymns.jpg"
    },

    {
        title: "Tombstone",
        image: "images/tombstone.jpg"
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
    },

    {
        title: "The Grave (Okay)",
        image: "images/thegrave.jpg"
    },

    {
        title: "Tears on the Melody",
        image: "images/tears.jpg"
    },

    {
        title: "You Don't Love Me Like Before",
        image: "images/youdontloveme.jpg"
    },

    {
        title: "The Mystic",
        image: "images/themystic.jpg"
    },

    {
        title: "Mother, Mother",
        image: "images/hymns.jpg"
    },

    {
        title: "If There Is a God, Kill Me Now",
        image: "images/ifthereisagod.jpg"
    },

    {
        title: "High (Unlovable)",
        image: "images/high.jpg"
    },

    {
        title: "Shoulda Known Better",
        image: "images/shoulda.jpg"
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

