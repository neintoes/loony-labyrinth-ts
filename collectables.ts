// GH2
class Key extends sprites.ExtendableSprite {
    constructor() {
        super(assets.image`key`, SpriteKind.Key);
        scene.placeOnRandomTile(this, mazes.DEFAULT_COLOR_MAP_PATH);
    }
}
// end GH2