class PlayerSprite extends sprites.ExtendableSprite {
    constructor() {
        super(assets.image`dino`, SpriteKind.Player)
        this.registerControls();
    }

    private registerControls() {
        controller.moveSprite(this);
    }
}