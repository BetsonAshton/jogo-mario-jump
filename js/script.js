const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () =>  {
mario.classList.add('jump');

setTimeout(() => {
    mario.classList.remove('jump');

}, 500);
}

const loop = setInterval (() => {

    console.log('loop')
        
    const primeiroPixelpipe = pipe.offsetLeft;  //aplicar o primeiro pixel do pipe 
    
    
    const marioPosition =+ window.getComputedStyle(mario).bottom.replace('px', ''); //  estou pegando o css  do mario da propriedade button e  fazendo um replace de pixel para vazio, ou seja apagando o pixel, para futuramente converter para de string para numero

    if (primeiroPixelpipe <= 120 && primeiroPixelpipe > 0  && marioPosition < 80) {

        console.log('colisao')

        pipe.style.animation ='none';
        pipe.style.left =`${primeiroPixelpipe}px`;

        mario.style.animation ='none';
        mario.style.bottom =`${marioPosition}px`;

        mario.src ='./images/game-over.png'; 
        mario.style.width ='75px'
        mario.style.marginLeft ='50px'
        
        clearInterval(loop); // quando jogo acaba no caso game over o loop para de rodar
    }
}, 10); 

document.addEventListener('keydown', jump);