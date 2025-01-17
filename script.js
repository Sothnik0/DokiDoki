const body = document.getElementsByTagName('body')
const natsuki = document.getElementById("natsuki")
const sayori = document.getElementById("sayori")
const yuri = document.getElementById('yuri')
const theOtherNatsuki = document.getElementById('otherNat')
const justMonika = document.getElementById('monika')
const stickNatsuki = document.getElementById("nat-sticker")

/*textos*/
let dokitext = document.getElementById("dokitext")
/*Ativadores*/
const activator = document.getElementById('spooky')
let deadEnd = document.getElementById("deadEnd")
let StageValue = 1


/*stage 1 base */
if (StageValue == 1){
    natsuki.addEventListener('mouseenter', () => {
        natsuki.src = './img/Natsukiheadturn.jpeg'
    })
    
    natsuki.addEventListener('mouseleave', () => {
        natsuki.src = './img/NatsukiCrossedArms.jpeg'
    })
    
    sayori.addEventListener('mouseenter', () => {
        sayori.src = "./img/sayoriakward2.jpeg"
    })
    
    sayori.addEventListener('mouseleave', () => {
        sayori.src = "./img/sayoriakward.jpeg"
    })
    
    yuri.addEventListener('mouseenter', () => {
        yuri.src = "./img/Yurifull2.jpeg"
    })
    
    yuri.addEventListener('mouseleave', () => {
        yuri.src = "./img/Yurifull.jpeg"
    })
    
    theOtherNatsuki.addEventListener('mouseenter', () => {
        theOtherNatsuki.src = "./img/natsuki2.jpeg"
    })
    
    theOtherNatsuki.addEventListener('mouseleave', () => {
        theOtherNatsuki.src = "./img/natsuki1.jpeg"
    })
    
    justMonika.addEventListener('mouseenter', () => {
        justMonika.src = "./img/justMonika2.jpeg"
        justMonika.style.width = '400px'
    })
    
    justMonika.addEventListener('mouseleave', () => {
        justMonika.src = "./img/justMonika.jpeg"
        justMonika.style.height = '400px'
        justMonika.style.width = '400px'
    })
}

/*stage 1 base */

/*stage 2 base*/
justMonika.addEventListener('click', (event) => {
    event.preventDefault();
    StageValue++;

    if (StageValue === 2) {
        activator.style.visibility = 'visible';
        window.scrollTo(0, 0);
        document.body.style.overflowY = 'hidden';
        document.body.style.overflowX = 'hidden';
    }

    function updateDeadEndMessage(message, delay) {
        setTimeout(() => {
            deadEnd.innerHTML = message;
        }, delay);
    }

    updateDeadEndMessage('Ela estava chorando antes de se suicidar', 2000);
    updateDeadEndMessage('Eu pude ouvir os soluços antes de ouvir seu último...', 6000);
    updateDeadEndMessage('Pedido de desculpas', 12000);

    setTimeout(() => {
        StageValue++;
        if (StageValue === 3) {
            activator.style.visibility = 'hidden';
            document.body.style.overflowY = 'visible';
            document.body.style.overflowX = 'hidden';
        }
    }, 16000);
});