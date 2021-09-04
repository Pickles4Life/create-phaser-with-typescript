import { Types } from 'phaser';
import { LoadingScene } from 'src/scenes/LoadingScene';
import { MainScene } from 'src/scenes/MainScene';

const gameConfig: Types.Core.GameConfig = {
	title: 'Galaga',
	type: Phaser.WEBGL,
	parent: 'game',
	width: 800,
	height: 600,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	physics: {
		default: 'arcade',
		arcade: {
			//debug: true,
			//debugShowBody: true,
		},
	},
	autoFocus: true,
	scene: [LoadingScene, MainScene],
};

export default gameConfig;
