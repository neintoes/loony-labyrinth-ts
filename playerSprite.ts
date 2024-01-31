class PlayerSprite extends sprites.ExtendableSprite {
    // GH2
    public keyCollected: boolean = false;
    // end GH2

    constructor() {
        super(assets.image`dino`, SpriteKind.Player)
        this.registerControls();
    }

    private registerControls() {
        controller.moveSprite(this);
    }
}