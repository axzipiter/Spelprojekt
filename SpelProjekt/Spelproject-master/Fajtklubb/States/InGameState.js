var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game;
(function (Game) {
    var InGameState = (function (_super) {
        __extends(InGameState, _super);
        function InGameState() {
            _super.call(this);
            this.xPos = 50;
            this.yPos = 50;
        }
        InGameState.prototype.create = function () {
            this.inGameScreenImage = this.add.sprite(0, 0, "InGameBKG");
            this.inGameScreenImage.scale.setTo(this.game.width / this.inGameScreenImage.width, this.game.height / this.inGameScreenImage.height);
            this.character = this.add.sprite(this.xPos, this.yPos, "test");
            this.music = this.game.add.audio("TitleSong");
            this.music.volume = 0.05;
            this.music.loop = true;
            this.music.play();
        };
        return InGameState;
    }(Phaser.State));
    Game.InGameState = InGameState;
})(Game || (Game = {}));
//# sourceMappingURL=InGameState.js.map