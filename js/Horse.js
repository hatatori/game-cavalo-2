class Horse{
    x = 0
    y = 0
    frame = 0
    velocity = 0
    width = 227
    height = 128
    num=0
    tx=0
    frameSpeed = 5
    alpha = 1
    placement = 0
    time = '0.000'
    seed = 2

    constructor(img_url, num){
        this.num = num
        this.img = new Image()
        this.img.src = img_url
    }
    

    draw(){
        this.frame = this.frame%120
        
        const linha = this.frame%10
        const coluna = this.frame/10|0

        const widthPicture = 2273
        const heightPicture = 1536
        
        this.width = widthPicture/10
        this.height = heightPicture/12
        
        ctx.globalAlpha = this.alpha;

        // ctx.fillStyle = "#00ff0055";
        // ctx.fillRect(this.x+this.tx, this.y, this.width, this.height);

        ctx.drawImage(this.img, 
            this.width * linha, this.height*coluna, 
            this.width, this.height, 
            this.tx+this.x, this.y, 
            this.width, this.height,
        )
        ctx.globalAlpha = 1;

    }

    refresh(){
        
        this.frame += this.frameSpeed

        // this.x = ran.value/10
        // const ranvalue = parseFloat(ran.value)
        // const ranvalueL = ran.value.at(-1)|0
        // const ranvaluep = ranvalue/100
        
        this.x += this.velocity/80

        if(this.velocity > 0) this.velocity = this.velocity - 0.5;
        if(this.velocity < 0) this.velocity = this.velocity + 0.5;

        // this.x = ran.value * Screen.width - this.width - this.tx + this.width - (this.width+50) * ranvaluep 
        // this.x = ran.value * Screen.width - this.width - this.tx + this.width - (this.width+50) * this.time
        // this.x = Screen.width - this.width - this.tx + this.width - (this.width+50) * this.time

        

        // box.dif = ran.value
        // box.dif = ran.value

        this.time = parseFloat(box.dif)
        const percent = this.time/30 * 100

        // box.dif = percent
        // this.time = percent
        // this.x = percent - this.tx + percent * 100
        
        // load in time
        this.x = (this.width-this.tx) - this.width + this.time/30 * Screen.width - (this.width * this.time/30)
        // this.x = this.x*this.num/6

        this.go1()
        this.go2()
        this.go3()

        // this.x = ran.value/1000 * Screen.width + this.width-this.tx - this.width
        // this.x = ran.value/100 * Screen.width - this.width/2 - this.tx

        // this.x += this.velocity/
        
        
        // if(this.velocity > 0) this.velocity = this.velocity - 0.5;
        // if(this.velocity < 0) this.velocity = this.velocity + 0.5;

        // if(this.velocity > 65*1){ this.frameSpeed = 5 }
        // if(this.velocity > 65*2){ this.frameSpeed = 6 }
        // if(this.velocity > 65*3){ this.frameSpeed = 7 }

        // box.currentTime.getTime().toString().at(-1)
        // const r = box.currentTime.getTime().toString().at(-1)

        // this.time
        // const m = 0
        // const s = 0
        // this.time -> 6.758
        
        const m = this.time.toString()
        const s = this.time|0
        // const ms = parseFloat(m).toFixed(3).split(".")[1]

        // this.x = this.time
        // console.log(this.time)
        
        // box.dif += 0.1
        // this.time += 0.1
        // const percent = this.time / 30


        
        

        // this.x = percent * Screen.width - this.tx - 50
     
        // console.log(ms[0])

        // if(this.num%2 == 0) this.velocity = 200


        // console.log(this.time.split(".")[1][0])

        // this.m2 = parseFloat(this.time).toFixed(3).split(".")[1][0]|0
        // if(this.m2%10 == 0){
            // const r = Math.sqrt(this.num + m + this.seed).toFixed(1).at(-1)|0
        //     this.velocity = r * 20
            // this.velocity = r * 20
            
        // }
        // console.log(this.time)


        // if(this.m2%3){
            // const r = Math.sqrt(this.num + m).toFixed(1).at(-1)|0
            // this.velocity = r * 20
            // this.velocity = r * 20
        // }


        // const r = Math.sqrt( this.num + s )
        
        // if(this.time % 3 == 0 && this.velocity == 0){
        //     // const r = Math.sqrt(this.num + box.currentTime.getSeconds()).toFixed(1).at(-1)|0
        //     const r = Math.sqrt(this.num + m).toFixed(1).at(-1)|0
        //     this.velocity = r * 20
        // }

        // if(this.m2 % 2 == 0 && this.velocity == 0){
            // const r = Math.sqrt(this.num + box.currentTime.getSeconds()).toFixed(1).at(-1)|0
            // this.r = Math.sqrt(this.num + this.seed + m2).toFixed(1).at(-1)|0
            // this.r = Math.sqrt(this.num + this.seed + m2).toFixed(1).at(-1)|0
            // this.r = Math.sin(this.num + this.seed + this.m2).toFixed(1).at(-1)|0
            // this.r2 = Math.cos(this.num + this.seed + this.m2).toFixed(1).at(-1)|0
            // this.r3 = Math.abs(Math.abs(this.r) - Math.abs(this.r2))
            // this.velocity = this.r * 20
        // }

        


        // if(box.currentTime.getSeconds() % 6 == 0){
        //     this.go()
        // }

        // if(this.velocity > 65*2){ this.frameSpeed = 5 }
        // if(this.velocity > 65*4){ this.frameSpeed = 8 }

        // if(this.velocity > 100){ this.frameSpeed = 10 }

        // limite
        // if(this.x >= Screen.width-this.width){
        //     this.x = Screen.width-this.width
        // }

        

        // this.velocity = this.velocity * 0.98

        
        // if(this.x >= Screen.width/4){
        //     this.velocity = this.velocity * 0.97
        // }
            
        // if(this.x < 0){
        //     this.go()
        // }

        // ao encostar no limite da direita
        // if(this.x >= Screen.width-this.width - this.tx + 50){
            // const r = Math.sqrt(this.num + m).toFixed(1).at(-1)|0
            // this.velocity = -r*1.5

            // const r = Math.sqrt(this.num + m + this.seed).toFixed(1).at(-1)|0
            // this.velocity = -500
            // this.y = 0

        //     // const rand = Math.random() * 200
        //     this.velocity = 0
        //     this.x = Screen.width-this.width
            // this.x = Screen.width-this.width - this.tx + 50
        // }

        // if(this.x == Screen.width-this.width - this.tx + 50){
            // const r = Math.sqrt(1 + this.num + box.currentTime.getSeconds()).toFixed(1).at(-1)|0
            // this.velocity = -this.velocity/10*r
        // }

        // if(box.currentTime.getSeconds() % 3 == 0 && this.velocity == 0){
        //     const r = Math.sqrt(1 + this.num + box.currentTime.getSeconds()).toFixed(1).at(-1)|0
        //     this.velocity = r * 20
        // }


        // parte 2
        
        // if(this.x >= Screen.width-this.width){
        //     this.velocity *= 0.9
        // }

        // if(this.velocity.toFixed(0) == 0){
        //     this.go()
        // }

        // this.sound(this.num)



        // if( this.x + this.tx - this.width > Screen.width - this.width*2){
        //     this.velocity *= 0.90
        // }

        // if(this.velocity.toFixed(1)<=0 && this.x+this.tx < Screen.width/20 - 120) {
        //     this.go()
        // }

        // quando encostar na lateral direita
        // if(this.x > Screen.width-this.width-this.tx+50){
            // this.go()
            // this.x = Screen.width-this.width-this.tx+50
            // const r = Math.random() * 10
            // this.velocity = r
            // this.y = 100
        // }

        // diminui a velocidade quando estiver no lap decidido
        // const midScreen = this.x-this.width/2 > Screen.width/2-this.width

        // if(this.x-this.width/2 > Screen.width/2-this.width && Controls.laps >= 1){
        // if(Controls.laps == 1){
        // if(this.x > Screen.width/2-this.width && Controls.laps == 1 ){
            // this.velocity = 0
        // }

        
        // if(midScreen && Controls.laps >= 1 && this.placement == 1){
            // this.velocity = 100
            // this.x += 1
        // }



        //     this.y = 100
        


        this.limitLeft()
        this.limitRight()
        this.limitLeft()
        this.limitRight()
        this.limitLeft()
        this.limitRight()
        
        // if(this.placement == 1){ 
            // }
            
            this.finish()
            
        this.x -= 20

        // if(this.placement == 1){ this.velocity += 3 }
        // if(this.placement == 2){ this.velocity += 2 }
        // if(this.placement == 3){ this.velocity += 1 }

        
    }

    limitRight(){
        // limite direita
        const LimitRight = Screen.width-this.width-this.tx + 50 + 20
        let ps2 = 0

        if(this.x >= LimitRight){
            ps2 = Math.abs(LimitRight - this.x)
            this.x -= ps2 * 1.2
        }
    }
    limitLeft(){
        // quando encostar na lateral esquerda
        let ps = 0
        if(this.x < -this.tx-this.width/2){
            ps = this.x + (this.width/2+this.tx)
            ps = Math.abs(ps)
            this.x += ps * 2
        }
    }

    go1(){
        const seg = 30
        const time1 = 2
        const t1 = time1
        const t2 = seg-time1

        if(this.time > time1){
            this.x = 
            this.x + (this.time-t1)/t2 * Math.sin(this.num + this.seed/10 + this.time/10) * 
            700 + (this.time-t1)/t2 * Math.sin(this.num + this.seed/10 + this.time/10) * 5

           
        }
    }
    
    go2(){
        const seg = 30
        const time1 = 10
        const t1 = time1
        const t2 = seg-time1
        // this.se

        if(this.time > time1){
            this.x = 
            this.x + (this.time-t1)/t2 * Math.cos(this.num + this.seed/10 + this.time/10) * 
            700 + (this.time-t1)/t2 * Math.cos(this.num + this.seed/10 + this.time/10) * 5
        }
    }
    
    go3(){
        const seg = 30
        const time1 = 15
        const t1 = time1
        const t2 = seg-time1
        // this.se

        if(this.time > time1){
            this.x = 
            this.x + (this.time-t1)/t2 * Math.sin(this.num + 
            this.seed /10+ this.time/10) *  700 + 
            (this.time-t1)/t2 * Math.sin(this.num + this.seed /10+ this.time/10) * 5
        }

        // if(this.x <= 0){
        //     this.x = 0
        // }
        

    }
    
    finish(){
        const seg = 30
        const time1 = 20
        const t1 = time1
        const t2 = seg-time1
        

        const LimitRight = Screen.width-this.width-this.tx + 50 + 20

        if(this.time > time1 && this.placement == 0){
            // this.x = this.x - 10 * (this.time-time1)/seg * LimitRight
            // this.x = this.x - Math.abs(2 * (this.time-time1)/seg * LimitRight) * -1
            this.x = this.x - 2 * (this.time-time1)/seg * LimitRight - (this.time-time1)/seg * this.width
        }
        

        
        if(
            this.time > time1 && this.placement == 1 ||
            this.time > time1 && this.placement == 2 ||
            this.time > time1 && this.placement == 3 
        ){

            // const midx = Screen.width/2 - this.width - this.tx - this.num + Screen.width/3
            // const midx = Screen.width/2 - this.width - this.tx - this.placement*5 + Screen.width/2
            const midx = Screen.width/2 - this.width - this.tx - (this.placement/3 * 50)*5 + Screen.width/2

            if(this.x < midx){
                this.x = this.x + 3.5 * (this.time-time1)/seg * LimitRight

                if(this.x > midx ){
                    this.x = midx
                }
            }
            if(this.x > midx){
                this.x = this.x - 3.5 * (this.time-time1)/seg * LimitRight

                if(this.x < midx ){
                    this.x = midx
                }
            }

            // if(this.x < 0-this.tx){
            //     this.x = 0+this.tx
            // }

        }
        
      



        // if(this.time > time1 && this.placement == 1){
        //     this.x = this.x + 10 * (this.time-time1)/seg * (LimitRight - 20)
        //     if(this.x > LimitRight - 20)
        //         this.x = LimitRight - 20
        // }

        // if(this.time > time1 && this.placement == 2){
        //     this.x = this.x + 10 * (this.time-time1)/seg * (LimitRight - 50)
        //     if(this.x > LimitRight - 50)
        //         this.x = LimitRight - 50
        // }

        // if(this.time > time1 && this.placement == 3){
        //     this.x = this.x + 10 * (this.time-time1)/seg * (LimitRight - 100)
        //     if(this.x > LimitRight - 100)
        //         this.x = LimitRight - 100
        // }

        // 40 
        if(
            this.time > seg && this.placement == 1 ||
            this.time > seg && this.placement == 2 ||
            this.time > seg && this.placement == 3
        ){
            this.x = 
            this.x - (this.time-seg)/seg * Screen.width/4 -
            (this.time-seg)/seg * (Screen.width/2 - this.width)
            this.x -= 5
        }

        // if(this.x < -this.tx-this.width/2){
            // this.x = -this.tx-this.width/2
        // }
        // this.limitLeft()
        // t:his.limitLeft()

        

    }
    
    go(){
        // let r1 = Math.random()*250|0
        // let r2 = Math.random()*350|0
        // this.velocity = r2-r1
        // this.velocity += r1

        this.r = Math.sin(this.num + this.seed + this.m2).toFixed(1).at(-1)|0
        this.velocity = this.r * 50
    }


    sound(n){
        // if(n == 117 ){ let r = (Math.random()*10)|0 ; audio_horse[r].play();}
        // if(n == 108 ){ let r = (Math.random()*10)|0 ; audio_horse[r].play();}
        // if(n == 36  ){ let r = (Math.random()*10)|0 ; audio_horse[r].play(); }
        // if(n == 58  ){ let r = (Math.random()*10)|0 ; audio_horse[r].play(); }

        // if(this.frame%5  == 0 ){ let r = (Math.random()*10)|0 ; audio_horse[r].play();}
        // if(this.frame%10 == 0 ){ let r = (Math.random()*10)|0 ; audio_horse[r].play();}
        // if(this.frame%15 == 0  ){ let r = (Math.random()*10)|0 ; audio_horse[r].play(); }
        // if(this.frame%20 == 0  ){ let r = (Math.random()*10)|0 ; audio_horse[r].play(); }
    }
    
    bottom(n){ this.y = Screen.height - this.height - n }
    
    bottomP(n){ this.y = Screen.height - this.height - Screen.height * (n/100) }
    top(n){ this.y = n }
    topP(n){ this.y = Screen.height * n/100 }
    right(n){ this.x = Screen.width - this.width - n }

    translateX(n){ this.tx = n }
    
    left(n){ this.x = n }
    leftP(n){ this.x = Screen.width - this.width - Screen.width * (n/100) }
}