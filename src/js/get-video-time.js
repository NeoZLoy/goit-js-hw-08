export default function getVideoTime() {
  player.getCurrentTime().then(function (seconds) {
    console.log(seconds);
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}
