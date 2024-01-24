class OverlapManager {
    private gameManager: GameManager;

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
        this.initialiseEvents();
    }

    private initialiseEvents(): void {
        scene.onOverlapTile(SpriteKind.Player, assets.tile`door`, (playerSprite: PlayerSprite) => {
            this.gameManager.newLevel();
        });

        // GH1
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Trap, (playerSprite: PlayerSprite, trap: Trap) => {
            game.over(false);
        })
        // end GH1
    }
}