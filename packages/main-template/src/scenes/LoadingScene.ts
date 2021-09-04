import { Scene } from 'phaser';

export class LoadingScene extends Scene {
	constructor() {
		super('loading-scene');
	}

	preload(): void {
		this.load.baseURL = 'assets/';
		// add images here
		this.load.image('pickle', 'sprites/pickle.png');
	}

	create(): void {
		this.scene.start('main-scene');
	}
}
