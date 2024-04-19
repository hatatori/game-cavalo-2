class Cenario{
    speed = 0 
    width = 300
    height = 300
    x = 0
    y = 0
    w = 0
    h = 0
    repeat = true
    
    constructor(img_name, quant=1, x=0, y=0, repeat){
        // this.image_name = img_name
        
        this.quant = quant
        this.img = new Image()
        this.img.src = Images[img_name]
        
        this.img.onload=()=>{
            this.w = this.img.width
            this.h = this.img.height
        }
        this.ww = this.img.width
        this.hh = this.img.height
        this.x = x
        this.y = y
        this.width = this.img.width
        this.height = this.img.height
    }
    draw(){
        for(let i=0;i<this.quant;i++){
            ctx.drawImage(
                this.img, 
                0, 0,
                this.w, this.h,
                this.width*i+this.x, this.y,
                this.width, this.height
            )
        }
  
    }
    refresh(){
        this.x -= this.speed
        if(-this.x > this.width*this.quant){
            if(this.repeat)
                this.x = Screen.width
        }
    }
    bottom(n){ this.y = Screen.height - this.height - n }
    bottomP(n){ this.y = Screen.height - this.height - Screen.height * (n/100); }
    top(n){ this.y = n }
    topP(n){ this.y = Screen.height * n/100 }
    right(n){ this.x = Screen.width - this.width - n }
    
    left(n){ this.x = n }
    leftP(n){ this.x = Screen.width - this.width - Screen.width * (n/100) }
    setHeight(n){
        const k = n/this.hh
        this.height = n
        this.width = this.ww*k
    }
 
    setWidth(n){
        const k = n/this.ww
        this.width = n
        this.height = this.hh*k
    }
    scale(n){
        this.width *= n
        this.height *= n
    }
}