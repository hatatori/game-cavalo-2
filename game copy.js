var c = document.getElementById("canvas");
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
    grandstand: './art/grandstand_1.png',
    finishLine: './art/finishLine.png',
    city: './art/city.png',
    cloud: './art/cloud.png',
    arrow_down: './art/arrow_down.png',
    win: './art/win.png',
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
    tx=0
    frameSpeed = 5
    alpha = 1

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
        
        this.x += this.velocity/90
        
        if(this.velocity > 0) this.velocity = this.velocity - 0.5;
        if(this.velocity < 0) this.velocity = this.velocity + 0.5;

        if(this.velocity > 65*1){ this.frameSpeed = 5 }
        if(this.velocity > 65*2){ this.frameSpeed = 6 }
        if(this.velocity > 65*3){ this.frameSpeed = 7 }
        // if(this.velocity > 65*2){ this.frameSpeed = 5 }
        // if(this.velocity > 65*4){ this.frameSpeed = 8 }

        // if(this.velocity > 100){ this.frameSpeed = 10 }

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

        // parte 2
        if(this.x >= Screen.width-this.width){
            this.velocity *= 0.9
        }

        if(this.velocity.toFixed(0) == 0){
            this.go()
        }

        // this.sound(this.num)

        // if(this.velocity.toFixed(1)==0 && this.x < Screen.width/3) {
        //     this.go()
        // }


        if( this.x + this.tx - this.width > Screen.width - this.width*2){
            this.velocity *= 0.90
        }

        if(this.velocity.toFixed(1)<=0 && this.x+this.tx < Screen.width/20 - 120) {
            this.go()
        }

        this.velocity-=0.3
        // this.x -= 0.8
        this.x *= 0.992
        

        // horses.map(vel => vel.velocity -= 200)
        // horses[3].velocity = 200

    }
    go(){
        let r1 = Math.random()*350|0
        // let r2 = Math.random()*350|0
        // this.velocity = r2-r1
        this.velocity += r1
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


const horses = [
    new Horse(Images.horse_black, 0),
    new Horse(Images.horse_red, 1),
    new Horse(Images.horse_blue, 2),
    new Horse(Images.horse_yellow, 3),
    new Horse(Images.horse_pink, 4),
    new Horse(Images.horse_green, 5)
]

const arrow_down = new Cenario('arrow_down')
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

// end classes

const Mechanic = {

    ap: true,

    c1: [],

    m: [],

    horsesOrder: [],

    horseWin(number_horse){
        horses.map(e=>{
            // e.velocity = -200
        })
        horses[number_horse].velocity = 500
    },

    alpha(a, b, c){
        if(this.ap){
            // this.horsesOrder = horsesOrder()
            horses.map(horse=> horse.alpha = 0.0 )
            horses[a].alpha = 1
            horses[b].alpha = 0.2
            horses[c].alpha = 0.2
        }
        this.ap = false        
    },


}

// positions

horses.map((e,i)=>{
    let r = Math.random()*100|0
    e.velocity = r
    e.bottomP(38 - i*5.5)
    e.frame = i*23
    e.left(-120)
    e.translateX(40+i*34)
})

win.left(Screen.width/2 - win.width/2)
win.top(10)
win.speed = 0

background.setWidth(Screen.width)

cloud.topP(0)
cloud.setHeight(150)
cloud.bottomP(0)
cloud.right(0)
cloud.speed = 0.1

finishLine.setHeight(Screen.height/1.5)
finishLine.bottomP(12.2)
finishLine.right(20)
finishLine.x = 280+10*1200
finishLine.speed=5
finishLine.repeat = false

grandStands.map((e,i)=>{
    e.speed=4
    e.left(i*e.width*0.9)
    e.bottomP(55)
})

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
    e.bottomP(49)
    e.left(e.width*i)
    e.speed = 5
})

cities.map((e,i)=>{
    e.setHeight(150)
    e.left(i*Screen.width)
    e.speed = 0.5
    e.bottomP(60)
})



lines.map((e,i)=>{
    e.height = Screen.height/3
    e.width = Screen.height/3
    e.bottomP(12)
    // e.left(150+i*1500)
    e.left(1400+i*1200)
    e.speed = 5
    e.repeat = false
})


function horseWinner(){
    const s = []
    horses.map((e,i)=>{
        const ex = e.x
        const tx = e.tx
        return s.push(ex)
    })

    const zz = Math.max(...s)
    // console.log(zz)
    // horses.find((e,i)=>e.x==m).x = 0
    return horses.find((e,i)=>e.x==zz)
}

function horsesOrder(){
    let horsesOrder_arr = []
    // const horses2 = horses
    let arr_x = horses.map(e=>e.x)
    
    for(let i=0;i<6;i++){
        major_value = Math.max(...arr_x)
        arr_x = arr_x.filter(e=>e!=major_value)
        horsesOrder_arr.push(horses.find(e=>e.x == major_value))
    }
    return horsesOrder_arr
}

let laps = -1

const Msgs = {
    t: [
        { font: new Font(), txt: '', x:0, y:0 },
        { font: new Font(), txt: '', x:0, y:0 },
        { font: new Font(), txt: '', x:0, y:0 },
    ],
    draw(){
        this.t.forEach(el=>{
            el.font.text(el.txt)
            el.font.x = el.x
            el.font.y = el.y
        })
    }
}

const horsesOrderFinishLine = []

const DiagonalLine = {
    visible: true,
    x:0, 
    y:0,
    draw(){

        // const x1 = (horseW.x+horseW.width)-horseP-150+40
        // const y1 = Screen.height/2.75
        
        var length = 500;

        var angle = 45
        var x1 = this.x
        var y1 = this.y

        var x2 = x1 + length * Math.cos(angle * Math.PI / 180);
        var y2 = y1 + length * Math.sin(angle * Math.PI / 180);

        if(!this.visible){
            x1 = -5
            y1 = -5
            x2 = -5
            y2 = -5
        }


        ctx.beginPath();
        ctx.moveTo(x1, Screen.height/2.75);
        ctx.lineTo(x2, Screen.height);
        ctx.strokeStyle = 'yellow'; // Define a cor da linha para vermelho
        ctx.lineWidth = 3; // Define a espessura da linha para 3 pixels
        ctx.stroke();
    }
}

const Controls = {
    progressBarporcent: 0,
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
        
        background.draw()
    },

    normal(){

        ctx.beginPath();
        ctx.fillStyle = "black"; 
        ctx.fillRect(0, 0, Screen.width, Screen.height);
        
        background.draw()
        
        const horseW = horseWinner()
        const horseP = horses.indexOf(horseW)
    
        mountains.map((e,i)=>{ e.draw() })
        grasses.map(e=>{ e.draw() ;e.refresh() ;})
        
        const x1 = (horseW.x+horseW.width)-horseP-150+40
        const y1 = Screen.height/2.75
    
        // makeLine( x1, y1 )
        // DiagonalLine
        DiagonalLine.x = x1
        DiagonalLine.y = y1
        DiagonalLine.draw()
        
    
        cities.map(e=>{ e.draw(); e.refresh() })
        hills.map(e=>{ e.draw(); e.refresh(); })
        trees.map(e=>{ e.draw(); e.refresh() })
        grandStands.map(e=>{ e.draw(); e.refresh() })
        plantsTop.map(e=>{ e.draw(); e.refresh() })
        fencesTop.map(e=>{ e.draw(); e.refresh() })
        linesTop.map(e=>{ e.draw(); e.refresh() })
        linesBottom.map(e=>{ e.draw(); e.refresh() })
        lines.map(e=>{ e.draw(); e.refresh() })
        
        lines.map((e,i)=>{
            // if(i>0){
                messages[i].text(((i+1)*100).toString()+'m')
                messages[i].x = e.x-40
                messages[i].y = e.y-20
            // }
        })
    
        horses.map(e=>{ 
            e.draw(); 
            e.refresh();
        })
        
        finishLine.draw()
        finishLine.refresh()
        
        fencesBottom.map(e=>{ e.draw(); e.refresh() })
        plantsBottom.map(e=>{ e.draw(); e.refresh() })
    
        // arrow horse winner
        if(laps < 10){
            arrow_down.x = horseWinner().x+horseWinner().width/2+horseWinner().tx
            arrow_down.y = horseWinner().y
            arrow_down.draw()
            arrow_down.refresh()
        }
            
        // sum laps
        // if(laps < 10) 
        laps = lines.map(e=>e.x < horseWinner().x).filter(e=>e).length;
        
        messages[11].text(`${laps}/10`);

        // win message
        if(laps == 10){
            win.draw()
        }
        // win.refresh()
        
        // finish 10/10
        Msgs.draw()
    
        const c1 = horsesOrder()[0]
        const c2 = horsesOrder()[1]
        const c3 = horsesOrder()[2]
    
        if(horsesOrderFinishLine.length == 0 && c1.x >= finishLine.x - 300){
            horsesOrderFinishLine.push(c1)
            Msgs.t[0].txt = '1'
        }
        
        if(horsesOrderFinishLine.length == 1 && c2.x >= finishLine.x - 300){
            horsesOrderFinishLine.push(c2)
            Msgs.t[1].txt = '2'
        }
        
        if(horsesOrderFinishLine.length == 2 && c3.x >= finishLine.x - 300){
            horsesOrderFinishLine.push(c3)
            Msgs.t[2].txt = '3'
        }
        
        if(horsesOrderFinishLine.length >= 1){
            const a = horsesOrderFinishLine[0]
            Msgs.t[0].x = a.x + a.width/2 + a.tx - 10
            Msgs.t[0].y = a.y - 25
        }
    
        if(horsesOrderFinishLine.length >= 2){
            const b = horsesOrderFinishLine[1]
            Msgs.t[1].x = b.x + b.width/2 + b.tx - 10
            Msgs.t[1].y = b.y - 25
        }
    
        if(horsesOrderFinishLine.length >= 3){
            const c = horsesOrderFinishLine[2]
            Msgs.t[2].x = c.x + c.width/2 + c.tx - 10
            Msgs.t[2].y = c.y - 25
        }
    
    
    
        if(horsesOrderFinishLine.length > 2){
            const a = horsesOrderFinishLine[0]
            const b = horsesOrderFinishLine[1]
            const c = horsesOrderFinishLine[2]
    
            // Podium.t[0].x = a.x + a.width/2 + a.tx - 20
            // Podium.t[1].x = b.x + b.width/2 + b.tx - 20
            // Podium.t[2].x = c.x + c.width/2 + c.tx - 20
    
            // Podium.t[0].y = a.y - 30
            // Podium.t[1].y = b.y - 30
            // Podium.t[2].y = c.y - 30
    
            Mechanic.alpha(a.num, b.num, c.num)
            DiagonalLine.visible = false
        }
    }
}
// 



function loop(){
    ScreenActive[ScreenActive.screen]()
    // Controls.progress(Controls.progressBarporcent)
    requestAnimationFrame(loop)
    // console.log('ok')
}
loop()





// window.addEventListener('DOMContentLoaded',()=>{
    // setTimeout(()=>{
        // loop()
        
    // }, 2000)
    // loading()
// })

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

// finishLine.x = 1000

// window.onmousemove=function(e){
    // lines.map(e=>e.x = x)
    // const x = -e.movementX*10*2

    // finishLine.x += x

    // lines.map((e,i)=>{
        // e.height = Screen.height/3
        // e.width = Screen.height/3
        // e.bottomP(12)
        // e.left(150+i*1500)
        // e.left(x+300+i*1500)
        // e.speed = 5
        // e.repeat = false
        // e.x += x
    // })
// }

window.onkeyup=e=>{
    // if(e.key == "z"){ 
    //     Mechanic.horseWin(0) 
    //     finishLine.speed = 30
    //     lines.map(e=>e.speed = 30)
    // }

    if(e.key == "1"){ Mechanic.horseWin(0) }
    if(e.key == "2"){ Mechanic.horseWin(1) }
    if(e.key == "3"){ Mechanic.horseWin(2) }
    if(e.key == "4"){ Mechanic.horseWin(3) }
    if(e.key == "5"){ Mechanic.horseWin(4) }
    if(e.key == "6"){ Mechanic.horseWin(5) }
    if(e.key == "0"){ 
        horses.map(e=>e.velocity=500)
     }
}