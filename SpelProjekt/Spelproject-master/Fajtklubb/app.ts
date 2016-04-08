module Game {
    export class Fajtklubb {
        game: Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(500, 300, Phaser.AUTO, 'content',
                { create: this.create, preload: this.preload });
        }
        preload() {
            //graphics
            this.game.load.image("test", "Graphics/testchar.png");
            this.game.load.image("TitleBKG", "Graphics/TitleScreen.png");
            this.game.load.image("InGameBKG", "Graphics/GameScreen.png");
            //spritesheets

            //audio
            this.game.load.audio("TitleSong", ["Sound/Sunny_Village.mp3"]);


        }

        create() {
            this.game.state.add("TitleScreenState", Game.TitleScreenState, false); //true on det ska vara aktuellt state
            this.game.state.add("TitleScreenState", Game.InGameState, true);

            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        }
    }
}

window.onload = () => {
    var game = new Game.Fajtklubb();
};