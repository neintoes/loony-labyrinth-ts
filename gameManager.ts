// GH1
namespace SpriteKind {
    export const Trap = SpriteKind.create();
}
// end GH1

class GameManager {
    private playerSprite: PlayerSprite;
    private overlapManager: OverlapManager;
    public mazeManager: MazeManager;

    constructor() {
        this.overlapManager = new OverlapManager(this);
        this.initialisePlayer();
        this.newLevel();
    }

    private initialisePlayer(): void {
        this.playerSprite = new PlayerSprite();
        scene.cameraFollowSprite(this.playerSprite)
    }

    // GH1
    private spawnTraps(): void {
        for (let i = 0; i < 32; i++){
            new Trap();
        }
    }
    // end GH1

    public newLevel(): void {
        this.mazeManager = new MazeManager();
        this.mazeManager.generateMaze();
        // GH1
        this.spawnTraps();
        // end GH1
        scene.place(this.mazeManager.startTile, this.playerSprite);
    }
}