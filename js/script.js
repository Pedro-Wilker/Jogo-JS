const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {

    document.querySelector('.mario').classList.add("jump");

    setTimeout(() => {
        document.querySelector('.mario').classList.remove("jump");
    },500)

}

const loop = setInterval(()=>{
    
    const pipePosition = document.querySelector('.pipe').offsetLeft;
    const marioPosition = +window.getComputedStyle(document.querySelector('.mario')).bottom.replace('px','');
    console.log(marioPosition);

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        document.querySelector('.pipe').style.animation="none";
        document.querySelector('.pipe').style.left=`${pipePosition}px`;

        document.querySelector('.mario').style.animation="none";
        document.querySelector('.pipe').bottom=`${marioPosition}px`;

        document.querySelector('.mario').src= './images/game-over.png';
        document.querySelector('.mario').style.width="75px";
        document.querySelector('.mario').style.marginLeft="50px";

        clearInterval(loop);
    }
},10)

document.addEventListener('keydown',jump);