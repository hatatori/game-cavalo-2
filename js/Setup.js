var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var canvas = c

const Screen = {
    width: document.body.clientWidth,
    height: document.body.clientHeight
}

Screen.height = window.innerHeight

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
    money: './art/money.png',
}

const MessagesGame = {
    normal:{
        win: "VOCE VENCEU",
        value: "R$ 2000",
        placement1: '1',
        placement2: '2',
        placement3: '3',
        controlLaps: '0/0',
    },

    selectMoney: {
        msg_saldo: 'SALDO: R$ 1000',
        msg_valor: 'VALOR DA APOSTA',
        valor: 'R$ 0',
        bt1: '+  1',
        bt2: '+  5',
        bt3: '+ 10',
        bt4: '+ 50',
        bt5: '+100',
        bt6: '+500',
        btReset: 'Reset',
        btConfirm: 'Confirm',
    },

    selectHorse:{
        select: 'ESCOLHA O\nCAVALO',
        modality: 'Modalidade',
        horses1: '> 1 CAVALO',
        horses2: '2 CAVALOS',
        horses3: '3 CAVALOS',
        btConfirm: 'CONFIRMAR',
    }
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
        new Cenario('tree_3'),
        new Cenario('tree_4'),
        new Cenario('tree_3'),
        new Cenario('tree_2'),
        new Cenario('tree_1'),
        new Cenario('tree_2'),
        new Cenario('tree_3'),
        new Cenario('tree_4'),
        new Cenario('tree_3'),
        new Cenario('tree_2'),
        new Cenario('tree_1'),
        new Cenario('tree_2'),
        new Cenario('tree_3'),
        new Cenario('tree_4'),
        new Cenario('tree_3'),
        new Cenario('tree_2'),
        new Cenario('tree_1'),
        new Cenario('tree_2'),
        new Cenario('tree_3'),
        new Cenario('tree_4'),
        new Cenario('tree_3'),
        new Cenario('tree_2'),
    ]
    const plantsTop = [
        new Cenario('plant'),
        new Cenario('plant'),
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
        new Cenario('plant'),
        new Cenario('plant'),
    ]
    const fencesTop = [
        new Cenario('fence',10),
        new Cenario('fence',10),
        new Cenario('fence',10),
        new Cenario('fence',10),
        new Cenario('fence',10),
        new Cenario('fence',10),
        new Cenario('fence',10),
        new Cenario('fence',10),
        new Cenario('fence',10),
    ]
    const fencesBottom = [
        new Cenario('fence',10),
        new Cenario('fence',10),
        new Cenario('fence',10),
        new Cenario('fence',10),
        new Cenario('fence',10),
        new Cenario('fence',10),
        new Cenario('fence',10),
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
    // box.Msgs = Msgs
    
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
        // e.speed = 1.5
    })

    box.fencesTop.map((e,i)=>{
        e.scale(.45)
        
        e.left(e.quant*e.width*i)
        e.bottomP(47)
        // e.speed = 5
    })
    box.fencesBottom.map((e,i)=>{
        e.scale(0.65)
        
        e.left(e.quant*e.width*i)
        e.bottomP(1.1)
        // e.speed = 5
    })
    box.plantsBottom.map((e,i)=>{
        e.scale(.45)
        e.bottomP(-1)
        e.left(e.width*i)
        // e.speed = 5
    })
    box.grasses.map((e,i)=>{
        e.left(e.width*i)
        e.scale(0.6)
        e.topP(40)
        // e.speed = 5
    })
    box.linesTop.map((e,i)=>{
        e.scale(0.4)
        e.bottomP(44)
        e.left(e.width*i)
        // e.speed = 5
    })
    box.linesBottom.map((e,i)=>{
        e.scale(0.4)
        e.bottomP(11)
        e.left(e.width*i)
        // e.speed = 5
    })
    box.trees.map((e,i)=>{
        e.setHeight(200)
        e.left(i*300)
        // e.speed = 3.5
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
        // e.speed = 5
    })

    box.cities.map((e,i)=>{
        e.setHeight(150)
        e.left(i*Screen.width)
        // e.speed = 0.5
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

//draw
function square(x, y, w, h, color='black', borderColor='white'){
    ctx.beginPath();
    ctx.fillStyle = color; 
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = borderColor
    ctx.strokeRect(x, y, w, h);
}

function messageBox(txt, x, y){
    // box.Msgs.t[pos].txt = txt
    // box.Msgs.t[pos].x = x|0
    // box.Msgs.t[pos].y = y|0

    const t = { 
        font: new Font(),
        txt: txt, 
        x: x, 
        y: y,

        draw(){
            this.font.x = x|0
            this.font.y = y|0
            this.font.text(txt)
        }
    } 

    t.draw()

}

function messageBox2(txt, x, y, f){
    // box.Msgs.t[pos].txt = txt
    // box.Msgs.t[pos].x = x|0
    // box.Msgs.t[pos].y = y|0
    const t = { 
        font: new Font('./fonts/fonts/pixelart.png'),
        txt: txt, 
        x: x, 
        y: y,

        draw(){
            this.font.x = x|0
            this.font.y = y|0
            this.font.alphabet = ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ|¿]^_'abcdefghijklmnopqrstuvwxyz<|>~º☺`
            this.font.text(txt)
            
            
            
        }
    } 

    t.draw()

}

function button(txt, x, y, bgcolor='transparent'){
    // box.Msgs.t[pos].txt = txt
    // box.Msgs.t[pos].x = x|0
    // box.Msgs.t[pos].y = y|0

    const t = { 
        font: new Font('./fonts/fonts/pixelart.png'),
        txt: txt, 
        x: x, 
        y: y,
        // #004116
        draw(){
            // ctx.fillStyle = 'laranja'

            if(txt.length > 0){
                ctx.fillStyle = bgcolor
                ctx.lineWidth = 2; // Border widthF
                ctx.fillRect(this.x|0, this.y|0, this.txt.length * 20 + 20, 20 + 20);
                ctx.strokeStyle = 'white'; // Border color
                ctx.strokeRect(this.x|0, this.y|0, this.txt.length * 20 + 20, 20 + 20);
            }
            
            
            this.font.x = (x+10)|0
            this.font.y = (y+10)|0
            this.font.alphabet = ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ|¿]^_'abcdefghijklmnopqrstuvwxyz<|>~º☺`
            this.font.text(txt)
            
        }
    } 

    t.draw()

}

function messageBox3(txt, x, y){
    // box.Msgs.t[pos].txt = txt
    // box.Msgs.t[pos].x = x|0
    // box.Msgs.t[pos].y = y|0

    const t = { 
        font: new Font('./fonts/fonts/title-font-shmup.png', 10, 4),
        txt: txt, 
        x: x, 
        y: y,

        draw(){
            this.font.x = x
            this.font.y = y
            this.font.alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-+`
            this.font.text(txt)
        }
    } 

    t.draw()

}
function messageBox4(txt, x, y){
    // box.Msgs.t[pos].txt = txt
    // box.Msgs.t[pos].x = x|0
    // box.Msgs.t[pos].y = y|0

    const t = { 
        font: new Font('./fonts/fonts/font-1.png', 30, 4),
        txt: txt, 
        x: x, 
        y: y,

        draw(){
            this.font.alphabet = `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_'abcdefghijklmnopqrstuvwxyz(|)`
            this.font.x = x
            this.font.y = y
            this.font.text(txt)
        }
    } 

    t.draw()

}
