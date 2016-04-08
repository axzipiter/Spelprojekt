module Game {
    export class InGameState extends Phaser.State {
        game: Phaser.Game;
        music: Phaser.Sound;
        inGameScreenImage: Phaser.Sprite;
        character: Phaser.Sprite;
        yPos: number;
        xPos: number;

        

        constructor() {
            super();
            this.xPos = 50;
            this.yPos = 50;
        }
        

        create() {
            this.inGameScreenImage = this.add.sprite(0, 0, "InGameBKG");
            this.inGameScreenImage.scale.setTo(
                this.game.width / this.inGameScreenImage.width,
                this.game.height / this.inGameScreenImage.height);
            this.character = this.add.sprite(this.xPos, this.yPos,"test");

            this.music = this.game.add.audio("TitleSong");
            this.music.volume = 0.05;
            this.music.loop = true;
            this.music.play();


        }
    }
}