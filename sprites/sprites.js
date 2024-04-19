// var c = document.getElementById("canvas");
// var ctx = c.getContext("2d");

// class Sprite{

//     x = 0
//     y = 0
//     // ctx = ctx

//     constructor(img_url, cols, lins, lin=0, col=0){
//         this.img_url = img_url;
//         this.cols = cols;
//         this.lins = lins;
//         this.img = new Image()
//         this.img.src = this.img_url
//         this.w = this.img.width/this.cols|0
//         this.h = this.img.height/this.lins|0
//         this.width = this.w
//         this.height = this.h
//         this.lin = lin
//         this.col = col
//     }

//     draw(){
//         ctx.drawImage(
//             this.img,
//             this.col*this.w, this.lin*this.h,
//             this.w, this.h,
//             this.x, this.y,
//             this.width, this.height,
//         );
//     }
// }

const sprite = new Sprite("./art/money.png", 4, 2)

const spriteSheet = (l, c) => {
    const obj = {
        x: 0,
        y: 0,
        lin: l,
        col: c,
        width: 100,
        height: 100,
        sprite: sprite,

        draw(){
            this.sprite.lin = this.lin
            this.sprite.col = this.col
            this.sprite.x = this.x
            this.sprite.y = this.y
            
            this.sprite.width = this.width
            this.sprite.height = this.height

            this.sprite.draw()
        }
    }
    return obj
}

const star = spriteSheet(0, 0)
const trunk = spriteSheet(0, 1)
const gold = spriteSheet(0, 2)
const coin = spriteSheet(0, 3)
const bill = spriteSheet(1, 0)
const crown = spriteSheet(1, 1)
const trophy = spriteSheet(1, 2)
const ticket = spriteSheet(1, 3)

const Sprites = {
    star: star,
    trunk: trunk,
    gold: gold,
    coin: coin,
    bill: bill,
    crown: crown,
    trophy: trophy,
    ticket: ticket,
}

