var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

const Screen = {
    width: document.body.clientWidth,
    height: document.body.clientHeight
}

c.width = Screen.width
c.height = Screen.height

const finalLap = 10

const Images = {
    horse_black: './imgs/horse_black.png',
    horse_blue: './imgs/horse_blue.png',
    horse_blue_light: './imgs/horse_blue_light.png',
    horse_gray: './imgs/horse_gray.png',
    horse_green: './imgs/horse_green.png',
    horse_pink: './imgs/horse_pink.png',
    horse_purple: './imgs/horse_purple.png',
    horse_red: './imgs/horse_red.png',
    horse_yellow: './imgs/horse_yellow.png',
    background: './art/background.png',
    tree_1: './art/tree_1.png',
    tree_2: './art/tree_2.png',
    tree_3: './art/tree_3.png',
    tree_4: './art/tree_4.png',
    mountain: './art/mountain.png',
    hill: './art/hill.png',
    plant: './art/plant.png',
    grass: './art/grass.png',
    fence: './art/fence.png',
    line: './art/line.png',
    line_d: './art/line_d.png',
    grandstand: './art/grandstand_1.png',
    finishLine: './art/finishLine.png',
    city: './art/city.png',
    cloud: './art/cloud.png',
    arrow_down: './art/arrow_down.png',
    win: './art/win.png',
}



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
    seed = Math.random() * 10

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
        box.dif = ran.value
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
            700 + (this.time-t1)/t2 * Math.sin(this.num + this.seed/10 + this.time/10) * 500
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
            700 + (this.time-t1)/t2 * Math.cos(this.num + this.seed/10 + this.time/10) * 500
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
            this.x + (this.time-t1)/t2 * Math.sin(this.num + this.seed /10+ this.time/10) * 
            700 + (this.time-t1)/t2 * Math.sin(this.num + this.seed /10+ this.time/10) * 500
        }
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

// setInterval(e=>{
//     ran.value += 0.01
// }, 1000/60)



class Cenario{
    speed = 1 
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



const MessagesGame = {
    win: "VOCE VENCEU",
    value: "R$ 2000"
}

const messages = [
    new Font('./fonts/fonts/pixelart.png'),
    new Font('./fonts/fonts/pixelart.png'),
    new Font('./fonts/fonts/pixelart.png'),
    new Font('./fonts/fonts/pixelart.png'),
    new Font('./fonts/fonts/pixelart.png'),
    new Font('./fonts/fonts/pixelart.png'),
    new Font('./fonts/fonts/pixelart.png'),
    new Font('./fonts/fonts/pixelart.png'),
    new Font('./fonts/fonts/pixelart.png'),
    new Font('./fonts/fonts/pixelart.png'),
    new Font('./fonts/fonts/pixelart.png'),
    new Font(),
    new Font('./fonts/fonts/pixelart.png'),
    new Font('./fonts/fonts/pixelart.png'),
    new Font('./fonts/fonts/pixelart.png'),
]

const msg = {
    position1: new Font(),
    position2: new Font(),
    position3: new Font(),
}

const box = {
    horses: {},
    arrow_down: {},
    background: {},
    finishLine: {},
    cloud: {},
    win: {},
    grandStands: {},
    trees: {},
    plantsTop: {},
    plantsBottom: {},
    fencesTop: {},
    fencesBottom: {},
    grasses: {},
    hills: {},
    linesTop: {},
    linesBottom: {},
    mountains: {},
    cities: {},
    lines: {},
    DiagonalLine: {},
    horsesOrderFinishLine: {},
    Msgs: {},
    currentTime: new Date(),
    t1: new Date(),
    t2: new Date(),
    dif: 0.0
}

function preloadObjects(){

    const horses = [
        new Horse(Images.horse_black, 0),
        new Horse(Images.horse_red, 1),
        new Horse(Images.horse_blue, 2),
        new Horse(Images.horse_yellow, 3),
        new Horse(Images.horse_pink, 4),
        new Horse(Images.horse_green, 5)
    ]
    
    const arrow_down = {
        x: 0,
        y: 0,
        visible: true,
        arrow_down: new Cenario('arrow_down'),

        draw(){

            const horsePlacement1 = Controls.horsesOrder()[0]

            this.x = horsePlacement1.x+horsePlacement1.width/2+horsePlacement1.tx
            this.y = horsePlacement1.y

            this.arrow_down.x = this.x
            this.arrow_down.y = this.y
            if(this.visible){
                this.arrow_down.draw();
            }
        }

        // box.arrow_down.x = horsePlacement1.x+horsePlacement1.width/2+horsePlacement1.tx
        // box.arrow_down.y = horsePlacement1.y
        // box.arrow_down.draw()
    }
    
    const background = new Cenario('background')
    const finishLine = new Cenario('finishLine')
    const cloud = new Cenario('cloud')
    const win = new Cenario('win')
    
    const grandStands = [
        new Cenario('grandstand', 1),
    ]
    
    const trees = [
        new Cenario('tree_1'),
        new Cenario('tree_2'),
        new Cenario('tree_1'),
        new Cenario('tree_3'),
        new Cenario('tree_4'),
    ]
    const plantsTop = [
        new Cenario('plant'),
        new Cenario('plant'),
        new Cenario('plant'),
        new Cenario('plant'),
    ]
    const plantsBottom = [
        new Cenario('plant'),
        new Cenario('plant'),
        new Cenario('plant'),
        new Cenario('plant'),
    ]
    const fencesTop = [
        new Cenario('fence',10),
        new Cenario('fence',10),
    ]
    const fencesBottom = [
        new Cenario('fence',10),
        new Cenario('fence',10),
    ]
    const grasses = [
        new Cenario('grass', 2),
        new Cenario('grass', 2),
    ]
    const hills = [
        new Cenario('hill', 2),
        new Cenario('hill', 2),
    ]
    const linesTop = [
        new Cenario('line', 10),
        new Cenario('line', 10),
        new Cenario('line', 10),
    ]
    const linesBottom = [
        new Cenario('line', 10),
        new Cenario('line', 10),
        new Cenario('line', 10),
    ]
    const mountains = [
        new Cenario('mountain'),
        new Cenario('mountain'),
    ]
    const cities = [
        new Cenario('city', 10),
        new Cenario('city', 10),
    ]
    
    const lines = [
        new Cenario('line_d'),
        new Cenario('line_d'),
        new Cenario('line_d'),
        new Cenario('line_d'),
        new Cenario('line_d'),
        new Cenario('line_d'),
        new Cenario('line_d'),
        new Cenario('line_d'),
        new Cenario('line_d'),
        new Cenario('line_d'),
    ]

    const DiagonalLine = {
        visible: true,
        x:0, 
        y:0,

        draw(){

            const horsePlacement1 = Controls.horsesOrder()[0]
            const horseP = box.horses.indexOf(horsePlacement1)

            const x1 = (horsePlacement1.x+horsePlacement1.width)-horseP-150+40
            const y1 = Screen.height/2.75
            this.x = x1
            this.y = y1
            // box.DiagonalLine.draw()

    
            // const x1 = (horseW.x+horseW.width)-horseP-150+40
            // const y1 = Screen.height/2.75
            
            var length = 500;
    
            var angle = 45
            // var x1 = this.x
            // var y1 = this.y
    
            var x2 = x1 + length * Math.cos(angle * Math.PI / 180);
            var y2 = y1 + length * Math.sin(angle * Math.PI / 180);
    
            // if(!this.visible){
            //     x1 = -5
            //     y1 = -5
            //     x2 = -5
            //     y2 = -5
            // }
    
            if(this.visible){
                ctx.beginPath();
                ctx.moveTo(x1, Screen.height/2.75);
                ctx.lineTo(x2, Screen.height);
                ctx.strokeStyle = 'yellow'; // Define a cor da linha para vermelho
                ctx.lineWidth = 3; // Define a espessura da linha para 3 pixels
                ctx.stroke();
            }
        }
    }

    const horsesOrderFinishLine = []

    const Msgs = {
        t: [
            { font: new Font(), txt: '', x:0, y:0 },
            { font: new Font(), txt: '', x:0, y:0 },
            { font: new Font(), txt: '', x:0, y:0 },
            { font: new Font(), txt: '', x:0, y:0 },
            { font: new Font(), txt: '', x:0, y:0 },
            { font: new Font(), txt: '', x:0, y:0 },
            { font: new Font(), txt: '', x:0, y:0 },
        ],
        draw(){
            this.t.forEach(el=>{
                el.font.text(el.txt)
                el.font.x = el.x|0
                el.font.y = el.y|0
            })
        }
    }

    box.horses = horses
    box.arrow_down = arrow_down
    box.background = background
    box.finishLine = finishLine
    box.cloud = cloud
    box.win = win
    box.grandStands = grandStands
    box.trees = trees
    box.plantsTop = plantsTop
    box.plantsBottom = plantsBottom
    box.fencesTop = fencesTop
    box.fencesBottom = fencesBottom
    box.grasses = grasses
    box.hills = hills
    box.linesTop = linesTop
    box.linesBottom = linesBottom
    box.mountains = mountains
    box.cities = cities
    box.lines = lines
    box.DiagonalLine = DiagonalLine
    box.horsesOrderFinishLine = horsesOrderFinishLine
    box.Msgs = Msgs
    
}

function adjustPositions(){

    box.horses.map((e,i)=>{
        // let r = Math.random()*100|0
        e.velocity = 10
        e.bottomP(38 - i*5.5)
        e.frame = i*23
        e.left(-120)
        // e.translateX(40+i*34)
        e.translateX(40+i*34)
    })

    box.win.left(Screen.width/2 - box.win.width/2)
    // box.win.top(20)
    // box.win.top(30)
    box.win.y = 30
    box.win.speed = 0

    box.background.setWidth(Screen.width)

    box.cloud.topP(0)
    box.cloud.setHeight(150)
    box.cloud.bottomP(0)
    box.cloud.right(0)
    box.cloud.speed = 0.1

    box.finishLine.setHeight(Screen.height/1.5)
    box.finishLine.bottomP(12.2)
    box.finishLine.right(20)
    box.finishLine.x = 100+finalLap*500
    box.finishLine.x = 280+finalLap*1200
    
    box.finishLine.speed=3 // outro
    box.finishLine.repeat = false

    box.grandStands.map((e,i)=>{
        e.speed=4
        e.left(i*e.width*0.9)
        e.bottomP(55)
    })

    box.hills.map((e,i)=>{
        // e.topP(30)
        e.topP(35)
        e.setHeight(100)
        e.left(2*i*e.width)
        e.speed = 1.5
    })

    box.fencesTop.map((e,i)=>{
        e.scale(.45)
        
        e.left(e.quant*e.width*i)
        e.bottomP(47)
        e.speed = 5
    })
    box.fencesBottom.map((e,i)=>{
        e.scale(0.65)
        
        e.left(e.quant*e.width*i)
        e.bottomP(1.1)
        e.speed = 5
    })
    box.plantsBottom.map((e,i)=>{
        e.scale(.45)
        e.bottomP(-1)
        e.left(e.width*i)
        e.speed = 5
    })
    box.grasses.map((e,i)=>{
        e.left(e.width*i)
        e.scale(0.6)
        e.topP(40)
        e.speed = 5
    })
    box.linesTop.map((e,i)=>{
        e.scale(0.4)
        e.bottomP(44)
        e.left(e.width*i)
        e.speed = 5
    })
    box.linesBottom.map((e,i)=>{
        e.scale(0.4)
        e.bottomP(11)
        e.left(e.width*i)
        e.speed = 5
    })
    box.trees.map((e,i)=>{
        e.setHeight(200)
        e.left(i*300)
        e.speed = 3.5
        e.bottomP(55)
    })
    box.mountains.map((e,i)=>{
        e.setHeight(400)
        e.topP(0)
        e.left(e.width*i)
    })
    box.plantsTop.map((e,i)=>{
        e.scale(.45)
        e.bottomP(49)
        e.left(e.width*i)
        e.speed = 5
    })

    box.cities.map((e,i)=>{
        e.setHeight(150)
        e.left(i*Screen.width)
        e.speed = 0.5
        e.bottomP(60)
    })

    box.lines.map((e,i)=>{
        e.height = Screen.height/3
        e.width = Screen.height/3
        e.bottomP(12)
        // e.left(150+i*1500)
        e.left(500+i*500)
        e.speed = 0 //aqui lap
        e.repeat = false
    })

}

const Controls = {
    progressBarporcent: 0,
    laps: 0,
    

    load(){
        Object.keys(Images).map(e=>{
            const len = Object.keys(Object.keys(Images)).length
            const img = new Image()
            img.src = Images[e]
            
            img.onload=()=>{
                
                this.progressBarporcent++
                
                const x = this.progressBarporcent*100/len
                this.progress(x)
                
                if(this.progressBarporcent == len){
                    setTimeout(()=>{
                        preloadObjects()
                        adjustPositions()
                        ScreenActive.screen = ScreenActive.Screens.normal
                    }, 1000)
                }
            }
        })
    },
        
    progress(n){

        ctx.beginPath();
        ctx.fillStyle = "black"; 
        ctx.fillRect(0, 0, Screen.width, Screen.height);
        
        const square = {
            width: 300,
            height: 50, 
            x: 0, 
            y: 0,
            color: '#ffffff55',
            borderColor: "yellow",
            
            draw(){
                ctx.beginPath();
                ctx.fillStyle = this.color; 
                ctx.fillRect(this.x, this.y, this.width, this.height);
                
                ctx.strokeStyle = this.borderColor; // Border color
                ctx.lineWidth = 2; // Border width
                ctx.strokeRect(this.x, this.y, this.width, this.height);
            }
        }

        const s1 = square
        const s2 = square

        s1.color = 'black'
        s1.borderColor = 'white'
        s1.width = 300
        s1.height = 40
        s1.x = Screen.width/2 - square.width/2
        s1.y = Screen.height/2 - square.height/2
        s1.draw()
        
        s2.color = 'white'
        s2.borderColor = 'transparent'
        s2.height = 40
        s2.width = n/100 * 300
        s2.x = s1.x
        s2.y = Screen.height/2 - s2.height/2
        s2.draw()
    },
    
    horsesOrder(){
        let horsesOrder_arr = []
        // const horses2 = horses
        let arr_x = box.horses.map(e=>e.x)
        
        for(let i=0;i<6;i++){
            major_value = Math.max(...arr_x)
            arr_x = arr_x.filter(e=>e!=major_value)
            horsesOrder_arr.push(box.horses.find(e=>e.x == major_value))
        }
        return horsesOrder_arr
    },

    loadTime(seg){
        // seg = 5
        box.dif = 0
        for(i=0;i<=seg*10;i++){
            box.dif+=0.1
            box.horses.map(e=>{
                e.time = box.dif
                // e.velocity = 0
                e.refresh()
            })
        }
    }
}

Controls.load()


const ScreenActive = {

    Screens: {
        loading: "loading",
        coicehorse: "coicehorse",
        normal: "normal",
    },
    
    screen: "loading",

    loading(){

    },

    coicehorse(){
        ctx.beginPath();
        ctx.fillStyle = "black"; 
        ctx.fillRect(0, 0, Screen.width, Screen.height);
        // background.draw()
    },

    normal(){


        ctx.beginPath();
        ctx.fillStyle = "black"; 
        ctx.fillRect(0, 0, Screen.width, Screen.height);

        // refreshs
        box.grasses.map(e=>{ e.refresh();})
        box.cities.map(e=>{ e.refresh() })
        box.hills.map(e=>{ e.refresh(); })
        box.trees.map(e=>{ e.refresh() })
        // box.grandStands.map(e=>{ e.refresh() })
        box.plantsTop.map(e=>{ e.refresh() })
        box.fencesTop.map(e=>{ e.refresh() })
        box.linesTop.map(e=>{ e.refresh() })
        box.linesBottom.map(e=>{ e.refresh() })
        box.lines.map(e=>{ e.refresh() })
        box.horses.map(e=>{ e.refresh(); })
        box.fencesBottom.map(e=>{ e.refresh(); })
        box.plantsBottom.map(e=>{ e.refresh(); })
        box.finishLine.refresh()

        // draw
        box.background.draw()
        box.mountains.map((e,i)=>{ e.draw() ;})
        box.grasses.map(e=>{ e.draw(); })
        box.DiagonalLine.draw()
        box.cities.map(e=>{ e.draw(); })
        box.hills.map(e=>{ e.draw(); })
        box.trees.map(e=>{ e.draw(); })
        // box.grandStands.map(e=>{ e.draw(); })
        box.plantsTop.map(e=>{ e.draw(); })
        box.fencesTop.map(e=>{ e.draw(); })
        box.linesTop.map(e=>{ e.draw(); })
        box.linesBottom.map(e=>{ e.draw(); })
        box.lines.map(e=>{ e.draw(); })
        box.fencesBottom.map(e=>{ e.draw(); })
        box.plantsBottom.map(e=>{ e.draw(); })
        
        
        // box.t2 = new Date()
        // box.t2 = new Date(Date.now() + 20 * 1000)
        // box.t2 = new Date(Date.now())
        // box.dif = ((box.t2-box.t1)/1000)
        
        // box.dif = ran.value
        box.horses.map(e=>e.time = box.dif)
        
        // box.finishLine.x = Screen.width/2
        // box.lines.map(e=>e.x = (box.dif-30)/10 * -Screen.width)
        
        box.Msgs.t[5].txt = box.dif.toString()
        box.Msgs.t[5].x = 100
        box.Msgs.t[5].y = 100
        
        // box.finishLine.x = (box.dif-30)/10 * -Screen.width + Screen.width-1000
        box.finishLine.x = 10*958 + 300*box.dif*-1
        // linhas brancas do chão

        box.lines.map((e,i)=>{
            messages[i].text(((i+1)*100).toString()+'m')
            messages[i].x = e.x-40
            messages[i].y = e.y-20

            e.x =  500 + i * 1000 + 300*box.dif*-1
            // e.x = (box.dif-30)/10
        })



        // horses placements
        const horsePlacement = Controls.horsesOrder()
        const horsePlacement1 = horsePlacement[0] // 1º
        const horsePlacement2 = horsePlacement[1] // 2º
        const horsePlacement3 = horsePlacement[2] // 3º
        const horsePlacement4 = horsePlacement[3] // 4º
        const horsePlacement5 = horsePlacement[4] // 5º
        const horsePlacement6 = horsePlacement[5] // 6º

        const horseP = box.horses.indexOf(horsePlacement1)

        box.horses[3].placement = 2
        box.horses[4].placement = 3
        box.horses[5].placement = 1
        
        box.horses.map(e=>{ e.draw(); })
        box.finishLine.draw()
        box.arrow_down.draw()
        
        // laps
        Controls.laps = box.lines.map(e=>e.x < horsePlacement1.x+horsePlacement1.tx).filter(e=>e).length;

        messages[11].text(`${Controls.laps}/${finalLap}`);

        // win message
        if(Controls.laps >= finalLap){ box.win.draw() }

        // fim
        const horsesLen = box.horsesOrderFinishLine.length

        if(horsesLen == 0 && horsePlacement1.x >= box.finishLine.x - 300){
            box.horsesOrderFinishLine.push(horsePlacement1)
        }

        if(horsesLen == 1 && horsePlacement2.x >= box.finishLine.x - 300){
            box.horsesOrderFinishLine.push(horsePlacement2)
        }

        if(horsesLen == 2 && horsePlacement3.x >= box.finishLine.x - 300){
            box.horsesOrderFinishLine.push(horsePlacement3)
        }


        if( box.horsesOrderFinishLine[0] ){
            const a = box.horsesOrderFinishLine[0]
            box.Msgs.t[0].txt = '1'
            box.Msgs.t[0].x = a.x + a.width/2 + a.tx - 10
            box.Msgs.t[0].y = a.y - 50

        }

        if( box.horsesOrderFinishLine[1] ){
            const a = box.horsesOrderFinishLine[1]
            box.Msgs.t[1].txt = '2'
            box.Msgs.t[1].x = a.x + a.width/2 + a.tx - 10
            box.Msgs.t[1].y = a.y - 50
        }

        // ao cruzar a linha de chegada.
        if( box.horsesOrderFinishLine[2] ){
            const a = box.horsesOrderFinishLine[2]
            box.Msgs.t[2].txt = '3'
            box.Msgs.t[2].x = a.x + a.width/2 + a.tx - 10
            box.Msgs.t[2].y = a.y - 50
            
            box.horses.map(e=>e.alpha = 0)

            box.horsesOrderFinishLine[0].alpha = 1
            box.horsesOrderFinishLine[1].alpha = 0.5
            box.horsesOrderFinishLine[2].alpha = 0.5

            box.arrow_down.visible = false

            box.Msgs.t[3].txt = MessagesGame.win
            box.Msgs.t[3].x = Screen.width/2 - MessagesGame.win.length * 40 / 2
            box.Msgs.t[3].y = Screen.height/4

            box.Msgs.t[4].txt = MessagesGame.value
            box.Msgs.t[4].x = Screen.width/2 - MessagesGame.value.length * 40 / 2
            box.Msgs.t[4].y = Screen.height/4 + 50
            
            box.DiagonalLine.visible = false

            MessagesGame.win = 'YOU WIN'
            MessagesGame.value = 'R$ 2000'
        }

        if(Controls.laps < finalLap){

            box.horses.map(e=>e.alpha = 1)
            
            box.Msgs.t[0].txt = ''
            box.Msgs.t[1].txt = ''
            box.Msgs.t[2].txt = ''
            box.Msgs.t[3].txt = ''
            box.Msgs.t[4].txt = ''

            if(box.horsesOrderFinishLine[2]){
                box.horsesOrderFinishLine.pop()
                box.horsesOrderFinishLine.pop()
                box.horsesOrderFinishLine.pop()
            }

            box.DiagonalLine.visible = true
        }


        box.Msgs.draw()
  
    }
}

function loop(){
    ScreenActive[ScreenActive.screen]()
    requestAnimationFrame(loop)
}
loop()

window.onmousemove=function(e){
    // const x = -e.movementX*10*2
    // box.finishLine.x += x
    // box.lines.map((e,i)=>{ e.x += x })
}



window.onkeyup=e=>{
    if(e.key == "1"){ 
        // box.horses.map(e=> e.velocity = 500)
        // Mechanic.horseWin(0) 
    }
    let r = Math.random()*100
    box.horses.map(e=>e.seed = r)
    // if(e.key == "2"){ Mechanic.horseWin(1) }
    // if(e.key == "3"){ Mechanic.horseWin(2) }
    // if(e.key == "4"){ Mechanic.horseWin(3) }
    // if(e.key == "5"){ Mechanic.horseWin(4) }
    // if(e.key == "6"){ Mechanic.horseWin(5) }
    // if(e.key == "0"){ 
    //     horses.map(e=>e.velocity=500)
    // }
}