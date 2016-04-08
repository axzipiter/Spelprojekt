var Game;
(function (Game) {
    var Fajtklubb = (function () {
        function Fajtklubb() {
            this.game = new Phaser.Game(500, 300, Phaser.AUTO, 'content', { create: this.create, preload: this.preload });
        }
        Fajtklubb.prototype.preload = function () {
            //graphics
            this.game.load.image("test", "Graphics/testchar.png");
            this.game.load.image("TitleBKG", "Graphics/TitleScreen.png");
            this.game.load.image("InGameBKG", "Graphics/GameScreen.png");
            //spritesheets
            //audio
            this.game.load.audio("TitleSong", ["Sound/Sunny_Village.mp3"]);
        };
        Fajtklubb.prototype.create = function () {
            this.game.state.add("TitleScreenState", Game.TitleScreenState, false); //true on det ska vara aktuellt state
            this.game.state.add("TitleScreenState", Game.InGameState, true);
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        };
        return Fajtklubb;
    }());
    Game.Fajtklubb = Fajtklubb;
})(Game || (Game = {}));
window.onload = function () {
    var game = new Game.Fajtklubb();
};
//# sourceMappingURL=app.js.map