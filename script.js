let songs = [
    { title: "Sandcastles", year: "2016", image: "images/sandcastles.jpg" },
    { title: "Numb", year: "2016", image: "images/numb.jpg" },
    { title: "Ritual", year: "2016", image: "images/ritual.jpg" },
    { title: "Drugs", year: "2016", image: "images/drugs.jpg" },
    { title: "The Mystic", year: "2016", image: "images/themystic.jpg" },
    { title: "Tombstone", year: "2017", image: "images/tombstone.jpg" },

    { title: "Marijuana Breath", year: "2017", image: "images/marijuanabreath.jpg" },
    { title: "You Don't Love Me Like Before", year: "2017", image: "images/youdontloveme.jpg" },
    { title: "Street Fight", year: "2017", image: "images/streetfight.jpg" },

    { title: "Boomboom", year: "2018", image: "images/boomboom.jpg" },
    { title: "The Hunter", year: "2018", image: "images/thehunter.jpg" },
    { title: "Pretty Please", year: "2018", image: "images/prettyplease.jpg" },
    { title: "The Kid", year: "2018", image: "images/thekid.jpg" },
    { title: "Bad Luck", year: "2018", image: "images/badluck.jpg" },
    { title: "I Can Hold a Grudge Like Nobody's Business", year: "2018", image: "images/grudge.jpg" },

    { title: "Wicked Ones", year: "2019", image: "images/wickedones.jpg" },
    { title: "I Know Where the Bodies Are Buried", year: "2019", image: "images/iknow.jpg" },
    { title: "Friend of the Devil", year: "2019", image: "images/friend.jpg" },
    { title: "Hi", year: "2019", image: "images/hi.jpg" },
    { title: "You Won't Answer My Phone Calls but I bet You'll Listen to This Song so I Guess This Is the Only Way to Talk to You", year: "2019", image: "images/youwontanswer.jpg" },

    { title: "Inmate 8576", year: "2020", image: "images/inmate.jpg" },
    { title: "I'm a Sucker for a Liar in a Red Dress", year: "2020", image: "images/imasucker.jpg" },
    { title: "Don't Care", year: "2020", image: "images/dontcare.jpg" },
    { title: "Let it Bleed", year: "2020", image: "images/letitbleed.jpg" },
    { title: "John Doe", year: "2020", image: "images/johndoe.jpg" },
    { title: "Kerosene", year: "2020", image: "images/kerosene.jpg" },
    { title: "Baby Blue", year: "2020", image: "images/babyblue.jpg" },

    { title: "Lowlife", year: "2021", image: "images/lowlife.jpg" },
    { title: "Goodbye Lover", year: "2021", image: "images/goodbyelover.jpg" },
    { title: "Trouble", year: "2021", image: "images/trouble.jpg" },
    { title: "Fucked in the Head", year: "2021", image: "images/finthehead.jpg" },
    { title: "Outlaw", year: "2021", image: "images/outlaw.jpg" },
    { title: "Tears on the Melody", year: "2021", image: "images/tears.jpg" },
    { title: "La La Land", year: "2021", image: "images/lalaland.jpg" },
    { title: "Cocaine Shame", year: "2021", image: "images/shame.jpg" },
    { title: "Pain", year: "2021", image: "images/pain.jpg" },
    { title: "Tall Glass of Cyanide", year: "2021", image: "images/tallglass.jpg" },
    { title: "Never Get High on Your Own Supply", year: "2021", image: "images/nevergethigh.jpg" },
    { title: "Loving You Is Gonna Kill Me", year: "2021", image: "images/lovingyou.jpg" },
    { title: "Kings", year: "2021", image: "images/kings.jpg" },
    { title: "That Man He's a Monster", year: "2021", image: "images/thatman.jpg" },
    { title: "New Bad Habit", year: "2021", image: "images/newbad.jpg" },
    { title: "Lovers in the Dark", year: "2021", image: "images/lovers.jpg" },
    { title: "All These Lovely Things", year: "2021", image: "images/allthese.jpg" },
    { title: "Yoko Oh No", year: "2021", image: "images/yoko.jpg" },
    { title: "Mercy", year: "2021", image: "images/mercy.jpg" },

    { title: "Medicine", year: "2022", image: "images/medicine.jpg" },
    { title: "Warpath", year: "2022", image: "images/warpath.jpg" },
    { title: "Before the Devil Knows I'm Dead", year: "2022", image: "images/beforethedevil.jpg" },
    { title: "Chaos", year: "2022", image: "images/chaos.jpg" },
    { title: "City of Sin", year: "2022", image: "images/cityofsin.jpg" },
    { title: "If There Is a God, Kill Me Now", year: "2022", image: "images/ifthereisagod.jpg" },
    { title: "Bad Day for My Enemies", year: "2022", image: "images/badday.jpg" },
    { title: "Tallest Man on Earth", year: "2022", image: "images/tallestman.jpg" },
    { title: "Street Brawling Millionaire", year: "2022", image: "images/streetfight.jpg" },
    { title: "Bullet with Your Name on It", year: "2022", image: "images/bullet.jpg" },
    { title: "Gravedigger", year: "2022", image: "images/gravedigger.jpg" },

    { title: "Ready to Die", year: "2023", image: "images/ready.jpg" },
    { title: "Jekyll and Hyde", year: "2023", image: "images/jekyll.jpg" },
    { title: "Deathwish", year: "2023", image: "images/deathwish.jpg" },
    { title: "Melt into the Ceiling", year: "2023", image: "images/melt.jpg" },
    { title: "Flowers on My Grave", year: "2023", image: "images/flowers.jpg" },
    { title: "Good Day to Die Young", year: "2023", image: "images/goodday.jpg" },
    { title: "Pales", year: "2023", image: "images/pales.jpg" },

    { title: "Fall from Grace", year: "2024", image: "images/fall.jpg" },
    { title: "Loneliness", year: "2024", image: "images/loneliness.jpg" },
    { title: "Freak Like Me", year: "2024", image: "images/freak.jpg" },
    { title: "No Rest for the Depressed", year: "2024", image: "images/norest.jpg" },
    { title: "Leave Me Alone", year: "2024", image: "images/leavemealone.jpg" },
    { title: "Your Fantasy Is My Nightmare", year: "2024", image: "images/fantasy.jpg" },
    { title: "Some Men Never Live, Some Men Never Die", year: "2024", image: "images/neverlive.jpg" },
    { title: "Shoulda Known Better", year: "2024", image: "images/shoulda.jpg" },
    { title: "Skin of My Teeth", year: "2024", image: "images/skinofmyteeth.jpg" },

    { title: "Invisible", year: "2025", image: "images/invisible.jpg" },
    { title: "Rabbit", year: "2025", image: "images/rabbit.jpg" },
    { title: "Drag Me to Hell", year: "2025", image: "images/dragmetohell.jpg" },
    { title: "The Devil Was an Angel Too", year: "2025", image: "images/angeltoo.jpg" },
    { title: "The Arsonist", year: "2025", image: "images/arsonist.jpg" },
    { title: "You'd Think There Were Ten of Me", year: "2025", image: "images/tenofme.jpg" },
    { title: "Kill My Mind", year: "2025", image: "images/mymind.jpg" },
    { title: "Heavy Is the Head That Wears the Crown", year: "2025", image: "images/heavy.jpg" },
    { title: "Nemesis", year: "2025", image: "images/nemesis.jpg" },
    { title: "Bathroom Mirror", year: "2025", image: "images/bathroom.jpg" },
    { title: "Mr Lonely (Impostor Syndrome)", year: "2025", image: "images/impostor.jpg" },
    { title: "Palm of Your Hand", year: "2025", image: "images/palm.jpg" },
    { title: "Welcome to the Layer Cake, Son", year: "2025", image: "images/welcome.jpg" },
    { title: "The Grave (Okay)", year: "2025", image: "images/thegrave.jpg" },
    { title: "High (Unlovable)", year: "2025", image: "images/high.jpg" },

    { title: "Cellophane", year: "2026", image: "images/hymns.jpg" },
    { title: "All My Friends", year: "2026", image: "images/hymns.jpg" },
    { title: "Rabbit Hole", year: "2026", image: "images/hymns.jpg" },
    { title: "Smithereens", year: "2026", image: "images/hymns.jpg" },
    { title: "Mother Mother", year: "2026", image: "images/hymns.jpg" },
    { title: "I Will Only Bring You Down", year: "2026", image: "images/hymns.jpg" },
    { title: "Champagne Vein", year: "2026", image: "images/hymns.jpg" },
    { title: "The Writing's on the Wall", year: "2026", image: "images/hymns.jpg" },
    { title: "Sigh", year: "2026", image: "images/hymns.jpg" },
    { title: "Melancholy Man", year: "2026", image: "images/hymns.jpg" },

    { title: "The Mystic (Stripped)", year: "2021", image: "images/themysticstripped.jpg" },
    { title: "Marijuana Breath (Stripped)", year: "2021", image: "images/marijuanabreathstripped.jpg" },
    { title: "Drugs (Stripped)", year: "2021", image: "images/drugsstripped.jpg" },
    { title: "I'm a Sucker for a Liar in a Red Dress (Stripped)", year: "2021", image: "images/imasuckerstripped.jpg" },

    { title: "Ritual (Dexter Remix)", year: "2016", image: "images/remix.jpg" },
    { title: "Ritual (Lost Legend Remix)", year: "2016", image: "images/remix.jpg" },
    { title: "Ritual (Bloom Remix)", year: "2016", image: "images/remix.jpg" }
];

let today = new Date();
let dateNumber = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

let randomNumber = Math.sin(dateNumber) * 10000;
let songIndex = Math.floor(Math.abs(randomNumber) % songs.length);

let songOfTheDay = songs[songIndex];

document.getElementById("dailySongPoster").src = songOfTheDay.image;
document.getElementById("dailySongPoster").style.display = "block";

document.getElementById("dailySong").textContent =
    songOfTheDay.title + " (" + songOfTheDay.year + ")";

document.getElementById("dailySongInfo").textContent =
    "Listen to today's song!";