import { Runner } from './index/offline.js';

window.addEventListener('load', () => {
  const trexGameContainer = document.querySelector('.trex-game');
  let runner = new Runner(trexGameContainer);
});
