// clicks
function boxClick(x0=10, y0=10, w=100, h=100, func){
    square(x0, y0, w, h, "transparent")

    canvas.addEventListener('click', e=>{
        const x = e.pageX
        const y = e.pageY
        if(x > x0 && x < x0+w && y > y0 && y < y0+h){
            func()
        }
    })

    canvas.addEventListener('mousemove', e=>{
        const x = e.pageX
        const y = e.pageY
        if(x > x0 && x < x0+w && y > y0 && y < y0+h){
            // console.log(y0)
        }
    })
}

const boxClicks = {

    // boxes: [
    //     { x: Screen.width/2 - 250/2 - 30, y: Screen.height - 208, w: 250, h: 35, f: () => Controls.Config.setModality(1) },
    //     { x: Screen.width/2 - 250/2 - 30, y: Screen.height - 168, w: 250, h: 35, f: () => Controls.Config.setModality(2) },
    //     { x: Screen.width/2 - 250/2 - 30, y: Screen.height - 128, w: 250, h: 35, f: () => Controls.Config.setModality(3) },
    //     { x: Screen.width / 2 - 100 + 110, y: 119, w: 190, h: 102, f: () =>  Controls.Config.horseChoice(1) },
    //     { x: Screen.width / 2 - 300 + 110, y: 119, w: 190, h: 102, f: () =>  Controls.Config.horseChoice(0) },
    //     { x: Screen.width / 2 - 300 + 110, y: 221, w: 190, h: 102, f: () =>  Controls.Config.horseChoice(2) },
    //     { x: Screen.width / 2 - 100 + 110, y: 221, w: 190, h: 102, f: () =>  Controls.Config.horseChoice(3) },
    //     { x: Screen.width / 2 - 300 + 110, y: 323, w: 190, h: 102, f: () =>  Controls.Config.horseChoice(4) },
    //     { x: Screen.width / 2 - 100 + 110, y: 323, w: 190, h: 102, f: () =>  Controls.Config.horseChoice(5) },
    //     { x: Screen.width / 2 - 100, y: Screen.height-60, w: 200, h: 40, f: () =>  Controls.changeScreen('selectMoney') },
    // ],
    
    refresh(){
        this.boxes.map(e=>{
            boxClick( e.x, e.y, e.w, e.h, e.f )
        })
    },

    draw(){
        this.boxes.map(e=>{
            square(e.x, e.y, e.w, e.h, 'transparent', 'transparent')
        })
    }
}

const boxes = {
    selectHorse: [
        { x: Screen.width/2 - 250/2 - 30, y: Screen.height - 208, w: 250, h: 35, f: () => Controls.Config.setModality(1) },
        { x: Screen.width/2 - 250/2 - 30, y: Screen.height - 168, w: 250, h: 35, f: () => Controls.Config.setModality(2) },
        { x: Screen.width/2 - 250/2 - 30, y: Screen.height - 128, w: 250, h: 35, f: () => Controls.Config.setModality(3) },
        { x: Screen.width / 2 - 100 + 110, y: 119, w: 190, h: 102, f: () =>  Controls.Config.horseChoice(1) },
        { x: Screen.width / 2 - 300 + 110, y: 119, w: 190, h: 102, f: () =>  Controls.Config.horseChoice(0) },
        { x: Screen.width / 2 - 300 + 110, y: 221, w: 190, h: 102, f: () =>  Controls.Config.horseChoice(2) },
        { x: Screen.width / 2 - 100 + 110, y: 221, w: 190, h: 102, f: () =>  Controls.Config.horseChoice(3) },
        { x: Screen.width / 2 - 300 + 110, y: 323, w: 190, h: 102, f: () =>  Controls.Config.horseChoice(4) },
        { x: Screen.width / 2 - 100 + 110, y: 323, w: 190, h: 102, f: () =>  Controls.Config.horseChoice(5) },
        { x: Screen.width / 2 - 100, y: Screen.height-60, w: 200, h: 40, f: () => { Controls.changeScreen('selectMoney'); boxClicks.boxes = boxes.selectMoney; boxClicks.refresh() } },
    ],
    selectMoney: [
        { x: 5, y: 5, w: 40, h: 40, f: () =>  { Controls.changeScreen('selectHorse'); boxClicks.boxes = boxes.selectHorse; boxClicks.refresh();  } },
        { x: Screen.width/2 - 95, y: Screen.height - 290, w: 100, h: 40, f: () =>  Controls.Config.addBetValue(1) } , //1
        { x: Screen.width/2 + 15, y: Screen.height - 290, w: 100, h: 40, f: () =>  Controls.Config.addBetValue(5) }, //5
        { x: Screen.width/2 - 95, y: Screen.height - 240, w: 100, h: 40, f: () =>  Controls.Config.addBetValue(10) }, //10
        { x: Screen.width/2 + 15, y: Screen.height - 240, w: 100, h: 40, f: () =>  Controls.Config.addBetValue(50) }, //50
        { x: Screen.width/2 - 95, y: Screen.height - 190, w: 100, h: 40, f: () =>  Controls.Config.addBetValue(100) }, //100
        { x: Screen.width/2 + 15, y: Screen.height - 190, w: 100, h: 40, f: () =>  Controls.Config.addBetValue(500) }, //500
        { x: Screen.width/2 - 75, y: Screen.height - 140, w: 150, h: 40, f: () =>  Controls.Config.resetBetValue() }, //500
        { x: Screen.width/2 - 100, y: Screen.height - 60, w: 200, h: 40, f: () =>  { Controls.changeScreen('normal'); box.t1 = new Date() } }, //confirm
    ]
}

boxClicks.boxes = boxes.selectHorse
boxClicks.refresh()