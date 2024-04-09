const canvas = document.getElementById('canvas');
const ctx    = canvas.getContext('2d');

class Sprites{

    pic = {
        w: 5230/10,
        h: 3870/10,
        x: 0,
        y: 0,
        frame:0,
        framespeed: 1,
    }
    
    picLoaded = {
        w: 5230,
        h: 3870,
        l: 10,
        c: 10,
        frameLimit: 120
    }

    width=100;
    height=100;
    x=0;
    y=0;
     
    constructor(img_url, cols, lins){

        this.sprite = new Image()
        this.sprite.src = img_url
        this.picLoaded.frameLimit = cols*lins

        this.picLoaded.c = cols
        this.picLoaded.l = lins

        const w = this.sprite.width
        const h = this.sprite.height

        // this.pic.w = w/cols
        // this.pic.h = h/lins

        this.w = w/cols
        this.h = h/lins

        this.width = w/cols
        this.height = h/lins

        this.sprite.onload=()=>{
            this.picLoaded.w = w
            this.picLoaded.h = h
        }
    }

    draw(){
        
        // ctx.beginPath(); 
        // ctx.fillStyle = 'white'
        // ctx.rect(0, 0, 1920, 1080);
        // ctx.fill();

        this.pic.frame = this.pic.frame%this.picLoaded.frameLimit
        
        const c = (this.pic.frame % this.picLoaded.c) * this.w
        const l = (this.pic.frame / this.picLoaded.c|0) * this.h

        ctx.drawImage(
            this.sprite,
            c, l,
            this.w, this.h,
            this.x, this.y,
            this.width, this.height, //tamanho final da imagem
        );

    }
    
    refresh(){
        this.pic.frame++
    }

    
    bottom(n){ this.y = Screen.height - this.height - n }
    bottomP(n){ this.y = Screen.height - this.height - Screen.height * (n/100) }
    top(n){ this.y = n }
    topP(n){ this.y = Screen.height * n/100 }
    right(n){ this.x = Screen.width - this.width - n }
    left(n){ this.x = n }
    leftP(n){ this.x = Screen.width - this.width - Screen.width * (n/100) }

}

// const grandstand = new Sprites('./megaman.png', 5, 2)
// const grandstand = new Sprites('./horse_black.png', 10, 12)
const font = new Sprites('./font_1.png', 10, 30)



function loop(){
    grandstand.draw()
    grandstand.refresh()
    requestAnimationFrame(loop)
}

loop()

// setInterval(()=>{
//     grandstand.draw()
//     grandstand.refresh()
// }, 300)
