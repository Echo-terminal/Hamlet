let  video = document.getElementById("Video"),
       playBtn = document.getElementById("PlayBtn"),
       progressBar = document.getElementById("Progress-Bar"),
       Volume = document.getElementById("Volume"),
       btnForward = document.getElementById("ForwardBtn"),
       btnRewind = document.getElementById("BackwardBtn"),
       fullscreenBtn = document.getElementById("FullScreen")
       btnVolume = document.getElementById("Vol");

// Pause & Play
function VidStatus() {
    if (video.paused){
        video.play();
        playBtn.src = './assets/vid_controls/pause.png';
    } else {
        video.pause();
        playBtn.src = './assets/vid_controls/min-play.svg';
    }
}

playBtn.addEventListener('click', VidStatus)
video.addEventListener('click', VidStatus)

// Progress Bar
function progressUpdate() {
    const value = (video.currentTime / video.duration) * 100;
    progressBar.value = value;
    progressBar.style.background = `linear-gradient(to right, #24809e 0%, #24809e ${value}%, #fff ${value}%, #fff 100%)`;
}

video.addEventListener('timeupdate', progressUpdate)

// Set Volume
function VolumeSet(){
    video.volume = this.value / 100;
    const value = this.value;
    this.style.background = `linear-gradient(to right, #24809e 0%, #24809e ${value}%, #fff ${value}%, #fff 100%)`;
}

Volume.addEventListener('input', VolumeSet)

function muteUnmute()
{
    if(video.volume == 0)
    {
        this.src = './assets/vid_controls/volume.svg'
        video.volume = 0.5;
        Volume.style.background = `linear-gradient(to right, #24809e 0%, #24809e 50%, #fff 50%, #fff 100%)`;
        Volume.value = 50;    
    }
    else
    {   
        this.src = './assets/vid_controls/mute.svg'
        video.volume = 0;
        Volume.style.background = `#fff`;
        Volume.value = 0;
    }
}

btnVolume.addEventListener('click', muteUnmute)

// Skip 30s
function SkipForward(){
    video.currentTime +=30;
}

btnForward.addEventListener('click', SkipForward)

function Rewind(){
    video.currentTime -=30;
}

btnRewind.addEventListener('click', Rewind)
 
//Fullscreen
function fullscreen(){
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
}
 
fullscreenBtn.addEventListener('click', fullscreen)

//Change Video Time
function ChangeVideoTime() {
    const value = progressBar.value/100;
    video.currentTime = value * video.duration;
}

progressBar.addEventListener('input', ChangeVideoTime)
