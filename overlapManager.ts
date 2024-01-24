class OverlapManager {
    private gameManager: GameManager;

    constructor(gameManager: GameManager) {
        this.initialiseEvents();
    }

    private initialiseEvents(): void {
        scene.onOverlapTile(SpriteKind.Player, assets.tile`door`, (playerSprite: PlayerSprite) => {
            this.gameManager.mazeManager.generateMaze();
        });
    }
}