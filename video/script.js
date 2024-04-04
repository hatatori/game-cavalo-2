const w = 500
const h = 280

var canvas = document.getElementById('canvas');
var ctx    = canvas.getContext('2d');
var video  = document.getElementById('video');

canvas.setAttribute('width', w)
canvas.setAttribute('height', h)
ctx.width = w
ctx.height = h

// ctx.drawImage(video, 0, 0);

// ctx.drawImage(this.video, 0, 0, video.width, video.height);

function desenha(){
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const frame = ctx.getImageData(0, 0, ctx.width, ctx.height)
    const data = frame.data;
    // console.log(frame)
    // console.log(data)

    for (let i = 0; i < data.length; i += 4) {
        const red = data[i + 0];
        const green = data[i + 1];
        const blue = data[i + 2];
        if (green > ran1.value && red < ran1.value && blue < ran1.value) {
            data[i + 3] = 0;
        }
    }
    ctx.putImageData(frame, 0, 0);
    requestAnimationFrame(desenha)
}


requestAnimationFrame(desenha)

// video.on('play', () => { alert('ok') });
// video.addEventListener('seeking', function() { alert('ok')})