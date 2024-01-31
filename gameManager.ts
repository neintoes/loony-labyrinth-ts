// GH1
namespace SpriteKind {
    export const Trap = SpriteKind.create();
    // GH2
    export const Key = SpriteKind.create();
    // end GH2
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
        for (let i = 0; i < 32; i++) {
            new Trap();
        }
    }

    private clearTraps(): void {
        for (let trap of sprites.allOfKind(SpriteKind.Trap)) {
            trap.destroy();
        }
    }
    // end GH1

    public newLevel(): void {
        //GH1
        this.clearTraps();
        // end GH1
        this.mazeManager = new MazeManager();
        this.mazeManager.generateMaze();
        // GH1
        this.spawnTraps();
        // end GH1
        scene.place(this.mazeManager.startTile, this.playerSprite);
        new Key();
    }
}