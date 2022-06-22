const titleMusic = document.querySelector('.titleMusic');
const artistMusic = document.querySelector('.artistMusic');
const prev = document.querySelector('.prev');
const playpause = document.querySelector('.playpause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');

//songs list

const songList = [
    {
        path: '/songs/achievement-philip-anderson-main-version-01-31-13804.mp3',
        songName: 'Achievement',
        songArtist: 'Philip anderson',
    },
    {
        path: '/songs/bamboo-hartzmann-main-version-03-26-15301.mp3',
        songName: 'Bamboo',
        songArtist: 'hartzmann',
    },
    {
        path: '/songs/big-dreams-simon-folwar-main-version-02-25-18020.mp3',
        songName: 'big dreams',
        songArtist: 'simon folwar',
    },
    {
        path: '/songs/fashion-queen-trinity-main-version-02-00-13121.mp3',
        songName: 'fashion',
        songArtist: 'queen-trinity',
    },
    {
        path: '/songs/funk-you-abbynoise-main-version-15605-01-52.mp3',
        songName: 'funk you',
        songArtist: 'abbynoise',
    },
    {
        path: '/songs/ode-ii-arend-main-version-06-21-6719.mp3',
        songName: 'ode',
        songArtist: 'arend',
    },
    {
        path: '/songs/serenity-ilya-kuznetsov-main-version-03-38-3939.mp3',
        songName: 'serenity',
        songArtist: 'ilya-kuznetsov',
    },
    {
        path: '/songs/ultraviolet-infraction-main-version-01-37-19149.mp3',
        songName: 'ultraviolet',
        songArtist: 'infraction',
    },
];

let song_playing = false;

//for play song:

function playSong() {
    song_playing = true;
    audio.play();
    playpause.classList.add('active');

    //change icon play for pause icon
    playpause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}

//for pause the song:

function pauseSong() {
    song_playing = false;
    audio.pause();
    playpause.classList.remove('active');

    //change icon pause for play icon
    playpause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

//play or pause song:

playpause.addEventListener('click', () => (
    song_playing ? pauseSong() : playSong()
));

//load the song:

function loadSong(songList) {
    titleMusic.textContent = songList.songName;
    artistMusic.textContent = songList.songArtist;
    audio.src = songList.path;
}

//current song:

let i = 0;

//on load - select first song from song list:

loadSong(songList[i]);

//previous song:

function prevSong() {
    i--;
    if (i < 0) {
        i = songList.length - 1;
    }
    loadSong(songList[i]);
    playSong();
}

prev.addEventListener('click', prevSong);

//next song:

function nextSong() {
    i++;
    if (i >= songList.length + 1 ) {
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
}

next.addEventListener('click', nextSong);