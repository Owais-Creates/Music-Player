// Selecting the audio element
const audioPlayer = document.querySelector("#audio-player");

// Selecting buttons
const previousBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");
const loopBtn = document.querySelector("#loop");

// Selecting heading
const songTitle = document.querySelector("#song-title");

// Selecting play/pause icon
const playPauseIcon = document.querySelector("#play-pause-icon");

// Selecting image
const songImage = document.querySelector("#song-image");

// Making an array of the songs so we can loop on it.
const songs = [
    {
        song: "BadeMiya",
        name: "Bade Miya Chotey Miya",
        src: "./images/cat1.jpg"
    },
    {
        song: "AeWatan",
        name: "Ae Watan aabaad rahey tu",
        src: "./images/cat2.jpeg"
    }
];

// Selecting the current song index to keep track of which song is currently playing.
let current = 0;

// Function to update the player with the current song
const updatePlayer = () => {
    audioPlayer.src = `./sounds/${songs[current].song}.mp3`;
    songTitle.innerText = songs[current].name;
    songImage.src = songs[current].src;

};

// Update player with initial song
updatePlayer();

// Adding event listener to the play/pause button
playBtn.addEventListener('click', () => {

    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseIcon.className = "ph-bold ph-pause";
    } else {
        audioPlayer.pause();
        playPauseIcon.className = "ph-bold ph-play";
    }
});

// Next button logic
nextBtn.addEventListener('click', () => {
    current++;
    if (current >= songs.length) {
        current = 0;
    }
    updatePlayer();
    audioPlayer.play();
});

// Previous button logic
previousBtn.addEventListener('click', () => {
    current--;
    if (current < 0) {
        current = songs.length - 1;
    }
    updatePlayer();
    audioPlayer.play();
});

// Update current song when it ends
audioPlayer.addEventListener('ended', () => {
    current++;
    if (current >= songs.length) {
        current = 0;
    }
    updatePlayer();
    audioPlayer.play();
});

//looping functionality.

// Loop button logic
loopBtn.addEventListener('click', () => {
    // Toggle looping
    audioPlayer.loop = !audioPlayer.loop;
    
    // Update button icon
    if (audioPlayer.loop) {
        loopBtn.classList.add("active");
    } else {
        loopBtn.classList.remove("active");
    }
});
