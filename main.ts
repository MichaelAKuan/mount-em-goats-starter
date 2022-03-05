namespace SpriteKind {
    export const Mashroom = SpriteKind.create()
    export const StackMashroom = SpriteKind.create()
}
function createNewmashroom  () {
    newMashroom = sprites.create(MashroomImgs[randint(0, MashroomImgs.length - 1)], SpriteKind.Mashroom)
    newMashroom.setPosition(randint(20, 140), topMashroom.y - 20)
    if (Math.percentChance(50)) {
        newMashroom.vx = randint(40, 60)
    } else {
        newMashroom.vx = randint(-40, -60)
        newMashroom.setBounceOnWall(true)
    }
    newMashroom.setBounceOnWall(true)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    newMashroom.vx = 0
    newMashroom.ay = 300
})
let newMashroom: Sprite = null
let basemashroom: Sprite = null
let MashroomImgs: Image[] = []
MashroomImgs = [
img`
    . . . . . . b b b b . . . . . . 
    . . . . b b 3 3 3 3 b b . . . . 
    . . . c b 3 3 3 3 1 1 b c . . . 
    . . c b 3 3 3 3 3 1 1 1 b c . . 
    . c c 1 1 1 3 3 3 3 1 1 3 c c . 
    c c d 1 1 1 3 3 3 3 3 3 3 b c c 
    c b d d 1 3 3 3 3 3 1 1 1 b b c 
    c b b b 3 3 1 1 3 3 1 1 d d b c 
    c b b b b d d 1 1 3 b d d d b c 
    . c b b b b d d b b b b b b c . 
    . . c c b b b b b b b b c c . . 
    . . . . c c c c c c c c . . . . 
    . . . . . . b 1 1 b . . . . . . 
    . . . . . . f 1 f b b . . . . . 
    . . . . . b b d 1 1 b . . . . . 
    . . . . . b d d 1 1 b . . . . . 
    `,
img`
    ..........b5bbb5bbb5bb..........
    .......bbb751115777577bbb.......
    .....cbb7755555555557777bbb.....
    ....cb77777711117777777111db....
    ...cb111117f777777f77711111db...
    .ccbb1111117777777777711111ddcc.
    ccbbd1111117777777777771111ddbcc
    cbbbdd111117ffff7111777711ddbbbc
    cbbbdddd1177777711111777bbbbbbbc
    .cbbbddddbbb77771111dbbbbbbbbbc.
    .ccbbbbbbbbbbbbbbdddbbbbbbbbbcc.
    ...cccbbbbbbbbbbbbbbbbbbbbccc...
    ......cccccccccccccccccccc......
    ............bbbd11bb............
    ...........bbbdd111bb...........
    ..........bbbdddd11dbb..........
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . b b f 1 1 f b b . . . . 
    . . . c b 1 f f 1 f f b c . . . 
    . . c b f 1 f f f f f f b c . . 
    . c b f f f f f 1 f f f f c c . 
    c b d f f f 1 1 1 1 1 f f b b c 
    c b b d f f 1 f f f 1 1 f b b c 
    c b b b f f f f f f f f d d b c 
    . c b b b d d f f f b d d d c . 
    . . c c b b d d b b b b c c . . 
    . . . . c c c c c c c c . . . . 
    . . . . . b b d 1 1 b . . . . . 
    . . . . . b d d 1 1 b . . . . . 
    `,
img`
    . . . . . . . . . e . . . . . . 
    . . e e e . . e e . . . . . . . 
    . e . . e . . e . . . . e e e . 
    . . . . . b d d 1 1 b e e . . e 
    . . . . . b b d 1 1 b . . . . . 
    . . . . c c c c c c c c . . . . 
    . . c c b b d d b b b b c c . . 
    . c b b b d d 1 1 2 b d d d c . 
    c b b b 2 2 1 1 2 2 1 1 d d b c 
    c b b d 1 f 2 2 2 f 1 1 1 b b c 
    c b d 1 1 1 2 2 2 2 2 2 2 b b c 
    . c b 1 1 f f f f 2 1 1 2 c c . 
    . . c b 2 2 2 2 2 1 1 1 b c . . 
    . . . c b 2 2 2 2 1 1 b c . . . 
    . . . . b b 2 2 2 2 b b . . . . 
    . . . . . . b b b b . . . . . . 
    `,
img`
    ................................
    ................................
    ..........bbbbbbbbbbbb..........
    .......bbb33eeee333333bbb.......
    .....cbb333eeeeee33e3333bbb.....
    ....cb3e3333eeee333eee3111db....
    ...cb3e1113333333ee3eee1111db...
    ..cbbee1111eee33333333eee11ddc..
    .cbbdee11113fecfc33ee331e11ddbc.
    cbbbdd111ee333333111e33311ddbbbc
    cbbbdddd11e33ff3ee1ee333bbbbbbbc
    ccbbbddddbbb33331eeedbbbbbbbbbcc
    .ccbbbbbbbbbbbbbbdddbbbbbbbbbcc.
    ..cccbbbbbbbbbbbbbbbbbbbbbbccc..
    .....cccccccccccccccccccccc.....
    ..........bbbdddd11dbb..........
    `,
img`
    ........................
    .....bbbbb..............
    ....b55555bb............
    ...b55551115b...........
    ...b555511115b..........
    ..b1155551115bc.........
    .b11155555555bbb........
    bb115f115f55bbbc.bbbb...
    cbb5511115bbddbcb5511b..
    cbbbbdffffbdddcbb55115c.
    .cbbbbddbbbdfffddbf5f5bc
    ..ccbbbbbbbb..ffdbbbddbc
    ....cccccccb...bbbfffdbc
    ......b1ddb......bbbbbc.
    .....b11ddb.....bccccc..
    .....b1ddbb.....bddb....
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . b a a c c . . . . . . . 
    . . . . b 4 4 4 c c c c . . . . 
    . . . . b 4 4 4 4 4 4 4 c . . . 
    . . . b b 1 4 4 4 4 4 4 b . . . 
    . . . c b 4 1 f 4 f 4 4 b . . . 
    . . . c c 4 4 4 4 4 1 1 b . . . 
    . . . . . c c 4 f 4 1 4 c . . . 
    . . . . . . b c c c c c . . . . 
    . . . . . . b d d b . . . . . . 
    . . . . . . b d d b . . . . . . 
    . . . . . . b d d b . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b b . . . . . . 
    . . . . . . . . d d b b . . . . 
    . . . . . . . . d 1 1 b c . . . 
    . . . . . . . . d 1 1 1 b c . . 
    . . . . . . . . f d 1 f d c c . 
    . . . . . . . . d d d d d b b c 
    . . . . . . . . 1 f f 1 1 b b c 
    . . . . . . . . 1 d 1 1 d d b c 
    . . . . . . . . 1 d b d d d c . 
    . . . . . . . . 1 b b b c c . . 
    . . . . . . . . 1 c c c . . . . 
    . . . . . . . . 1 1 b . . . . . 
    . . . . . . . . 1 1 b . . . . . 
    `,
img`
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 4 4 5 5 4 4 4 2 2 2 . 
    . 2 2 5 5 d 4 5 5 5 4 4 4 4 2 . 
    . 2 4 5 5 5 5 d 5 5 5 4 5 4 2 2 
    . 2 4 d d f 5 5 5 f 5 d 4 4 4 2 
    2 4 5 5 d 5 5 5 d d d 5 5 5 4 4 
    2 4 5 5 4 4 f f f 5 d 5 5 5 4 4 
    4 4 4 4 . . 2 4 5 5 . . 4 4 4 4 
    . . b b b b 2 4 4 2 b b b b . . 
    . b d d d d 2 4 4 2 d d d d b . 
    b d d b b b 2 4 4 2 b b b d d b 
    b d d b b b b b b b b b b d d b 
    b b d 1 1 3 1 1 d 1 d 1 1 d b b 
    . . b b d d 1 1 3 d d 1 b b . . 
    . . 2 2 4 4 4 4 4 4 4 4 2 2 . . 
    . . . 2 2 4 4 4 4 4 2 2 2 . . . 
    `,
img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 f 2 2 2 f 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    b b b b b b f f f d b b b b b b 
    . . . . . . c d d d b . . . . . 
    . . . . . . . c d d b . . . . . 
    . . . . . . c c d d b . . . . . 
    . . . . . . c d d d b . . . . . 
    . . . . . . c d d d b . . . . . 
    . . . . . . c d d d b . . . . . 
    . . . . . . c d d b b . . . . . 
    `,
img`
    . . . . . . c c c . . . . . . . 
    . . . . . a a a c c c . . . . . 
    . . . c a c f a a a a c . . . . 
    . . c a c 9 9 f a f f a c . . . 
    . c c a c c 9 a a c 9 9 a c . . 
    . a b a a c 6 a a c c 9 a c c c 
    . a b b b 6 a b b a a c a 9 9 c 
    . . a b b a f c b b f a c 9 9 c 
    c . a a a c c 9 c b a a c 9 a c 
    c c a c a c f f f f f b a c a c 
    a c a b c c a 6 a b b 6 b b c . 
    . . . c c c c d d c c c c c c . 
    . . . . . . c d d b . . . . . . 
    . . . . . . c d d b . . . . . . 
    . . . . . . c c d b . . . . . . 
    . . . . . . . c d b . . . . . . 
    `,
img`
    . . . . . . c c c c c c . . . . 
    . . . . c c b b d d d d c . . . 
    . . . c c b b d d d d d d c . . 
    . . c b b d b d d d d d d b c . 
    . c b b b d b b d d d d d b c . 
    . c b f b d d b d f d d b b c . 
    c b c b b b d d b b b b b c c . 
    c b c c b f f f f d d b c c c . 
    c b b c c c c c c c c c c c c . 
    . . . . . b b b c c . . . . . . 
    . . . . . c d d b . . . . . . . 
    . . . . . c d d b . . . . . . . 
    . . . . . c d d b b . . . . . . 
    . . . . . c c d d b . . . . . . 
    . . . . . . c d d b . . . . . . 
    . . . . . . c d d b . . . . . . 
    `,
img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ........c777........
    .......777777.......
    .........cc.........
    .........7c.........
    ........7777........
    .......77c777.......
    ......77c77777......
    .....77c77777f7.....
    .....777f777777.....
    .....7777777ffc.....
    ......777ffffc......
    .......7cddcc.......
    ........cddddc......
    ........ccdddc......
    `,
img`
    ........1b......
    ........11......
    ...bbb..........
    ..bddb.......bb.
    .b111b.b....b11b
    .bd11..d.bb.11db
    .bbb..bd.bb..bb.
    ......bdb.......
    .......bb.......
    ..b1bddddddb1b..
    .bdccccbddccddb.
    bd1cbddbbbbccddb
    c11fbcccdbbfcddc
    c1dddbbccdbbddcc
    .ccbdfffffdccccc
    ...ccccccb......
    ......bdddb.....
    ......bdddbb....
    ......bbdddb....
    .......bbddb....
`,
img`
    ................
    ................
    ................
    ................
    ................
    ................
    ...bbbbbbbbbb...
    ..b1111111111b..
    .b111111111111b.
    .b111111111111b.
    .bddccccccccddb.
    .bdc66666666cdb.
    .bdc61d66666cdb.
    .bdc6f6666f6cdb.
    .bdc66666666cdb.
    .bdc66ffff66cdb.
    .bdc66666666cdb.
    .bddcc2cccccddb.
    .....222dcf.....
    .....b2ddfc.....
    .....bbbddc.....
    .....ddbbdc.....
    `,
img`
    ........................
    ........................
    .............ccccbb.....
    .......cccccc1ddd11b....
    ......cc1111111d1111b...
    ...bbbd11111111d1111b...
    ..b11111111111111111bb..
    .b11111111111111111d11b.
    .b111d111f111f111111111b
    cdd1d111111111111111111c
    cdddd11111111111111111dc
    cddbd11111fffff1dd111dc.
    .cbbdd111dddd11ddbdddcc.
    .ccbbdddddbdddddddbcc...
    ...cccdddbbbdddddcc.....
    ......ccccccccccc.......
    ..........bdddc.........
    ..........bdddc.........
    ..........bdddc.........
    `
]
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level`)
basemashroom = sprites.create(MashroomImgs[randint(0, MashroomImgs.length - 1)], SpriteKind.StackMashroom)
let topMashroom = basemashroom
basemashroom.ay = 300
basemashroom.setPosition(80, 600)
scene.cameraFollowSprite(basemashroom)
createNewmashroom ()
sprites.onOverlap(SpriteKind.StackMashroom, SpriteKind.Mashroom, function(sprite: Sprite, droppedMashroom: Sprite) {
    droppedMashroom.ay = 0 
    droppedMashroom.vy = 0
droppedMashroom.setKind(SpriteKind.StackMashroom)
topMashroom = droppedMashroom 
    createNewmashroom ()
    scene.cameraFollowSprite(topMashroom)
    
})
scene.onHitWall(SpriteKind.Mashroom, function (sprite: Sprite, location: tiles.Location) {

})