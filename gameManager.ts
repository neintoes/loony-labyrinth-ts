class GameManager {
    private playerSprite: PlayerSprite;
    public mazeManager: MazeManager;
    private overlapManager: OverlapManager;

    constructor() {
        this.mazeManager = new MazeManager();
        this.overlapManager = new OverlapManager(this);
        this.initialisePlayer();
        this.newLevel();
    }

    private initialisePlayer(): void {
        this.playerSprite = new PlayerSprite();
        scene.cameraFollowSprite(this.playerSprite)
    }

    private newLevel(): void {
        this.mazeManager.generateMaze();
        scene.place(this.mazeManager.startTile, this.playerSprite);
    }
}