const songList = [
    {
    title:`How Can I Forget You`,
    album:`How Can I Forget`,
    songSrc: `/music/How_can_I.mp3`,
    imgSrc: `../img/album1.jpg`
},
{
    title:`You Can Leave or I Can Go`,
    album:`How Can I Forget`,
    songSrc: `/music/How_can_I.mp3`,
    imgSrc: `../img/album2.jpg`
},
{
    title:`Mahal Kita`,
    album:`How Can I Forget`,
    songSrc: `/music/How_can_I.mp3`,
    imgSrc: `../img/album2.jpg`
}

]



const getEl = (selector) => document.getElementById(selector)

const playingTitle = getEl(`playingTitle`)
const songSrc = getEl(`audio`)
const coverPlaying = getEl(`cover`)
const playOrpause = getEl(`playPause`)
const nextSong = getEl(`nextBtn`)
const prevSong = getEl(`prevBtn`)
const volume = getEl(`volume`)
const replaySong = getEl(`replayBtn`)

let playingIndex = 0


const musicPlaying = new Audio()
musicPlaying.src = songList[playingIndex].songSrc
coverPlaying.src = songList[playingIndex].imgSrc


//// Play and pause song on Index
playOrpause.addEventListener(`click`, function(){
    if (musicPlaying.paused) {
    musicPlaying.play();
    document.getElementById(`playPause`).src=`img/buttons/pause.svg`;
    
    } 
    else {
    musicPlaying.pause();
    document.getElementById(`playPause`).src=`img/buttons/play-arrow.svg`;
    // album-cover.classList.add(`play`);
    }

}) 

//// Previous button
prevBtn.addEventListener(`click`, function() {
    playingIndex --
	
    if (playingIndex < 0){
    playingIndex = songList.length - 1
    } else {
    musicPlaying.src = songList[playingIndex].songSrc
    }
    playingTitle.innerText = `${songList[playingIndex].title}`
    musicPlaying.src = songList[playingIndex].songSrc
    coverPlaying.src = songList[playingIndex].imgSrc

    musicPlaying.play();
    
  })

  ////Next button
nextBtn.addEventListener(`click`, function() {
    playingIndex ++

    if (playingIndex > songList.length){
    playingIndex = 0
    } else {
    musicPlaying.src = songList[playingIndex].songSrc
    }
    playingTitle.innerText = `${songList[playingIndex].title}`
    musicPlaying.src = songList[playingIndex].songSrc
    coverPlaying.src = songList[playingIndex].imgSrc

    musicPlaying.play();
  })

/////Repeat button
replayBtn.addEventListener(`click`, function(){
    musicPlaying.currentTime = 0
}) 
