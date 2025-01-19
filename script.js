const body = document.getElementsByTagName('body')
const natsuki = document.getElementById("natsuki")
const sayori = document.getElementById("sayori")
const yuri = document.getElementById('yuri')
const theOtherNatsuki = document.getElementById('otherNat')
const justMonika = document.getElementById('monika')
const stickNatsuki = document.getElementById("nat-sticker")
const stickNatsuki2 = document.getElementById('natsticker2')

const Logo = document.getElementById('Logo')
const Logo2 = document.getElementById('gameLogo')

let mainAudio = document.createElement('audio')

/*textos*/
const dokitext = document.getElementById("dokitext")
const dokidesc = document.getElementById("desc")

const navSobr = document.getElementById('navSobr')
const navGirl = document.getElementById('navGirl')
const navGame = document.getElementById('navGame')
const navCont = document.getElementById('navCont')

const sayoriTitle = document.getElementById('sayoriTitle')
const sayoriDesc = document.getElementById('sayoriDesc')

const yuriTitle = document.getElementById('yuriTitle')
const yuriDesc = document.getElementById('yuriDesc')

const natTitle = document.getElementById('natTitle')
const natDesc = document.getElementById('natDesc')

const monikaTitle = document.getElementById('monikaTitle')
const monikaDesc = document.getElementById('monikaDesc')

const btnGame = document.getElementById('btnGame')

/*Ambiente*/
const NavOrg = document.getElementById('NavOrg') 
const natBox = document.getElementById('natsuki-box')

const chraContainer1 = document.getElementsByClassName('chracter-container')[0]
const chraContainer2 = document.getElementsByClassName('chracter-container')[1]
const chraContainer3 = document.getElementsByClassName('chracter-container')[2]
const chraContainer4 = document.getElementsByClassName('chracter-container')[3]

const gameBox = document.getElementById("gameBox")


/*Ativadores*/
const activator = document.getElementById('spooky')
const poorSoul = document.getElementById('hang')
let deadEnd = document.getElementById("deadEnd")
let StageValue = 1


/*stage 1 base */
stage1 = () => {
    natsuki.addEventListener('mouseenter', () => {
        if (StageValue !== 1) return; // Verifica se StageValue ainda é 1
        natsuki.src = './img/Natsukiheadturn.jpeg';
    });

    natsuki.addEventListener('mouseleave', () => {
        if (StageValue !== 1) return;
        natsuki.src = './img/NatsukiCrossedArms.jpeg';
    });

    sayori.addEventListener('mouseenter', () => {
        if (StageValue !== 1) return;
        sayori.src = "./img/sayoriakward2.jpeg";
    });

    sayori.addEventListener('mouseleave', () => {
        if (StageValue !== 1) return;
        sayori.src = "./img/sayoriakward.jpeg";
    });

    yuri.addEventListener('mouseenter', () => {
        if (StageValue !== 1) return;
        yuri.src = "./img/Yurifull2.jpeg";
    });

    yuri.addEventListener('mouseleave', () => {
        if (StageValue !== 1) return;
        yuri.src = "./img/Yurifull.jpeg";
    });

    theOtherNatsuki.addEventListener('mouseenter', () => {
        if (StageValue !== 1) return;
        theOtherNatsuki.src = "./img/natsuki2.jpeg";
    });

    theOtherNatsuki.addEventListener('mouseleave', () => {
        if (StageValue !== 1) return;
        theOtherNatsuki.src = "./img/natsuki1.jpeg";
    });

    justMonika.addEventListener('mouseenter', () => {
        if (StageValue !== 1) return;
        justMonika.src = "./img/justMonika2.jpeg";
        justMonika.style.width = '400px';
    });

    justMonika.addEventListener('mouseleave', () => {
        if (StageValue !== 1) return;
        justMonika.src = "./img/justMonika.jpeg";
        justMonika.style.height = '400px';
        justMonika.style.width = '400px';
    });

    window.addEventListener('load', () => {
        if (StageValue !== 1) return;
        mainAudio.src = "./assets/audio/utomp3.com - Doki Doki Literature Club OST  Doki Doki Literature Club Main Theme.mp3";
        mainAudio.loop = true;
        mainAudio.autoplay = true;
        document.body.appendChild(mainAudio);
    });
};

if (StageValue === 1){
    stage1()
}

stage2 = () => {
    StageValue = 2
    document.body.removeChild(mainAudio)
    activator.style.visibility = 'visible';
    window.scrollTo(0, 0);
    document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'hidden';

    updateMessage = (element, message, delay) => {
        setTimeout(() => {
            element.innerHTML = message
        }, delay)
    }

    updateMessage(deadEnd, 'Ela estava chorando antes de se suicidar', 2000)
    updateMessage(deadEnd, 'Eu pude ouvir os soluços antes de gritar o seu último...', 6000)
    updateMessage(deadEnd, 'Pedido de desculpas', 12000)

    setInterval(() => {
        stage3()
    },16000)
}

stage3 = () => {
    let spookyAudio = document.createElement('audio')
    spookyAudio.src = './assets/audio/utomp3.com - 5 yuri2 DDLC creepy poem music.mp3'
    spookyAudio.loop = true
    spookyAudio.autoplay = true
    spookyAudio.volume = 0.3
    document.body.appendChild(spookyAudio);
    activator.style.visibility = 'visible';
    activator.style.zIndex = '0'
    poorSoul.style.visibility = 'hidden'
    deadEnd.style.visibility = 'hidden'
    document.body.style.overflowY = 'visible';
    document.body.style.overflowX = 'hidden';

    /*textos*/
    updateText = (element, value1) => {
        element.innerHTML = value1
        element.style.position = 'relative'
        element.style.color = 'white'
        element.style.zIndex = '1'
    }

    updateText(dokitext, 'Se soubesse o quanto eu te amo...')
    updateText(dokidesc, 'Provavelmente não estaria olhando assim para a tela, qual o problema? tudo está como sempre esteve')
    updateText(navSobr, 'Team')
    updateText(navGirl, 'Salvato')
    updateText(navGame, 'sacrifica')
    updateText(navCont, 'crianças')

    updateText(sayoriTitle, 'Sayori')
    updateText(sayoriDesc, 'Você fez isso, não eu, orgulhe-se')

    updateText(yuriTitle, 'Yuri')
    updateText(yuriDesc, 'Vadia que se paga de emo, finge formalidade e elegancia para disfarçar seu verdadeiro eu (curiosidade, ela coleciona facas e se corta com elas, tipo fetiche ou algo assim)')

    updateText(natTitle, 'Natsuki')
    updateText(natDesc, 'Finge uma personalidade fofa para disfarçar sua personalidade tóxica, provavelmente herdou isso de seu pai')

    updateText(monikaTitle, 'Monika')
    updateText(monikaDesc, 'Senti sua falta')

    updateText(btnGame, 'Clique aqui para ir para o inferno')

    /*personagens*/
    stickNatsuki.style.visibility = 'hidden'
    stickNatsuki2.style.visibility = 'hidden'
    updateChr = (element, src) => {
        element.src = src
    }
    updateChr(Logo, './img/shecriedbeforedying.jpeg')
    updateChr(Logo2, './img/shecriedbeforedying.jpeg')
    updateChr(natsuki, "./img/horrornatsuki1.jpeg")
    updateChr(theOtherNatsuki, "./img/natsukiHorrordown.jpeg")
    updateChr(yuri, './img/yurihorror.jpeg')
    updateChr(justMonika, "./img/sadending.jpeg")

    /*Ambiente*/
    updateAmbience = (element) => {
        element.style.background = 'black'
        element.style.boxShadow = 'none'
        element.style.border = 'none'
    }
    updateAmbience(NavOrg)
    updateAmbience(natBox)

    updateAmbience(chraContainer1)
    updateAmbience(chraContainer2)
    updateAmbience(chraContainer3)
    updateAmbience(chraContainer4)

    updateAmbience(gameBox)

    sayori.style.visibility = 'hidden'
}
/*stage 1 base */

/*stage 2 base*/
justMonika.addEventListener('click', (event) => {
    event.preventDefault();
    stage2()
});