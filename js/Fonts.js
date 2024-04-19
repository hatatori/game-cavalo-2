
class Font{
    
    w = 600
    h = 320
    width = 600
    height = 320
    x = 0
    y = 0
    frame = 1

    img_url='./fonts/fonts/font-40x40-fps.png'
    cols=15
    lins=8
    alphabet= ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLNMOPQRSTUVWXYZ|¿]^_'abcdefghijklmnopqrstuvwxyz<|>~º☺`  
    
    
    constructor(img_url='./fonts/fonts/font-40x40-fps.png', cols=15, lins=8){
        this.img_url = img_url;
        this.cols = cols;
        this.lins = lins;
        

        // this.img = new Image()
        // this.img.src = this.img_url
        // this.w = this.img.width/this.cols|0
        // this.h = this.img.height/this.lins|0
        // this.width = this.w
        // this.height = this.h
        // this.c = this.cols
        // this.l = this.lins
    }

    adjust(){
        this.img = new Image()
        this.img.src = this.img_url
        this.w = this.img.width/this.cols|0
        this.h = this.img.height/this.lins|0
        this.width = this.w
        this.height = this.h
        this.c = this.cols
        this.l = this.lins
    }

    text(phrase){
        this.adjust()
        phrase.split("\n").map((e,i)=>{
            this.textLine(e,i)
        })
    }

    textLine(phrase, lin=0){
        // const txt = this.texto.split("\n")
        // console.log(txt)
        // this.texto = phrase

        phrase.split('').map((e,i)=>{

            const pos = this.alphabet.indexOf(e)
            const a = pos%this.c
            const b = (pos/this.c)|0
            

            ctx.drawImage(
                this.img,
                a*this.w, b*this.height,
                this.w, this.h,
                this.x + i*this.w, this.y+this.h*lin,
                this.width, this.height,
            );

            // ctx.drawImage(
            //     this.img,
            //     a*this.w-1, b*this.height,
            //     this.w, this.h,
            //     this.x+this.w*i*this.x, this.y+this.h*lin - 1,
            //     this.width, this.height,
            // );
        })
    }
  
}
