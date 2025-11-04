let music = new Audio('songs/1.mp3');
    

        const songs = [
        { id: 1, title: "Chale ana", artist: "Arijit Singh", src: "songs/1.mp3", poster: "images/1.jpeg" },
        { id: 2, title: "All Too Well", artist: "Taylor Swift", src: "songs/2.mp3", poster: "images/2.jpeg" },
        { id: 3, title: "Cruel Summer", artist: "Taylor Swift", src: "songs/3.mp3", poster: "images/3.jpeg" },
        { id: 4, title: "Love Story", artist: "Taylor Swift", src: "songs/4.mp3", poster: "images/4.jpeg" },
        { id: 5, title: "Shake It Off", artist: "Taylor Swift", src: "songs/5.mp3", poster: "images/5.jpeg" },
        { id: 6, title: "Blank Space", artist: "Taylor Swift", src: "songs/6.mp3", poster: "images/6.jpeg" },
        { id: 7, title: "Bol Do Na Zara", artist: "Arijit Singh", src: "songs/7.mp3", poster: "images/7.jpeg" },
        { id: 8, title: "Hua Hai Aaj Pehli Baar", artist: "Armaan Malik", src: "songs/8.mp3", poster: "images/8.jpeg" },
        { id: 9, title: "Mai Rahoon Ya Na Rahoon", artist: "Armaan Malik", src: "songs/9.mp3", poster: "images/9.jpeg" },
        { id: 10, title: "Tum Kya Mile", artist: "Arijit Singh", src: "songs/10.mp3", poster: "images/10.jpeg" }
// Add more objects as needed
];

let masterPlay = document.getElementById("playButton");
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");

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




let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let  pop_song= document.getElementsByClassName("pop_song");[0]


pop_song_right.addEventListener("click",()=>{
    pop_song_left.scrollLeft += 330;
})

pop_song_left.addEventListener("click",()=>{
    pop_song_left.scrollLeft -= 330;
}) 
let pop_artist_left = document.getElementById("pop_artist_left");
let pop_artist_right = document.getElementById("pop_artist_right");
let pop_artist = document.getElementsByClassName('Artist_bx')[0];

pop_artist_right.addEventListener("click",()=>{
    pop_artist.scrollLeft += 330;
})
pop_artist_left.addEventListener("click",()=>{
    pop_artist.scrollLeft -= 330;
}) 