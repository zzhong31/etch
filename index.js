console.log('script loaded');
const container = document.querySelector('#mainDiv');

const clearGridBtn = document.querySelector('#clearButton');
const generateGridBtn = document.querySelector('#generateButton');


clearGridBtn.addEventListener('click', () => {
    container.textContent = '';
});

generateGridBtn.addEventListener('click', () => {
    let numSquares = prompt("How many squares should each side have?");
    createGrid(numSquares,numSquares);
});

function createGrid(widthSquares=4, heightsquares=4) {
    let counter = 0;

    let squaresPerLine = 0;

    let lineNumber = 0;

    while (counter < heightsquares) {

        const lineDiv = document.createElement('div');
        lineDiv.setAttribute('id', lineNumber + 'Line');
        while (squaresPerLine < widthSquares) {
            const squareDiv = document.createElement('div');
            squareDiv.style.cssText = 'border: 1px solid black; display: inline-block';
            let widthPx = 720/widthSquares;
            squareDiv.style.width = widthPx.toString();
            squareDiv.style.height = widthPx.toString();
            squareDiv.addEventListener('mouseover', () => {
                squareDiv.style.backgroundColor = 'black';

            });
            lineDiv.appendChild(squareDiv);
            squaresPerLine += 1;
        }
        container.append(lineDiv);

        counter += 1;
        squaresPerLine = 0;
        lineNumber += 1;
    }
}

