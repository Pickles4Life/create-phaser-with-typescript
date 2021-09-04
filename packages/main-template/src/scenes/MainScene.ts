import { Scene } from 'phaser';

export class MainScene extends Scene {
	constructor() {
		super('main-scene');
	}

	create(): void {
		this.add.image(20, 20, 'pickle');
	}
}
