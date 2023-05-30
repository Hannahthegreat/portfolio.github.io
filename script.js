const cards = document.querySelectorAll('.project__card, .about__card');

cards.forEach((card, index) => {
    card.addEventListener("click", () =>{
        // get state
        const state = Flip.getState(cards);

        // add active class to the clicked card and add inactive to others
        const isCardActive = card.classList.contains("active");
        cards.forEach((otherCard, otherIdx) => {
            otherCard.classList.remove("active");
            otherCard.classList.remove("inactive");
            if (!isCardActive && index !==otherIdx) {
                otherCard.classList.add("inactive");
            }
        });
        if (!isCardActive) card.classList.add("active");

        Flip.from(state, {
            duration: 1,
            ease: "power1.out",
            
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
