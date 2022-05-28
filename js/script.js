document.addEventListener('DOMContentLoaded', () => {
	banner__title = document.querySelector('.banner__title');
	banner__title.classList.add('active');

	music = document.querySelector('.music');
	music.classList.add('active');

	btnmain = document.querySelector('.btnmain');
	btnmain.classList.add('active');
});

playbtn = document.querySelector('#play');
playlist__item__player__btn = document.querySelectorAll('.playlist__item__player__btn');

audio = document.querySelector('.audio');
playlist = document.querySelector('.playlist');

document.querySelector('#playkillaura').onclick = playkillaura;
document.querySelector('#playblusk').onclick = playblusk;
document.querySelector('#playjourneytowindrise').onclick = playjourneytowindrise;
document.querySelector('#play').onclick = play;

document.querySelector('#showMain').onclick = showMain;
document.querySelector('#showPlayer').onclick = showPlayer;
//document.querySelector('#showPlaylist').onclick = showPlaylist;

play0rPause = 0;
audio.volume = .5;

function play() {
	play0rPause++;
	
	if (play0rPause == 1) {
		playbtn.src = 'img/player/pause.png';
		audio.play();
	}
	else if (play0rPause > 1) {
		playbtn.src = 'img/player/play.png';
		play0rPause = 0;
		audio.pause();
	}
}

function playkillaura() {
	audio.src = 'music/killaura.mp3';
	play0rPause = 0;
	playlist__item__player__btn[0].src = 'img/player/pause.png';
	playlist__item__player__btn[1].src = 'img/player/play.png';
	playlist__item__player__btn[2].src = 'img/player/play.png';
	play();
}

function playblusk() {
	audio.src = 'music/blusk.mp3';
	play0rPause = 0;
	playlist__item__player__btn[0].src = 'img/player/play.png';
	playlist__item__player__btn[1].src = 'img/player/pause.png';
	playlist__item__player__btn[2].src = 'img/player/play.png';
	play();
}

function playjourneytowindrise() {
	audio.src = 'music/journeytowindrise.mp3';
	play0rPause = 0;
	playlist__item__player__btn[0].src = 'img/player/play.png';
	playlist__item__player__btn[1].src = 'img/player/play.png';
	playlist__item__player__btn[2].src = 'img/player/pause.png';
	play();
}

showPlayerCount = 1;

function showMain() {
	playlist.classList.remove('active');
	banner__title.classList.add('active');
	btnmain.classList.add('active');
}

function showPlayer() {
	showPlayerCount++;
	
	if (showPlayerCount == 1) {
		music.classList.add('active');
	}
	else if (showPlayerCount > 1) {
		music.classList.remove('active');
		showPlayerCount = 0;
	}
}

function showPlaylist() {
	playlist.classList.add('active');
	banner__title.classList.remove('active');
	btnmain.classList.remove('active');
}