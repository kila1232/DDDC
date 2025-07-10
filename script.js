// Data for songs with mp3 URLs and images
const songs = [
  {
    title: "18",
    artist: "One Direction",
    index: 0,
    src: "music/18.mp3",
    img: "https://i.ytimg.com/vi/VRpzJabYlQQ/maxresdefault.jpg",
  },
  {
    title: "Abadi",
    artist: "Dendi Nata, Hendra Kumbara",
    index: 1,
    src: "music/Abadi.mp3",
    img: "https://i.ytimg.com/vi/GO1UrAIi9e4/maxresdefault.jpg",
  },
  {
    title: "About You",
    artist: "The 1975",
    index: 2,
    src: "music/AboutYou.mp3",
    img: "https://i.ytimg.com/vi/EdmpLGERRvQ/maxresdefault.jpg",
  },
  {
    title: "Apa Kabar Sayang",
    artist: "Armada",
    index: 3,
    src: "music/ApaKabarSayang.mp3",
    img: "https://i.ytimg.com/vi/_-MIFofXRNU/maxresdefault.jpg",
  },
  {
    title: "As It Was",
    artist: "Harry Styles",
    index: 4,
    src: "music/AsItWas.mp3",
    img: "https://i.ytimg.com/vi/H5v3kku4y6Q/maxresdefault.jpg",
  },
  {
    title: "A Year Ago",
    artist: "James Arthur",
    index: 5,
    src: "music/AYearAgo.mp3",
    img: "https://i.ytimg.com/vi/c3Y98Iit9QY/maxresdefault.jpg",
  },
  {
    title: "Before You Go",
    artist: "Lewis Capaldi",
    index: 6,
    src: "music/BeforeYouGo.mp3",
    img: "https://i.ytimg.com/vi/Jtauh8GcxBY/maxresdefault.jpg",
  },
  {
    title: "Bergema Sampai Selamanya",
    artist: "True Worshippers",
    index: 7,
    src: "music/bergemasampaiselamanya.mp3",
    img: "IMG/bergemasampaiselamanya.webp",
  },
  {
    title: "BIRDS OF A FEATHER",
    artist: "Billie Eilish",
    index: 8,
    src: "music/BirdsOfAFeather.mp3",
    img: "https://i.ytimg.com/vi/V9PVRfjEBTI/maxresdefault.jpg",
  },
  {
    title: "Cancer",
    artist: "My Chemical Romance",
    index: 9,
    src: "music/Cancer.mp3",
    img: "https://i.ytimg.com/vi/wc2s9skF_58/maxresdefault.jpg",
  },
  {
    title: "Can I Be Him",
    artist: "James Arthur",
    index: 10,
    src: "music/CanIBeHim.mp3",
    img: "IMG/CanIBeHim.webp",
  },
  {
    title: "Dandelions",
    artist: "Ruth B",
    index: 11,
    src: "music/Dandelions.mp3",
    img: "IMG/Dandelions.webp",
  },
  {
    title: "December",
    artist: "Neck Deep",
    index: 12,
    src: "music/December.mp3",
    img: "IMG/December.webp",
  },
  {
    title: "Disenchanted",
    artist: "My Chemical Romance",
    index: 13,
    src: "music/Disenchanted.mp3",
    img: "IMG/Disenchanted.webp",
  },
  {
    title: "Duka",
    artist: "Last Child",
    index: 14,
    src: "music/Duka.mp3",
    img: "IMG/Duka.webp",
  },
  {
    title: "Fix You",
    artist: "Coldplay",
    index: 15,
    src: "music/FixYou.mp3",
    img: "https://i.ytimg.com/vi/k4V3Mo61fJM/maxresdefault.jpg",
  },
  {
    title: "Happier",
    artist: "Olivia Rodrigo",
    index: 16,
    src: "music/happier.mp3",
    img: "IMG/happier.webp",
  },
  {
    title: "I Don't Love You",
    artist: "My Chemical Romance",
    index: 17,
    src: "music/IDontLoveYou.mp3",
    img: "IMG/IDontLoveYou.webp",
  },
  {
    title: "I'm Only a Fool for You",
    artist: "Dysphoria",
    index: 18,
    src: "music/ImOnlyAFoolForYou.mp3",
    img: "IMG/ImOnlyAFoolForYou.webp",
  },
  {
    title: "Imagination",
    artist: "Shawn Mendes",
    index: 19,
    src: "music/Imagination.mp3",
    img: "IMG/Imagination.webp",
  },
  {
    title: "Iris",
    artist: "The Goo Goo Dolls",
    index: 20,
    src: "music/Iris.mp3",
    img: "https://i.ytimg.com/vi/NdYWuo9OFAw/maxresdefault.jpg",
  },
  {
    title: "Kau Datang",
    artist: "Kerispatih",
    index: 21,
    src: "music/KauDatang.mp3",
    img: "IMG/KauDatang.webp",
  },
  {
    title: "Laskar Pelangi",
    artist: "Nidji",
    index: 22,
    src: "music/LaskarPelangi.mp3",
    img: "IMG/LaskarPelangi.webp",
  },
  {
    title: "Line Without a Hook",
    artist: "Ricky Montgomery",
    index: 23,
    src: "music/LineWithoutaHook.mp3",
    img: "IMG/LineWithoutaHook.webp",
  },
  {
    title: "Night Changes",
    artist: "One Direction",
    index: 24,
    src: "music/NightChanges.mp3",
    img: "https://i.ytimg.com/vi/syFZfO_wfMQ/maxresdefault.jpg",
  },
  {
    title: "Nina",
    artist: "Ed Sheeran",
    index: 25,
    src: "music/Nina.mp3",
    img: "IMG/Nina.webp",
  },
  {
    title: "No Surprises",
    artist: "Radiohead",
    index: 26,
    src: "music/NoSurprises.mp3",
    img: "https://i.ytimg.com/vi/u5CVsCnxyXg/maxresdefault.jpg",
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    index: 27,
    src: "music/Perfect.mp3",
    img: "IMG/Perfect.webp",
  },
  {
    title: "Photograph",
    artist: "Ed Sheeran",
    index: 28,
    src: "music/Photograph.mp3",
    img: "IMG/Photograph.webp",
  },
  {
    title: "Sailor Song",
    artist: "Gigi Perez",
    index: 29,
    src: "music/SailorSong.mp3",
    img: "IMG/SailorSong.webp",
  },
  {
    title: "Scott Street",
    artist: "Phoebe Bridgers",
    index: 30,
    src: "music/ScottStreet.mp3",
    img: "IMG/ScottStreet.webp",
  },
  {
    title: "Seandainya",
    artist: "Vierra",
    index: 31,
    src: "music/Seandainya.mp3",
    img: "IMG/Seandainya.webp",
  },
  {
    title: "Sempurna",
    artist: "Andra and The Backbone",
    index: 32,
    src: "music/Sempurna.mp3",
    img: "IMG/Sempurna.webp",
  },
  {
    title: "So Far Away",
    artist: "Avenged Sevenfold",
    index: 33,
    src: "music/SoFarAway.mp3",
    img: "IMG/SoFarAway.webp",
  },
  {
    title: "Somebody's Pleasure",
    artist: "Aziz Hedra",
    index: 34,
    src: "music/SomebodysPleasure.mp3",
    img: "IMG/SomebodysPleasure.webp",
  },
  {
    title: "Somewhere Only We Know",
    artist: "Keane",
    index: 35,
    src: "music/SomewhereOnlyWeKnow.mp3",
    img: "https://i.ytimg.com/vi/Oextk-If8HQ/maxresdefault.jpg",
  },
  {
    title: "Strong",
    artist: "One Direction",
    index: 36,
    src: "music/Strong.mp3",
    img: "IMG/Strong.webp",
  },
  {
    title: "Take Me Home",
    artist: "Cash Cash, Bebe Rexha",
    index: 37,
    src: "music/TakeMeHome.mp3",
    img: "IMG/TakeMeHome.webp",
  },
  {
    title: "That's So True",
    artist: "Gracie Abrams",
    index: 38,
    src: "music/ThatsSoTrue.mp3",
    img: "IMG/ThatsSoTrue.webp",
  },
  {
    title: "The Night We Met",
    artist: "Lord Huron",
    index: 39,
    src: "music/TheNightWeMet.mp3",
    img: "IMG/TheNightWeMet.webp",
  },
  {
    title: "Wish You Were Here",
    artist: "Neck Deep",
    index: 40,
    src: "music/WishYouWereHere.mp3",
    img: "IMG/WishYouWereHere.webp",
  },
  {
    title: "Yellow",
    artist: "Coldplay",
    index: 41,
    src: "music/Yellow.mp3",
    img: "https://i.ytimg.com/vi/yKNxeF4KMsY/maxresdefault.jpg",
  },
  {
    title: "You'll Be in My Heart",
    artist: "Phil Collins",
    index: 42,
    src: "music/YoullBeinMyHeart.mp3",
    img: "IMG/YoullBeinMyHeart.webp",
  },
  {
    title: "You're Not Alone",
    artist: "Saosin",
    index: 43,
    src: "music/YoureNotAlone.mp3",
    img: "IMG/YoureNotAlone.webp",
  },
];

// Elements
const musicListSection = document.getElementById("music-list");
const nowPlayingSection = document.getElementById("now-playing");
const bottomNowPlayingBar = document.getElementById("bottom-now-playing-bar");
const playButton = document.getElementById("play-button");
const closeNowPlayingBtn = document.getElementById("close-now-playing");
const playPauseBtn = document.getElementById("play-pause-btn");
const bottomPlayPauseBtn = document.getElementById("bottom-play-pause");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const audioPlayer = document.getElementById("audio-player");

const nowPlayingTitle = document.getElementById("now-playing-title");
const nowPlayingArtist = document.getElementById("now-playing-artist");
const nowPlayingImg = document.getElementById("now-playing-img");
const bottomSongTitle = document.getElementById("bottom-song-title");
const bottomSongArtist = document.getElementById("bottom-song-artist");
const bottomNowPlayingImg = document.getElementById("bottom-now-playing-img");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

// State
let currentSongIndex = 0;
let isPlaying = false;

// Format seconds to mm:ss
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// Update UI for current song
function updateNowPlayingUI() {
  const song = songs[currentSongIndex];
  nowPlayingTitle.textContent = song.title;
  nowPlayingArtist.textContent = song.artist;
  nowPlayingImg.src = song.img;
  bottomSongTitle.textContent = song.title;
  bottomSongArtist.textContent = song.artist;
  bottomNowPlayingImg.src = song.img;
  durationEl.textContent = "0:00";
  audioPlayer.src = song.src;
  audioPlayer.load();
}

// Show now playing screen
function showNowPlaying() {
  musicListSection.style.transform = "translateX(-100%)";
  nowPlayingSection.style.transform = "translateX(0)";
  isPlaying = true;
  bottomNowPlayingBar.classList.remove("opacity-0", "pointer-events-none");
  updatePlayPauseIcon(true);
  audioPlayer.play();
}

// Hide now playing screen
function hideNowPlaying() {
  musicListSection.style.transform = "translateX(0)";
  nowPlayingSection.style.transform = "translateX(100%)";
  bottomNowPlayingBar.classList.remove("opacity-0", "pointer-events-none");
  isPlaying = true;
  updatePlayPauseIcon(true);
  audioPlayer.play();
}

// Update play/pause icons
function updatePlayPauseIcon(playing) {
  if (playing) {
    playPauseBtn.innerHTML = '<i class="fas fa-pause text-2xl pl-1"></i>';
    bottomPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    playPauseBtn.innerHTML = '<i class="fas fa-play text-2xl pl-1"></i>';
    bottomPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

// Play selected song and show now playing screen
function playSong(index) {
  currentSongIndex = index;
  updateNowPlayingUI();
  showNowPlaying();
}

// Toggle play/pause
function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    isPlaying = true;
  } else {
    audioPlayer.pause();
    isPlaying = false;
  }
  updatePlayPauseIcon(isPlaying);
}

// Play previous song
function playPreviousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateNowPlayingUI();
  if (isPlaying) {
    audioPlayer.play();
  }
}

// Play next song
function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateNowPlayingUI();
  if (isPlaying) {
    audioPlayer.play();
  }
}

// Update current time display
audioPlayer.addEventListener("timeupdate", () => {
  currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
});

// Update duration display when metadata loaded
audioPlayer.addEventListener("loadedmetadata", () => {
  durationEl.textContent = formatTime(audioPlayer.duration);
});

// Dynamically generate song list
function generateSongList() {
  const songList = document.querySelector("#music-list ul");
  songList.innerHTML = ""; // Clear existing list
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center cursor-pointer hover:text-white";
    li.setAttribute("data-index", index);
    li.innerHTML = `
      <div>
        <span class="font-semibold text-white">${(index + 1)
          .toString()
          .padStart(2, "0")}</span>
        <span class="ml-2">${song.title}</span>
        <p class="text-xs text-gray-500 ml-7">${song.artist}</p>
      </div>
      <button aria-label="More options" class="text-gray-500 hover:text-white">
        <i class="fas fa-ellipsis-h"></i>
      </button>
    `;
    li.addEventListener("click", () => playSong(index));
    songList.appendChild(li);
  });
}

// Event listeners
playButton.addEventListener("click", () => {
  playSong(currentSongIndex);
});

closeNowPlayingBtn.addEventListener("click", () => {
  hideNowPlaying();
});

bottomNowPlayingBar.addEventListener("click", () => {
  showNowPlaying();
});

playPauseBtn.addEventListener("click", togglePlayPause);
bottomPlayPauseBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePlayPause();
});

previousBtn.addEventListener("click", playPreviousSong);
nextBtn.addEventListener("click", playNextSong);

// Initialize UI
generateSongList();
updateNowPlayingUI();
musicListSection.style.transform = "translateX(0)";
nowPlayingSection.style.transform = "translateX(100%)";
bottomNowPlayingBar.classList.add("opacity-0", "pointer-events-none");
