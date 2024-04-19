class Sprite{

    x = 0
    y = 0
    // ctx = ctx

    constructor(img_url, cols, lins, lin=0, col=0){
        this.img_url = img_url;
        this.cols = cols;
        this.lins = lins;
        this.img = new Image()
        this.img.src = this.img_url
        this.w = this.img.width/this.cols|0
        this.h = this.img.height/this.lins|0
        this.width = this.w
        this.height = this.h
        this.lin = lin
        this.col = col
    }

    draw(){
        ctx.drawImage(
            this.img,
            this.col*this.w, this.lin*this.h,
            this.w, this.h,
            this.x, this.y,
            this.width, this.height,
        );
    }
}



