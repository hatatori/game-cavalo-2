const $ = el => document.querySelector(el)

tela = {
    selecao_cavalos: {
        selecao_cavalos: $('#selecao_cavalos'),
        cavalo_0: $('#cavalo_0'),
        cavalo_1: $('#cavalo_1'),
        cavalo_2: $('#cavalo_2'),
        cavalo_3: $('#cavalo_3'),
        cavalo_4: $('#cavalo_4'),
        cavalo_5: $('#cavalo_5'),
        modalidade_1: $('#modalidade_1'),
        modalidade_2: $('#modalidade_2'),
        modalidade_3: $('#modalidade_3'),
        btn_confirmar: $('#btn_confirmar_cavalos'),
    },
    aposta: {
        aposta: $('#aposta'),
        btn_volta: $('#btn_volta'),
        btn_um: $('#btn_um'),
        btn_cinco: $('#btn_cinco'),
        btn_dez: $('#btn_dez'),
        btn_cinquenta: $('#btn_cinquenta'),
        btn_cem: $('#btn_cem'),
        btn_quinhentos: $('#btn_quinhentos'),
        btn_reset: $('#btn_reset'),
        btn_cofirmar_aposta: $('#btn_cofirmar_aposta'),
    }

}

// SELEÇÃO CAVALOS
tela.selecao_cavalos.selecao_cavalos.removeAttribute('style')
tela.selecao_cavalos.modalidade_1.onclick = () => escolherModalidade(1)
tela.selecao_cavalos.modalidade_2.onclick = () => escolherModalidade(2)
tela.selecao_cavalos.modalidade_3.onclick = () => escolherModalidade(3)
tela.selecao_cavalos.cavalo_0.onclick = () => escolherCavalo(0)
tela.selecao_cavalos.cavalo_1.onclick = () => escolherCavalo(1)
tela.selecao_cavalos.cavalo_2.onclick = () => escolherCavalo(2)
tela.selecao_cavalos.cavalo_3.onclick = () => escolherCavalo(3)
tela.selecao_cavalos.cavalo_4.onclick = () => escolherCavalo(4)
tela.selecao_cavalos.cavalo_5.onclick = () => escolherCavalo(5)


tela.selecao_cavalos.btn_confirmar.onclick = () => {
    if(Controls.Config.horses.length == Controls.Config.modality){
        ScreenActive.screen = ScreenActive.Screens.selectMoney
        escolherTelaClick('aposta')
    }
}

function escolherModalidade(n){
    Controls.Config.setModality(n)
    Controls.Config.horses = []
}

function escolherCavalo(n){
    Controls.Config.horses.push(n)
    if(Controls.Config.horses.length > Controls.Config.modality){
        Controls.Config.horses = []
    }
}


// APOSTA
function escolherTelaClick(escolha){

    if(escolha == ''){
        tela.selecao_cavalos.selecao_cavalos.style.display = 'none'
        tela.aposta.aposta.style.display = 'none'
        return     
    }

    tela.selecao_cavalos.selecao_cavalos.style.display = 'none'
    tela.aposta.aposta.style.display = 'none'
    tela[escolha][escolha].removeAttribute('style')
}

// escolherTelaClick('')

tela.aposta.btn_um.onclick = () =>              { Controls.Config.addBetValue(1) }
tela.aposta.btn_cinco.onclick = () =>           { Controls.Config.addBetValue(5) }
tela.aposta.btn_dez.onclick = () =>             { Controls.Config.addBetValue(10) }
tela.aposta.btn_cinquenta.onclick = () =>       { Controls.Config.addBetValue(50) }
tela.aposta.btn_cem.onclick = () =>             { Controls.Config.addBetValue(100) }
tela.aposta.btn_quinhentos.onclick = () =>      { Controls.Config.addBetValue(500) }
tela.aposta.btn_reset.onclick = () =>           { Controls.Config.resetBetValue() }
tela.aposta.btn_volta.onclick = () =>           { Controls.changeScreen('selectHorse'); escolherTelaClick('selecao_cavalos');  }
tela.aposta.btn_cofirmar_aposta.onclick = () => { Controls.changeScreen('normal'); escolherTelaClick('');  }



const click = {
    telas: {
        selecao_cavalos: 'selecao_cavalos',
        aposta: 'aposta'
    },

    escolherTelaClick(name){
        escolherTelaClick(name)
    }
    
}




// window.addEventListener('resize', () => {
//     // Executa o mesmo script de antes
//     let vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
//   });
// document.documentElement.style.setProperty('--vh', `${vh}px`);
// document.documentElement.style.setProperty('--vh', `200px`);
