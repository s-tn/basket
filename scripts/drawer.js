const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
let painting = false;
let brushColor = '#000000';
let brushSize = 5;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.id = "drawingCanvas";
document.body.appendChild(canvas);

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    if (!painting) return;
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

canvas.addEventListener('mousedown', startPosition);
document.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

document.getElementById('brushColor').addEventListener('change', function() {
    brushColor = this.value;
});

document.getElementById('brushSize').addEventListener('input', function() {
    brushSize = this.value;
});

addEventListener('keypress', (e) => {
    if (e.key === 'h') {
        canvas.classList.toggle('hidden');
    }

    if (e.key === 's') {
        document.querySelector('#gameFrame').contentWindow.c3_runtimeInterface._localRuntime.SetSuspended(true);
    }
})