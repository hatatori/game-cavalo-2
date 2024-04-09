var c = document.getElementById("gameScreenCanvas");
var ctx = c.getContext("2d");

const Screen = {
    width: document.body.clientWidth,
    height: document.body.clientHeight
}
c.width = Screen.width
c.height = Screen.height

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
    grandstand: './art/grandstand.png',
    finishLine: './art/finishLine.png',
    city: './art/city.png',
    cloud: './art/cloud.png',
    arrow_down: './art/arrow_down.png',
}

const audio_horse = [
    new Audio('./som/c1.mp3'),
    new Audio('./som/c2.mp3'),
    new Audio('./som/c3.mp3'),
    new Audio('./som/c4.mp3'),
    new Audio('./som/c5.mp3'),
    new Audio('./som/c6.mp3'),
    new Audio('./som/c7.mp3'),
    new Audio('./som/c8.mp3'),
    new Audio('./som/c9.mp3'),
    new Audio('./som/c10.mp3')
]

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
    speed=1
     
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

    walk(){
        this.pic.frame+=this.pic.framespeed
        this.x-=this.speed
        
        // if(this.x > -this.width){
        //     this.x = Screen.width
        // }
        if(-this.x > this.width) this.x = Screen.width;
    }

    
    bottom(n){ this.y = Screen.height - this.height - n }
    bottomP(n){ this.y = Screen.height - this.height - Screen.height * (n/100) }
    top(n){ this.y = n }
    topP(n){ this.y = Screen.height * n/100 }
    right(n){ this.x = Screen.width - this.width - n }
    left(n){ this.x = n }
    leftP(n){ this.x = Screen.width - this.width - Screen.width * (n/100) }

    setWidth(n){
        const k = n/this.h
        this.height = n
        this.width = this.w*k
    }
    setHeight(n){
        const k = n/this.w
        this.width = n
        this.height = this.h*k
    }
    

}


class Horse{
    x = 0
    y = 0
    frame = 0
    velocity = 0
    width = 227
    height = 128
    num=0
    constructor(img_url){
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
        
        ctx.drawImage(this.img, 
            this.width * linha, this.height*coluna, 
            this.width, this.height, 
            this.x, this.y, 
            this.width, this.height,
        )
    }

    refresh(){
        
        this.frame += 5
        
        this.x += this.velocity/100
        
        if(this.velocity > 0) this.velocity = this.velocity - 0.5;
        if(this.velocity < 0) this.velocity = this.velocity + 0.5;

        // limite
        // if(this.x >= Screen.width-this.width){
        //     this.x = Screen.width-this.width
        // }

        // if(this.x >= Screen.width-this.width){
            // this.x = Screen.width-this.width
            // this.velocity = this.velocity * 0.98
        // }

        
        // if(this.x >= Screen.width/4){
        //     this.velocity = this.velocity * 0.97
        // }
            
        // if(this.x < 0){
        //     this.go()
        // }

        // limite direita
        // if(this.x >= Screen.width-this.width){
        //     // const rand = Math.random() * 200
        //     this.velocity = 0
        //     this.x = Screen.width-this.width
        // }

        if(this.x >= Screen.width-this.width){
            // const rand = Math.random() * 200
            this.velocity *= 0.9
            // this.x = Screen.width-this.width
        }

        this.sound(this.num)

        // if(this.velocity.toFixed(1)==0 && this.x < Screen.width/3) {
        //     this.go()
        // }


        if(this.velocity.toFixed(1)<=0 && this.x < Screen.width/5) {
            this.go()
        }


        // this.velocity--
        this.velocity--

        // horses.map(vel => vel.velocity -= 200)
        // horses[3].velocity = 200

    }
    go(){
        let r1 = Math.random()*300|0
        let r2 = Math.random()*300|0
        // this.velocity = r2-r1
        this.velocity += r1
    }


    sound(n){
        // if(n == 117 ){ let r = (Math.random()*10)|0 ; audio_horse[r].play();}
        // if(n == 108 ){ let r = (Math.random()*10)|0 ; audio_horse[r].play();}
        // if(n == 36  ){ let r = (Math.random()*10)|0 ; audio_horse[r].play(); }
        // if(n == 58  ){ let r = (Math.random()*10)|0 ; audio_horse[r].play(); }

        if(this.frame%5  == 0 ){ let r = (Math.random()*10)|0 ; audio_horse[r].play();}
        if(this.frame%10 == 0 ){ let r = (Math.random()*10)|0 ; audio_horse[r].play();}
        if(this.frame%15 == 0  ){ let r = (Math.random()*10)|0 ; audio_horse[r].play(); }
        if(this.frame%20 == 0  ){ let r = (Math.random()*10)|0 ; audio_horse[r].play(); }
    }
    
    bottom(n){ this.y = Screen.height - this.height - n }
    
    bottomP(n){ this.y = Screen.height - this.height - Screen.height * (n/100) }
    top(n){ this.y = n }
    topP(n){ this.y = Screen.height * n/100 }
    right(n){ this.x = Screen.width - this.width - n }
    
    left(n){ this.x = n }
    leftP(n){ this.x = Screen.width - this.width - Screen.width * (n/100) }
}

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

// const font = new Font()
const font = new Font()
// font.img_url = "./fonts/fonts/title-font-shmup.png"
// font.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
// font.cols = 10
// font.lins = 4
font.text('BRASIL')

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
    new Font(),
    new Font('./fonts/fonts/pixelart.png'),
    new Font('./fonts/fonts/pixelart.png'),
    new Font('./fonts/fonts/pixelart.png'),
    new Font('./fonts/fonts/pixelart.png'),
]



// const font2 = new Font({
//     img_url:'./fonts/fonts/title-font-shmup.png',
//     cols:10,
//     lins:4,
// })

// const font2 = new Font({img_url:"./fonts/fonts/title-font-shmup.png", cols:10, lins:4})
// font2.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
// font2.y = 100
// font2.x = 0
// font2.textLine('BRASIL')



// const font2 = new Font('./fonts/fonts/font-40x40-fps.png', 15)

// const font3 = new Font('./fonts/fonts/title-font-shmup.png', 10)
// font3.alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"



const horses = [
    new Horse(Images.horse_black),
    new Horse(Images.horse_red),
    new Horse(Images.horse_blue),
    new Horse(Images.horse_yellow),
    new Horse(Images.horse_pink),
    new Horse(Images.horse_green)
]

horses.map((e,i)=>{
    let r = Math.random()*100|0
    // let r = 200
    e.velocity = r
    e.bottomP(38 - i*5.5)
    e.frame = i*23
    // e.style.translate = '500px'
    // console.log(e.img.style.translate =(i*500)+"px")
    e.left(100+i*34)
})

const Mechanic = {
    horseWin(number_horse){
        horses.map(e=>{
            e.velocity = -100
        })
        horses[number_horse].velocity = 500
    }
}


const arrow_down = new Cenario('arrow_down')

const background = new Cenario('background')
background.setWidth(Screen.width)

const cloud = new Cenario('cloud')
cloud.setHeight(150)
cloud.bottomP(0)
cloud.right(0)
cloud.speed = 0.1


const finishLine = new Cenario('finishLine')
finishLine.setHeight(Screen.height/1.5)
finishLine.bottomP(12.2)
finishLine.right(20)
finishLine.x = 2*1500+235
finishLine.speed=5
finishLine.repeat = false


const grandStands = [
    new Sprites(Images.grandstand, 10, 30),
    new Sprites(Images.grandstand, 10, 30),
]
grandStands.map((e,i)=>{
    e.speed=4
    e.left(i*e.width*0.9)
    e.bottomP(55)
    // e.setWidth(e.height/2)
})


// const grandStand = new Cenario('grandstand',2)
// grandStands.speed = 5
// grandStands.bottomP(50)
// grandStands.map((e,i)=>{
//     e.speed=4
//     e.left(i*e.width*2)
//     e.bottomP(60)
//     // e.setWidth(e.height/2)
// })

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


cloud.topP(0)


hills.map((e,i)=>{
    // e.topP(30)
    e.topP(35)
    e.setHeight(100)
    e.left(2*i*e.width)
    e.speed = 1.5
})

fencesTop.map((e,i)=>{
    e.scale(.45)
    
    e.left(e.quant*e.width*i)
    e.bottomP(47)
    e.speed = 5
})
fencesBottom.map((e,i)=>{
    e.scale(0.65)
    
    e.left(e.quant*e.width*i)
    e.bottomP(1.1)
    e.speed = 5
})
plantsBottom.map((e,i)=>{
    e.scale(.45)
    e.bottomP(-1)
    e.left(e.width*i)
    e.speed = 5
})
grasses.map((e,i)=>{
    e.left(e.width*i)
    e.scale(0.6)
    e.topP(40)
    e.speed = 5
})
linesTop.map((e,i)=>{
    e.scale(0.4)
    e.bottomP(44)
    e.left(e.width*i)
    e.speed = 5
})
linesBottom.map((e,i)=>{
    e.scale(0.4)
    e.bottomP(11)
    e.left(e.width*i)
    e.speed = 5
})
trees.map((e,i)=>{
    e.setHeight(200)
    e.left(i*300)
    e.speed = 3.5
    e.bottomP(55)
})
mountains.map((e,i)=>{
    e.setHeight(400)
    e.topP(0)
    e.left(e.width*i)
})
plantsTop.map((e,i)=>{
    e.scale(.45)
    e.bottomP(50)
    e.left(e.width*i)
    e.speed = 5
})

cities.map((e,i)=>{
    e.setHeight(150)
    e.left(i*Screen.width)
    e.speed = 0.5
    e.bottomP(60)
})

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

lines.map((e,i)=>{
    e.height = Screen.height/3
    e.width = Screen.height/3
    e.bottomP(12)
    e.left(150+i*1500)
    e.speed = 5
    e.repeat = false
})


function horseWinner(){
    const s = []
    horses.map((e,i)=>s.push(e.x))
    const zz = Math.max(...s)
    // horses.find((e,i)=>e.x==m).x = 0
    return horses.find((e,i)=>e.x==zz)
}

const velocidade = 1
let m = 0

function loop(){
    
    ctx.beginPath();
    ctx.fillStyle = "white"; 
    ctx.fillRect(0, 0, Screen.width, Screen.height);
    
    

    

    background.draw()
    mountains.map((e,i)=>{ e.draw() })
    grasses.map(e=>{ e.draw() ;e.refresh() ;})
    cities.map(e=>{ e.draw(); e.refresh() })
    hills.map(e=>{ e.draw(); e.refresh(); })
    trees.map(e=>{ e.draw(); e.refresh() })
    grandStands.map(e=>{ e.draw(); e.walk() })
    plantsTop.map(e=>{ e.draw(); e.refresh() })
    fencesTop.map(e=>{ e.draw(); e.refresh() })
    linesTop.map(e=>{ e.draw(); e.refresh() })
    linesBottom.map(e=>{ e.draw(); e.refresh() })
    lines.map(e=>{ e.draw(); e.refresh() })
    
    
    lines.map((e,i)=>{
        messages[i].text((i*100).toString()+'m')
        messages[i].x = e.x-40
        messages[i].y = e.y-20
    })

    ctx.beginPath();
    ctx.moveTo(horseWinner().x+185, horses[0].y+80);
    ctx.lineTo(horseWinner().x+185, horses[5].y+120);
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 3
    ctx.stroke(); 

    horses.map(e=>{ 
        e.draw(); 
        e.refresh();
    })

    
    
    
    finishLine.draw()
    finishLine.refresh()
    
    fencesBottom.map(e=>{ e.draw(); e.refresh() })
    plantsBottom.map(e=>{ e.draw(); e.refresh() })
    
    arrow_down.x = horseWinner().x+horseWinner().width/2
    arrow_down.y = horseWinner().y

    arrow_down.draw()
    arrow_down.refresh()
    

    messages[10].text(`LAP: ${m}/10`)
    
    m = lines.map(e=>e.x < horseWinner().x).filter(e=>e).length

    requestAnimationFrame(loop)
}

window.addEventListener('DOMContentLoaded',()=>{
    // setTimeout(()=>{
        // loop()
        
    // }, 2000)
    loading()
})

// setTimeout(()=>{
//     loop()
// }, 2000)
// loop()
    
function loading(){
    qt = Object.keys(Images).length
    qt2 = 0

    Object.keys(Images).map(e=>{
        img = new Image()
        img.src = Images[e]
        img.onload=()=>{ 
            qt2++ 
            if(qt2/qt == 1){
                loop()
            }
        }
    })
}