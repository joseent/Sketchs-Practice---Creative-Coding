const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true,
};

// const degToRad = (degrees) =>{
//   return degrees / 180 * Math.PI
// }
// const randomRange = (min, max) =>{
//   return Math.random() * (max - min) + min;
// }


const sketch = () => {
  return ({ context, width, height,frame }) => {
    if (frame % 30) return;
    
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    
    context.fillStyle ="white";
    
    const cx = width * 0.5;
    const cy = height * 0.5;
    
    const w = width * 0.01;
    const h = height * 0.1;
    let x,y;
    
    const num = 50;
    const radius = width * 0.3;
    
    for (let i = 0; i < num; i++) {
      
      const slice = math.degToRad(360 / num);
      const angle = slice * i;
      
      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x + random.range(10, 50)  ,y + random.range(10, 50) );
      context.rotate(-angle);
      context.scale(random.range(0.2,3), random.range(0.2,2));
      
      context.beginPath();
      context.rect(- w * 0.5 , random.range(0, -h *0.5),w,h);
      context.fill();
      context.restore();
      
      context.save();
      context.translate(cx,cy);
      context.rotate(-angle);

      context.lineWidth = random.range(5,20)
      
      context.beginPath();
      context.arc(0,0,radius * random.range(0.7, 1.3), slice * random.range(1, -8), slice *random.range(0, 5));
      if (Math.random() <= 0.5) {
        context.shadowBlur = 30;
        context.shadowColor = "green"
        context.strokeStyle = "green"
        context.stroke();
      }
      else if (Math.random() >= 0.5) {
        context.shadowBlur = 30;
        context.shadowColor = "orange"
        context.strokeStyle = "orange"
        context.stroke();
      }
      else{
        context.shadowBlur = 30;
        context.shadowColor = "purple"
        context.strokeStyle = "purple"
        context.stroke();
      }
      
      context.restore();

    }
  };
};

canvasSketch(sketch, settings);
