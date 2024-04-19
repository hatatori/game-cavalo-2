function loop(){
    ScreenActive[ScreenActive.screen]()
    requestAnimationFrame(loop)
}
loop()

// window.onmousemove=function(e){
    // const x = -e.movementX*10*2
    // box.finishLine.x += x
    // box.lines.map((e,i)=>{ e.x += x })
// }

window.onkeyup=e=>{
    if(e.key == "1"){
        Controls.changeScreen('selectHorse')
    }

    if(e.key == "2"){
        Controls.changeScreen('selectMoney')
    }

    if(e.key == "3"){
        Controls.changeScreen('normal')
    }

}