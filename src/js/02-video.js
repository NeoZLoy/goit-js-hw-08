import Vimeo from '@vimeo/player';
import getVideoTime from './get-video-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('pause', getVideoTime);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
