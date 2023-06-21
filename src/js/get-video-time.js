export default function getVideoTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
