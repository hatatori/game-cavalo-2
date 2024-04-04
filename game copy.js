var c = document.getElementById("gameScreenCanvas");
var ctx = c.getContext("2d");

// const img = new Image()
// img.src = "./art/grass.png"
// img.src = "./art/arvore_3.png"

// const props = {
//     position:{
//         x: 10,
//         y: 10
//     },

//     backgroundSize:{
//         w: 325,
//         h: 338
//     },

//     size: {
//         w: 325,
//         h: 338,
//     },

//     backgroundPosition:{
//         x: 0,
//         y: 0
//     }
// }

// img.onload = function() {
//     ctx.drawImage(
//         img,
//         props.backgroundPosition.x,
//         props.backgroundPosition.y, 
//         props.backgroundSize.w,
//         props.backgroundSize.h,
//         props.position.x,
//         props.position.y,
//         props.size.w, 
//         props.size.h
//     );
// };

const Draw = {

    w: document.body.offsetWidth,
    h: document.body.offsetHeight,

    c: document.getElementById("gameScreenCanvas"),
    ctx: this.c.getContext("2d"),
    obj:{
        x:10,
        y:10,
        bgx: 50,
        bgy: 50,
    },

    image(url){
        const img = new Image()
        img.src = url
        const props = {
            position:{
                x: 10,
                y: 10
            },
        
            backgroundSize:{
                w: 325,
                h: 338
            },
        
            size: {
                w: 325,
                h: 338,
            },
        
            backgroundPosition:{
                x: 0,
                y: 0
            }
        }
        img.onload = function() {
            const w = this.width
            const h = this.height
            // const w = 100
            // const h = 100
            // x, y, w, h, bgposx, bgposy, bgsizex, bgsizey
            ctx.drawImage(img, 0, 0, w, h, 10, 0, 200, 200);
        };
    }
}


Draw.image("./art/arvore_1.png")
Draw.image("./art/arvore_2.png")


