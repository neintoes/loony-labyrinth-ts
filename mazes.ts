class TileSet {
    public start: Image;
    public end: Image;
    public wall: Image;
    public floor: Image;

    constructor(start: Image, end: Image, wall: Image, floor: Image) {
        this.start = start;
        this.end = end;
        this.wall = wall;
        this.floor = floor;
    }
}

class MazeManager {
    readonly gridSize: number = 16;
    readonly pathWidth: number = 1;
    private maze: mazes.Grid;
    private tileSets: { [key: string]: TileSet } = {};
    public startTile: tiles.Tile;
    public currentTileSet: TileSet;

    constructor() {
        this.initialiseTileSets();
        this.maze = mazes.buildMaze(this.gridSize, this.gridSize, MazeType.AldousBroder);
        this.currentTileSet = this.tileSets["standard"];
    }

    private initialiseTileSets(): void {
        this.tileSets["standard"] = new TileSet(
            assets.tile`portal`,
            assets.tile`door`,
            assets.tile`wall`,
            assets.tile`floor`
        );
        // additional tilesets added here
    }

    public generateMaze(): void {
        let startCol = randint(1, this.gridSize - 1);
        let startRow = randint(1, this.gridSize - 1);
        let endCol = randint(1, this.gridSize - 1);
        let endRow = randint(1, this.gridSize- 1);
        this.setTileTypes(this.currentTileSet);
        this.maze.setSolutionCells(startRow, startCol, endRow, endCol);
        this.maze.solve();
        scene.setTileMap(this.maze.buildTileMapBlocks(this.pathWidth))
        if (this.startNearEnd()) {
            this.generateMaze();
        }
        this.startTile = scene.getTilesByType(mazes.DEFAULT_COLOR_MAP_BEGIN)[0]
    }

    private startNearEnd(): boolean {
        let startTile = scene.getTilesByType(mazes.DEFAULT_COLOR_MAP_BEGIN)[0];
        let endTile = scene.getTilesByType(mazes.DEFAULT_COLOR_MAP_END)[0];
        let distance = spriteutils.distanceBetween(startTile, endTile);
        return distance < 280;
    }

    private setTileTypes(tileSet: TileSet) {
        scene.setTile(mazes.DEFAULT_COLOR_MAP_WALL, tileSet.wall, true);
        scene.setTile(mazes.DEFAULT_COLOR_MAP_BEGIN, tileSet.start, false);
        scene.setTile(mazes.DEFAULT_COLOR_MAP_END, tileSet.end, false);
        scene.setTile(mazes.DEFAULT_COLOR_MAP_PATH, tileSet.floor, false);
        scene.setTile(mazes.DEFAULT_COLOR_MAP_SOLUTION, tileSet.floor, false);
    }
}