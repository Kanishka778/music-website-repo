
 // Default first song
let music = new Audio("songs/1.mp3");


const songs = [
  { id: 1, title: "Chale Ana", artist: "Arijit Singh", src: "songs/1.mp3", poster: "images/1.jpeg" },
  { id: 2, title: "All Too Well", artist: "Taylor Swift", src: "songs/2.mp3", poster: "images/2.jpeg" },
  { id: 3, title: "Cruel Summer", artist: "Taylor Swift", src: "songs/3.mp3", poster: "images/3.jpeg" },
  { id: 4, title: "Love Story", artist: "Taylor Swift", src: "songs/4.mp3", poster: "images/4.jpeg" },
  { id: 5, title: "Shake It Off", artist: "Taylor Swift", src: "songs/5.mp3", poster: "images/5.jpeg" },
  { id: 6, title: "Blank Space", artist: "Taylor Swift", src: "songs/6.mp3", poster: "images/6.jpeg" },
  { id: 7, title: "Bol Do Na Zara", artist: "Arijit Singh", src: "songs/7.mp3", poster: "images/7.jpeg" },
  { id: 8, title: "Hua Hai Aaj Pehli Baar", artist: "Armaan Malik", src: "songs/8.mp3", poster: "images/8.jpeg" },
  { id: 9, title: "Mai Rahoon Ya Na Rahoon", artist: "Armaan Malik", src: "songs/9.mp3", poster: "images/9.jpeg" },
  { id: 10, title: "Tum Kya Mile", artist: "Arijit Singh", src: "songs/10.mp3", poster: "images/10.jpeg" }
];

// 🔘 Main Play/Pause button (give id="masterPlay" to your main play icon)
let masterPlay = document.querySelector(".master_play i.fa-play");
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");

// Toggle play/pause
masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  } else {
    music.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
  }
});

// 🎧 Click any song in the list to play
let songItems = document.querySelectorAll(".songitem i.fa-play");

songItems.forEach((btn) => {
  btn.addEventListener("click", () => {
    let songId = parseInt(btn.id);
    let song = songs.find((s) => s.id === songId);
    if (song) {
      music.src = song.src;
      poster_master_play.src = song.poster;
      title.innerHTML = `${song.title} <div class="subtitle">${song.artist}</div>`;
      music.play();
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
    }
  });
});

// 🌀 Scroll arrows fix
let songLeft = document.getElementById("songLeft");
let songRight = document.getElementById("songRight");
let songScroll = document.getElementById("songScroll");

songRight.addEventListener("click", () => {
  songScroll.scrollLeft += 330;
});

songLeft.addEventListener("click", () => {
  songScroll.scrollLeft -= 330;
});

let artistLeft = document.getElementById("artistLeft");
let artistRight = document.getElementById("artistRight");
let artistScroll = document.getElementById("artistScroll");

artistRight.addEventListener("click", () => {
  artistScroll.scrollLeft += 330;
});

artistLeft.addEventListener("click", () => {
  artistScroll.scrollLeft -= 330;
});