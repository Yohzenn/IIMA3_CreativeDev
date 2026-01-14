const canvas = document.getElementById("canvas") as HTMLCanvasElement;
console.log(canvas);

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const dpr = window.devicePixelRatio || 1;
const width = Math.floor(canvas.clientWidth * dpr);
const height = Math.floor(canvas.clientHeight * dpr);
canvas.width = width;
canvas.height = height;
ctx.strokeStyle = "violet";

function drawBullet(x:number,y:number,xLength:number,yLength:number){
    ctx.beginPath();
    ctx.moveTo(x,y);
}