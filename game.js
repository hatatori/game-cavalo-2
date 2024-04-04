var c = document.getElementById("gameScreenCanvas");
var ctx = c.getContext("2d");


// c.style.width = '1920px'
// ctx.style.width = '100%'
// c.width = window.innerWidth;
// c.height = window.innerHeight;

// const Screen = {
//     width: 1080,
//     height: 1920,
// }

const Screen = {
    width: document.body.clientWidth,
    height: document.body.clientHeight
}
// console.log(Screen)

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
}

// const Imgs = {}

// Object.keys(Images).map(e=>{
//     const link = Images[e]
//     const img = new Image()
//     img.src = link
//     Imgs[e] = img
// })

class Horse{
    x = 0
    y = 0
    frame = 0
    velocity = 0
    width = 227
    height = 128
    constructor(img_url){
        // console.log(img_url)
        // this.img = Imgs.el_img
        this.img = new Image()
        this.img.src = img_url
        
        // this.img.onload = () => {
            // this.width = this.img.width
            // this.height = this.img.height
        // }
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
            this.width * linha, 1536/12*coluna, //bgx, bgy
            this.width, this.height, // size crop
            this.x, this.y, // x, y
            this.width, this.height,
        )
    }
    refresh(){
        // this.frame += 5
        this.frame += 5

        // if(this.x > 0)
        this.x += this.velocity/30

        

        if(this.velocity > 0) this.velocity = this.velocity - 0.5;
        if(this.velocity < 0) this.velocity = this.velocity + 0.5;
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
        this.image_name = img_name
        this.quant = quant
        
        // this.img_el = new Image()
        // this.img_el.src = Images[img_name]

        // this.img = new Image()
        // this.img.src = img_url
        // console.log(Images[img_name])

        // this.img_el.onload=()=>{
        //     this.width = this.img_el.width
        //     this.height = this.img_el.height
        // }

        this.img = new Image()
        this.img.src = Images[img_name]
        // this.img = Imgs[this.image_name].cloneNode(true)
        // this.img = Imgs[this.image_name].cloneNode(true)

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
        
        // this.img = this.img_el
        // this.img.onload=()=>{
        //     this.w = this.img.width
        //     this.h = this.img.height
        // }
        
        for(let i=0;i<this.quant;i++){
            ctx.drawImage(
                this.img, 
                0, 0,
                this.w, this.h,
                this.width*i+this.x, this.y,
                this.width, this.height
            )
        }
        // ctx.drawImage(
        //     this.img, 
        //     0, 0,
        //     this.w, this.h,
        //     this.x, this.y,
        //     this.width, this.height
        // )
        
    }

    refresh(){
        this.x -= this.speed
        if(-this.x > this.width*this.quant){
            if(this.repeat)
                this.x = Screen.width
        }
    }

    bottom(n){ this.y = Screen.height - this.height - n }
    bottomP(n){ this.y = Screen.height - this.height - Screen.height * (n/100) }

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
    new Horse(Images.horse_blue),
    new Horse(Images.horse_green)
]

horses.map((e,i)=>{
    e.bottomP(38 - i*5.5)
})


const background = new Cenario('background')
background.setWidth(Screen.width)

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

hills.map((e,i)=>{
    e.topP(31)
    e.setHeight(100)
    e.left(2*i*e.width)
    e.speed = 2
})


grandStands.map((e,i)=>{
    // e.bottomP(29)
    // e.y = (Screen.height - e.height) / 3
    // e.topP(15)
    e.y = Screen.height/2 - (e.height/1.7)
    
    e.setHeight(200)

    e.left(i * e.width * e.quant)
    e.speed = 3
})

fencesTop.map((e,i)=>{
    e.scale(.45)
    // e.top(e.width*i)
    e.left(e.quant*e.width*i)
    e.bottomP(47)
    e.speed = 5
})

fencesBottom.map((e,i)=>{
    e.scale(0.65)
    // e.top(e.width*i)
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
    // e.scale(0.6)
    e.scale(0.6)
    e.topP(49)
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
    // e.left(e.width*i*1.5)
    e.left(i*300)
    // e.left(e.width*i*1.5)
    // e.bottomP(58)
    e.speed = 2
    e.bottomP(62)
})

mountains.map((e,i)=>{
    e.setHeight(400)
    e.topP(3)
    e.left(e.width*i)
})

plantsTop.map((e,i)=>{
    e.scale(.45)
    e.bottomP(49)
    e.left(e.width*i)
    e.speed = 5
})


const velocidade = 1
// refresh_list.map(e=>e.speed = velocidade)

function loop(){
    
    ctx.beginPath();
    ctx.fillStyle = "white"; // Definir a cor de preenchimento como branco
    ctx.fillRect(0, 0, Screen.width, Screen.height);

    background.draw()

    // mountains[0].draw()
    // mountains[1].draw()

    mountains.map((e,i)=>{ e.draw() })
    
    hills.map(e=>{ e.draw(); e.refresh(); })
    trees.map(e=>{ e.draw(); e.refresh() })
    grandStands.map(e=>{ e.draw(); e.refresh() })
    grasses.map(e=>{ e.draw() ;e.refresh() ;})
    plantsTop.map(e=>{ e.draw(); e.refresh() })
    fencesTop.map(e=>{ e.draw(); e.refresh() })
    linesTop.map(e=>{ e.draw(); e.refresh() })
    linesBottom.map(e=>{ e.draw(); e.refresh() })
    
    horses.map(e=>{ e.draw(); e.refresh() })

    finishLine.draw()
    finishLine.refresh()

    fencesBottom.map(e=>{ e.draw(); e.refresh() })
    plantsBottom.map(e=>{ e.draw(); e.refresh() })
    
    window.requestAnimationFrame(loop)
}

window.addEventListener('DOMContentLoaded',e=>{
    // loop()
    window.requestAnimationFrame(loop)
})

