const songs = [
    {
        song: "25th",
        singer: "Tori Kelly"
    },
    {
        song: "All I Want For Christmas Is You",
        singer: "Mariah Carey"
    },
    {
        song: "Santa Tell Me",
        singer: "Ariana Grande"
    }
];

const mp3 = [
    "25th.mp3",
    "All I Want For Christmas Is You.mp3",
    "Santa Tell Me.mp3"
];
const audio = document.querySelector("#myAudio");

const song = document.querySelector("#main-songs span:first-child");
const singer = document.querySelector("#main-songs span:last-child");
const randomNumber = Math.floor(Math.random()*songs.length);
const todaySong = songs[randomNumber];
audio.src = `audio/${mp3[randomNumber]}`;

song.innerText = `Now Playing♫ ${todaySong.song}`;
singer.innerText = ` by ${todaySong.singer}`;
