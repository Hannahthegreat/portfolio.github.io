let paths = document.querySelectorAll('path'),
lines = document.querySelectorAll('line');

fillSvgPath()
fillSvgLine()
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
function fillSvgLine() {
    let scrollPercentage = (document.documentElement.scrollTop +document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    for (var i = 0; i < lines.length; i++ ) {
        let line = lines[i];
        
        let lineLength = line.getTotalLength();

        line.style.strokeDasharray = lineLength;
        line.style.strokeDashoffset = lineLength;

        let drawLength = lineLength * scrollPercentage;

        line.style.strokeDashoffset = lineLength - drawLength;
    }
}