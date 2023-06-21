import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
import getVideoTime from './get-video-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(getVideoTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
