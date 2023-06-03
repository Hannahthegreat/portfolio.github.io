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


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const cursor = document.querySelector('.cursor');
document,addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});