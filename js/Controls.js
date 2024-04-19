const Controls = {
    progressBarporcent: 0,
    laps: 0,


    Config: {
        modality: 1,
        horses: [5],              // cavalo que você escolheu
        betValue: 0,            // o valor que você vai apostar
        arrivalHorses: [1,2,5],   // ordem de chegada dos cavalos na linha de chegada
        balance: 1200,            // seu saldo
        winMoney: 200,            // valor a receber

        setModality(n){
            this.horses = []
            this.modality = n
            MessagesGame.selectHorse.horses1 = '1 CAVALO'
            MessagesGame.selectHorse.horses2 = '2 CAVALOS'
            MessagesGame.selectHorse.horses3 = '3 CAVALOS'
            if(n == 1) MessagesGame.selectHorse.horses1 = '> 1 CAVALO'
            if(n == 2) MessagesGame.selectHorse.horses2 = '> 2 CAVALOS'
            if(n == 3) MessagesGame.selectHorse.horses3 = '> 3 CAVALOS'
        },

        setSelectHorse(arr){
            this.horses = arr
        },

        setBalance(n){
            this.balance = n
            MessagesGame.selectMoney.msg_saldo = 'Saldo: R$ '+n.toString()
        },

        setBetValue(val){
            this.betValue = val
            MessagesGame.selectMoney.valor = 'R$ '+this.betValue.toString()
        },

        addBetValue(val){
            this.betValue += val
            this.setBetValue(this.betValue)
        },

        resetBetValue(){
            this.setBetValue(0)
        },

        horseChoice(n){
            Controls.Config.horses.push(n)
            if(Controls.Config.horses.length > Controls.Config.modality){
                Controls.Config.horses = []
            }
        }


    },
    
    arrivalHorses(a, b, c){
        box.horses[a].placement = 1
        box.horses[b].placement = 2
        box.horses[c].placement = 3
    },

    resetObjects(){
        preloadObjects()
        adjustPositions()
    },
    

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
                        // ScreenActive.screen = ScreenActive.Screens.selectHorse
                        // ScreenActive.screen = ScreenActive.Screens.normal
                        // ScreenActive.screen = ScreenActive.Screens.selectMoney
                        // ScreenActive.screen = ScreenActive.Screens.selectHorse
                        // ScreenActive.screen = ScreenActive.Screens.normal
                        // escolherTelaClick()
                        // click.escolherTelaClick(click.telas.selecao_cavalos)

                        Controls.changeScreen('selectHorse')

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
    },

    changeScreen(name){

        if(name == 'selectHorse'){
            boxClicks.boxes = boxes.selectHorse 
        }

        if(name == 'selectMoney'){
            boxClicks.boxes = boxes.selectMoney 
        }

        if(name == 'normal'){
            preloadObjects()
            adjustPositions()
        }

        ScreenActive.screen = name
        
    }
}

Controls.load()


