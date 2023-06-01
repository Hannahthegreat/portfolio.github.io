gsap.registerPlugin(Flip);

const cards = document.querySelectorAll('.card'),
infos = document.querySelectorAll('.info');

cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        const state = Flip.getState(cards);

        const isCardActive = card.classList.contains("active");
        cards.forEach((otherCard, otherIdx) => {
            otherCard.classList.remove("active");
            otherCard.classList.remove("inactive");
            if(!isCardActive && index !== otherIdx) {
                otherCard.classList.add("inactive");
            }
        });
        if(!isCardActive) card.classList.add("active");

        Flip.from(state, {
            duration: 1,
            ease: "expo.out",
        });
    });
});


let paths = document.querySelectorAll('path'),
lines = document.querySelectorAll('line');

fillSvgPath()

document.addEventListener('scroll', fillSvgPath)

function fillSvgPath() {
    let scrollPercentage = (document.documentElement.scrollTop +document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    for (var i = 0; i < paths.length; i++ ) {
        let path = paths[i];
        
        let pathLength = path.getTotalLength();

        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;

        let drawLength = pathLength * scrollPercentage;

        path.style.strokeDashoffset = pathLength - drawLength;
    }
}
