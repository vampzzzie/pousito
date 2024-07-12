const question = document.querySelector(".question");
const gif = document.querySelector(".gif")
const yesBtn = document.querySelector(".yes-btn")
const noBtn = document.querySelector(".no-btn")

yesBtn.addEventListener("click",()=> {
    question.innerHTML ="OMG GUATONCITO TE AMO MXO MXO MXO MXO, gracias por elegirme (aunque obligao) tenemos muchas diferencias y seguramente problemas también, sin embargo quisiera que siempre nos mantengamos unidos. quiero enamorarte día tras día, por favor no vuelvas a decir que debería buscar a alguien más porque nunca habrá nadie mejor para mí, y sé que sabes eso muy bien, sabes lo que eres capaz de dar y sabes que ambos nos merecemos mutuamente porque en nuestros corazones hay muchisimo amor. mejoremos y crezcamos juntos pero nunca dejemos que nuestro amor se acabe, por el contrario, hay que alimentarlo mucho pke nuestro amor es tragoncito jeje, te adoro mi vida, apesar de cualquier problema que pueda pasar no debes olvidar que te amo mucho y que eres lo mejor que me pudo pasar.";
    gif.src="https://www.icegif.com/wp-content/uploads/snoopy-valentine-icegif-6.gif"
})

noBtn.addEventListener("mouseover",()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    noBtn.style.left =randomX + "px";
    noBtn.style.top =randomY + "px";
})
