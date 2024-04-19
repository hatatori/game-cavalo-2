const ScreenActive = {

    Screens: {
        loading: "loading",
        coicehorse: "coicehorse",
        normal: "normal",
        selectHorse: "selectHorse",
        selectMoney: "selectMoney",
    },

    screen: "loading",

    selectHorse(){
        ctx.beginPath();
        ctx.fillStyle = "#227099"; 
        ctx.fillRect(0, 0, Screen.width, Screen.height);


        // box.background.draw()
        // box.mountains.map((e,i)=>{ e.draw() ;})
        // box.grasses.map(e=>{ e.draw(); })
        // box.DiagonalLine.draw()
        
        box.mountains.map(e=>{ 
            e.x = e.x|0
            e.y = Screen.height - e.height|0
            e.draw();
        })
        
        box.hills.map(e=>{ 
            e.x = e.x|0
            e.y = Screen.height - e.height|0
            e.draw();
        })


        messageBox(MessagesGame.selectHorse.select, Screen.width/2 - MessagesGame.selectHorse.select.split('\n')[0].length*40/2, 10)
        
        if(Controls.Config.horses.length != Controls.Config.modality){
            MessagesGame.selectHorse.btConfirm = ''
        }else{
            MessagesGame.selectHorse.btConfirm = 'CONFIRMAR'
        }

        button(MessagesGame.selectHorse.btConfirm, Screen.width/2 - MessagesGame.selectHorse.btConfirm.length*10 - 10, Screen.height - 60, '#5fb74d55')

        messageBox2(MessagesGame.selectHorse.horses1, Screen.width/2 - 6*40/2 - 20, Screen.height - 200)
        messageBox2(MessagesGame.selectHorse.horses2, Screen.width/2 - 6*40/2 - 20, Screen.height - 160)
        messageBox2(MessagesGame.selectHorse.horses3, Screen.width/2 - 6*40/2 - 20, Screen.height - 120)

        const deslocX = Screen.width/2 - box.horses[0].width + 40
        
        box.horses[0].x = deslocX + box.horses[0].x + 0
        box.horses[1].x = deslocX + box.horses[1].x + 200
        box.horses[2].x = deslocX + box.horses[2].x + 0
        box.horses[3].x = deslocX + box.horses[3].x + 200
        box.horses[4].x = deslocX + box.horses[4].x + 0
        box.horses[5].x = deslocX + box.horses[5].x + 200
        
        box.horses[0].y = 150 - 40
        box.horses[1].y = 150 - 40
        box.horses[2].y = 250 - 40
        box.horses[3].y = 250 - 40
        box.horses[4].y = 350 - 40
        box.horses[5].y = 350 - 40

        Controls.Config.horses.map(horse=>{
            const h = box.horses[horse]
            square(
                h.x+h.tx+33, h.y+12,
                h.width-70, h.height-28,
                '#FFFFFF22',
                'white'
            )
        })

        box.horses.map(e=>{ e.draw() ; e.refresh() })
        
        
        // square(0, 0, 300, 100)
        boxClicks.draw()
    },

    selectMoney(){

        

        ctx.beginPath();
        ctx.fillStyle = "#227099"; 
        ctx.fillRect(0, 0, Screen.width, Screen.height);
        
        box.mountains.map(e=>{ 
            e.x = e.x|0
            // e.y = Screen.height - e.height|0
            e.y = 100
            e.draw();
        })
        box.hills.map(e=>{ 
            e.x = e.x|0
            e.y = Screen.height - e.height|0
            e.draw();
        })

        // Sprites.bill.x = Screen.width/2 - Sprites.bill.width / 2
        // Sprites.bill.y = 200
        // Sprites.bill.draw()

        button('<',5,5)

        messageBox2(MessagesGame.selectMoney.msg_saldo, Screen.width/2 - MessagesGame.selectMoney.msg_saldo.length*10, 60)

        messageBox2(MessagesGame.selectMoney.msg_valor, Screen.width/2 - MessagesGame.selectMoney.msg_valor.length*10, 300)
        messageBox(MessagesGame.selectMoney.valor, Screen.width/2 - MessagesGame.selectMoney.valor.length*20, 330)
        
        const bt_col_1 = Screen.width/2 - (MessagesGame.selectMoney.bt1.length*20*1) - 15
        const bt_col_2 = Screen.width/2 - (MessagesGame.selectMoney.bt1.length*20*0) + 15

        button(MessagesGame.selectMoney.bt1, bt_col_1, 400 - 10)
        button(MessagesGame.selectMoney.bt2, bt_col_2, 400 - 10)
        button(MessagesGame.selectMoney.bt3, bt_col_1, 450 - 10)
        button(MessagesGame.selectMoney.bt4, bt_col_2, 450 - 10)
        button(MessagesGame.selectMoney.bt5, bt_col_1, 500 - 10)
        button(MessagesGame.selectMoney.bt6, bt_col_2, 500 - 10)

        button(MessagesGame.selectMoney.btReset, Screen.width/2 - MessagesGame.selectMoney.btReset.length*10 - 10, 550 - 10)
        button(MessagesGame.selectMoney.btConfirm, Screen.width/2 - MessagesGame.selectMoney.btConfirm.length*10 - 10, Screen.height - 60, '#5fb74d55')

        boxClicks.draw()
        
    },

    loading(){
        
    },

    // coicehorse(){
    //     ctx.beginPath();
    //     ctx.fillStyle = "black"; 
    //     ctx.fillRect(0, 0, Screen.width, Screen.height);
    // },

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
        // box.horses.map(e=>{ e.refresh(); })
        box.horses.map(e=>{ e.refresh(); })
        box.fencesBottom.map(e=>{ e.refresh(); })
        box.plantsBottom.map(e=>{ e.refresh(); })
        box.finishLine.refresh()

        // draw
        box.background.draw()
        box.mountains.map((e,i)=>{ e.draw() ;})
        box.grasses.map(e=>{ e.draw(); })

        if(box.dif > 5) box.DiagonalLine.draw();

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

        
        
        
        box.t2 = new Date()
        // box.t2 = new Date(Date.now() + 20 * 1000)
        // box.t2 = new Date(Date.now())
        box.dif = ((box.t2-box.t1)/1000)
        
        // box.dif = ran.value
        box.horses.map(e=>e.time = box.dif)

        box.cities.map((e,i)=>{ e.x = 5*box.dif*-1 % Screen.width+e.width * i })
        box.plantsTop.map((e,i)=>{ e.x = 300*box.dif*-1 % Screen.width+e.width * i })
        box.fencesTop.map((e,i)=>{ e.x = 300*box.dif*-1 % Screen.width+e.width * i })
        box.fencesBottom.map((e,i)=>{ e.x = 300*box.dif*-1 % Screen.width+e.width * i })
        box.plantsBottom.map((e,i)=>{ e.x = 300*box.dif*-1 % Screen.width+e.width * i })
        box.grasses.map((e,i)=>{ e.x = 300*box.dif*-1 % Screen.width+e.width * i })
        box.linesTop.map((e,i)=>{ e.x = 300*box.dif*-1 % Screen.width+e.width * i })
        box.linesBottom.map((e,i)=>{ e.x = 300*box.dif*-1 % Screen.width+e.width * i })
        
        box.hills.map((e,i)=>{ e.x = 20*box.dif*-1 % Screen.width+e.width * i })

        box.trees.map((e,i)=>{ 
            // e.x = 250*box.dif*-1 % Screen.width+e.width * i 
            e.x = -box.dif*5/59 * Screen.width + i * Screen.width / 3
            // e.x = 300*box.dif*-1 % Screen.width+e.width * i
            // const px = e.x + e.width
            // let x = i * 300 + box.dif * 300 * -1  % 300 * 3
        })

        messageBox2(box.dif.toString(), 100, 100)
        
        box.finishLine.x = 10*958 + 300*box.dif*-1
        
        // linhas brancas do chão
        box.lines.map((e,i)=>{
            let x, y, txt;

            txt = ((i+1)*100).toString()+'m'
            x = e.x-40
            y = e.y-20
            x =  500 + i * 1000 + 300*box.dif*-1
            e.x = x
            messageBox2(txt, x, y)
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

        // box.horses[0].placement = Controls.placement1
        // box.horses[1].placement = Controls.placement2
        // box.horses[2].placement = Controls.placement3
        Controls.arrivalHorses(3,2,0)
        
        box.horses.map(e=>{ e.draw(); })
        box.finishLine.draw()
        box.arrow_down.draw()
        
        // laps
        Controls.laps = box.lines.map(e=>e.x < horsePlacement1.x+horsePlacement1.tx).filter(e=>e).length;


        MessagesGame.controlLaps = `${Controls.laps}/${finalLap}`
        messageBox(MessagesGame.controlLaps, 20, 20)

        // win message
        if(Controls.laps >= finalLap){ 

            a = Controls.Config.horses
            b = Controls.Config.arrivalHorses
            s = 0
            b.map(e=> { if(a.includes(e)){ s++ } } ) 

            if(s > 0){
                box.win.draw() 
                MessagesGame.normal.win = 'YOU WIN'
                MessagesGame.normal.value = 'R$ ' + Controls.Config.winMoney.toString()
            }
            
        }

        // fim
        const horsesLen = box.horsesOrderFinishLine.length

        if(horsesLen == 0 && horsePlacement1.x >= box.finishLine.x - 300) 
            box.horsesOrderFinishLine.push(horsePlacement1);
        if(horsesLen == 1 && horsePlacement2.x >= box.finishLine.x - 300) 
            box.horsesOrderFinishLine.push(horsePlacement2);
        if(horsesLen == 2 && horsePlacement3.x >= box.finishLine.x - 300)
            box.horsesOrderFinishLine.push(horsePlacement3);
        

        if( box.horsesOrderFinishLine[0] ){
            const a = box.horsesOrderFinishLine[0]
            MessagesGame.normal.placement1 = '1º'
            messageBox(MessagesGame.normal.placement1, a.x-20 + a.width/2 + a.tx - 10, a.y + 40)
        }

        if( box.horsesOrderFinishLine[1] ){
            const a = box.horsesOrderFinishLine[1]
            MessagesGame.normal.placement2 = '2º'
            messageBox(MessagesGame.normal.placement2, a.x-20 + a.width/2 + a.tx - 10, a.y + 40)
        }

        // ao cruzar a linha de chegada.
        if( box.horsesOrderFinishLine[2] ){
            const a = box.horsesOrderFinishLine[2]
            
            MessagesGame.normal.placement3 = '3º'
            messageBox(MessagesGame.normal.placement3, a.x-20 + a.width/2 + a.tx - 10, a.y + 40)
            
            box.horses.map(e=>e.alpha = 0)

            box.horsesOrderFinishLine[0].alpha = 1
            box.horsesOrderFinishLine[1].alpha = 0.5
            box.horsesOrderFinishLine[2].alpha = 0.5

            box.arrow_down.visible = false

            messageBox(MessagesGame.normal.win, Screen.width/2 - MessagesGame.normal.win.length * 40 / 2, Screen.height/4 + 0)
            messageBox(MessagesGame.normal.value, Screen.width/2 - MessagesGame.normal.value.length * 40 / 2, Screen.height/4 + 50)
            
            box.DiagonalLine.visible = false

            

            

        }

        if(Controls.laps < finalLap){

            box.horses.map(e=>e.alpha = 1)
            
            MessagesGame.normal.win = ''
            MessagesGame.normal.value = ''
            MessagesGame.normal.placement1 = ''
            MessagesGame.normal.placement2 = ''
            MessagesGame.normal.placement3 = ''

            // box.Msgs.t[0].txt = ''
            // box.Msgs.t[1].txt = ''
            // box.Msgs.t[2].txt = ''
            // box.Msgs.t[3].txt = ''
            // box.Msgs.t[4].txt = ''

            if(box.horsesOrderFinishLine[2]){
                box.horsesOrderFinishLine.pop()
                box.horsesOrderFinishLine.pop()
                box.horsesOrderFinishLine.pop()
            }

            box.DiagonalLine.visible = true
        }
    }
}