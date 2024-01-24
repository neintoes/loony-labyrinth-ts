class GameManager {
    private playerSprite: PlayerSprite;
    private mazeManager: MazeManager;
    private overlapManager: OverlapManager;

    constructor() {
        this.mazeManager = new MazeManager();
        this.initialisePlayer();
        this.newLevel();
    }

    private initialisePlayer(): void {
        this.playerSprite = new PlayerSprite();
        scene.cameraFollowSprite(this.playerSprite)
        controller.moveSprite(this.playerSprite)
    }

    private newLevel(): void {
        this.mazeManager.generateMaze();
        // start_tile = scene.get_tiles_by_type(mazes.DEFAULT_COLOR_MAP_BEGIN)[0]
        // scene.place(start_tile, dino)
    }
}