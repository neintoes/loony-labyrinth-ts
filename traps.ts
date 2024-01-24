class Trap extends sprites.ExtendableSprite {
    constructor() {
        super(image.create(16, 16), SpriteKind.Trap);
        scene.placeOnRandomTile(this, mazes.DEFAULT_COLOR_MAP_PATH);
        this.setOrientation();

    }

    private setOrientation(): void {
        let neighbouringTiles = tilesAdvanced.getAdjacentTiles(this.tilemapLocation(), 2);
        if (tiles.tileAtLocationIsWall(neighbouringTiles[2]) && tiles.tileAtLocationIsWall(neighbouringTiles[4])) {
            animation.runImageAnimation(this, assets.animation`spikes horizontal`, 300, true);
        } else if (tiles.tileAtLocationIsWall(neighbouringTiles[6]) && tiles.tileAtLocationIsWall(neighbouringTiles[8])) {
            animation.runImageAnimation(this, assets.animation`spikes vertical`, 300, true);
        } else {
            this.destroy();
        }
    }
}