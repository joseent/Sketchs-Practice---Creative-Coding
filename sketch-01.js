const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.005
    
    const h = width * 0.10;
    const w = height * 0.10
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;

    const off = width * 0.02;

    let x,y;
    let canvasWidth = (Math.random() * (600 - 100) + 100)
    
    let gradientY = context.createLinearGradient(0,0,canvasWidth,0);
    gradientY.addColorStop(0,"red");
    gradientY.addColorStop(0.5,"white");
    gradientY.addColorStop(1,"orange");


    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            x = ix + (w + gap) * i;
            y = iy + (h + gap) * j;
            if (Math.random() < 0.4) {
            context.beginPath();
            context.rect(x,y,w, h)
            context.fillStyle = "white"
            context.fillRect(x,y,w, h)
            context.strokeStyle = "white"
            context.stroke()
            }else {
                context.beginPath();
            context.rect(x,y,w, h)
            context.stroke()
            }
            
            if (Math.random() < 0.5) {
                context.beginPath();
                context.rect(x + off / 2, y + off / 2 ,w - off , h - off)
                context.fillStyle = gradientY
                context.fillRect(x + off / 2, y + off / 2 ,w - off , h - off)
                context.stroke()
            }

        }
        
    }

  };
};

canvasSketch(sketch, settings);
