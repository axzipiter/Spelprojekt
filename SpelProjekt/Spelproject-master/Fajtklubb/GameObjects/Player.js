var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game;
(function (Game) {
    (function (PlayerState) {
        PlayerState[PlayerState["IDLE"] = 0] = "IDLE";
        PlayerState[PlayerState["WALKING"] = 1] = "WALKING";
    })(Game.PlayerState || (Game.PlayerState = {}));
    var PlayerState = Game.PlayerState;
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            _super.call(this, game, x, y, "test", 0);
        }
        Player.maxSpeed = 30;
        return Player;
    }(Phaser.Sprite));
    Game.Player = Player;
})(Game || (Game = {}));
//https://www.youtube.com/watch?v=T8a8-SO6vP0 38:00 
//# sourceMappingURL=Player.js.map