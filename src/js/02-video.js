import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const setItemWithDelay = throttle((event) => localStorage.setItem('videoplayer-current-time', JSON.stringify(event.seconds)), 1000);

if (localStorage["videoplayer-current-time"]) {
    player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')));
}

player.on('timeupdate', event => setItemWithDelay(event));

player.on('ended', () => localStorage.removeItem("videoplayer-current-time"));