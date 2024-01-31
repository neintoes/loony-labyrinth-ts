class OverlapManager {
    private gameManager: GameManager;

    constructor(gameManager: GameManager) {
        this.gameManager = gameManager;
        this.initialiseEvents();
    }

    private initialiseEvents(): void {
        scene.onOverlapTile(SpriteKind.Player, assets.tile`door`, (playerSprite: PlayerSprite) => {
            // GH2
            if (playerSprite.keyCollected) {
                this.gameManager.newLevel();
            }
            // end GH2
        });

        // GH1
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Trap, (playerSprite: PlayerSprite, trap: Trap) => {
            game.over(false);
        })
        // end GH1
        // GH2
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Key, (playerSprite: PlayerSprite, key: Key) => {
            playerSprite.keyCollected = true;
            music.baDing.play();
            key.destroy();
        })
        // end GH2
    }
}