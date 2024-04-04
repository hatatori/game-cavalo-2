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
    grandstand: './art/grandstand.png',
    finishLine: './art/finishLine.png',
    city: './art/city.png',
    cloud: './art/cloud.png',
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

        
        if(this.x >= Screen.width/4){
            // const rand2 = Math.random() * 100
            this.velocity = this.velocity * 0.97
            // this.velocity = this.velocity * rand2/100
        }

        // if(this.x >= Screen.width-this.width*1.5){
        //     this.velocity = this.velocity - 4
        // }

        if(this.x < 0){
            // const rand = Math.random() * 200
            // this.velocity = 0
            this.go()
        }

        if(this.x >= Screen.width-this.width){
            const rand = Math.random() * 200
            this.velocity = this.velocity - rand
        }

        this.sound(this.num)

        if(this.velocity.toFixed(1)==0) 
            this.go()




        // console.log(this.velocity.toFixed(1))
    }
    go(){
        let r1 = Math.random()*300|0
        let r2 = Math.random()*300|0
        this.velocity = r2-r1
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
})

const Mechanic = {
    horseWin(number_horse){
        horses.map(e=>{
            e.velocity = -100
        })
        horses[number_horse].velocity = 500
    }
}

//AVANÇAR CAVALOS
// horses.map((e,i)=>{
//     let r = Math.random()*100|0
//     e.velocity = r
// })


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
finishLine.x = Screen.width * 5 
finishLine.speed=10
finishLine.repeat = false

const grandStands = [
    new Cenario('grandstand', 2),
    new Cenario('grandstand', 2),
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
    new Cenario('line'),
    new Cenario('line'),
    new Cenario('line'),
]
const linesBottom = [
    new Cenario('line'),
    new Cenario('line'),
    new Cenario('line'),
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
// cloud.setHeight(100)
// cloud.left(2*i*e.width)
// cloud.speed = 1.5

hills.map((e,i)=>{
    // e.topP(30)
    e.topP(35)
    e.setHeight(100)
    e.left(2*i*e.width)
    e.speed = 1.5
})
grandStands.map((e,i)=>{
    e.y = Screen.height/2 - (e.height/1.6)
    e.setHeight(200)
    // e.left(i * e.width * 2)
    // e.left(i * e.width)
    e.left(i*Screen.width)
    e.speed = 3
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
    e.speed = 2.5
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

const velocidade = 1
function loop(){
    
    ctx.beginPath();
    ctx.fillStyle = "white"; 
    ctx.fillRect(0, 0, Screen.width, Screen.height);
    background.draw()
    
    
    mountains.map((e,i)=>{ e.draw() })

    // cloud.draw(); cloud.refresh()
    
    grasses.map(e=>{ e.draw() ;e.refresh() ;})
    cities.map(e=>{ e.draw(); e.refresh() })
    hills.map(e=>{ e.draw(); e.refresh(); })
    trees.map(e=>{ e.draw(); e.refresh() })
    grandStands.map(e=>{ e.draw(); e.refresh() })
    plantsTop.map(e=>{ e.draw(); e.refresh() })
    fencesTop.map(e=>{ e.draw(); e.refresh() })
    linesTop.map(e=>{ e.draw(); e.refresh() })
    linesBottom.map(e=>{ e.draw(); e.refresh() })
    
    horses.map(e=>{ e.draw(); e.refresh() })
    // horses.map(e=>{ e.draw();})
    finishLine.draw()
    finishLine.refresh()
    fencesBottom.map(e=>{ e.draw(); e.refresh() })
    plantsBottom.map(e=>{ e.draw(); e.refresh() })
    
    
    
    requestAnimationFrame(loop)
}

window.addEventListener('DOMContentLoaded',()=>{
    loop()
})

// setTimeout(()=>{
//     loop()
// }, 2000)
// loop()
    
