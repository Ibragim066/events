import GamePlay from './components/GamePlay/GamePlay';
import GameController from './components/GameController/GameController';

const gamePlay = new GamePlay(4);
gamePlay.bindToDOM(document.querySelector('#game-container'));

const gameCtrl = new GameController(gamePlay);
gameCtrl.init();
