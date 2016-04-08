module Game {
    export enum PlayerState { IDLE, WALKING }

    export class Player extends Phaser.Sprite {
        game: Phaser.Game;
        playerState: PlayerState;

        A_KEY: Phaser.Key;
        D_KEY: Phaser.Key;
        ESCAPE_KEY: Phaser.Key;

        speed: number;

        public static maxSpeed: number = 30;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, "test", 0);
        }
    }
}


//https://www.youtube.com/watch?v=T8a8-SO6vP0 38:00