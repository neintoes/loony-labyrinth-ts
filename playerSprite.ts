class PlayerSprite extends sprites.ExtendableSprite {
    // GH2
    public keyCollected: boolean = false;
    // end GH2

    constructor() {
        super(assets.image`dino`, SpriteKind.Player)
        this.registerControls();
        this.setFlag(SpriteFlag.GhostThroughWalls, true);
    }

    private registerControls() {
        controller.moveSprite(this);
    }
}