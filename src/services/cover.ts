let offset = 0; 

function drawCurve(x:number,y:number,cpx1:number,cpy1:number,cpx2:number,cpy2:number,x2:number, y2:number, ctx: CanvasRenderingContext2D){
    ctx.clearRect(0,0,500,500);
    ctx.strokeStyle = "violet";
    ctx.lineDashOffset = 0;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.fillRect(0,0,500,500);
    ctx.moveTo(x,y);
    ctx.bezierCurveTo(cpx1,cpy1,cpx2,cpy2,x2,y2);
    ctx.setLineDash([5,15]);
    ctx.stroke();
    ctx.strokeStyle = "black";
    ctx.lineDashOffset = offset;
    ctx.moveTo(x,y);
    ctx.bezierCurveTo(cpx1,cpy1,cpx2,cpy2,x2,y2);
    ctx.setLineDash([1000,1000]);
    ctx.stroke();

    offset += 2;
    console.log(ctx.lineDashOffset);
    if(offset<1000){
        requestAnimationFrame(() => {
            drawCurve(x,y,cpx1,cpy1,cpx2,cpy2,x2,y2,ctx)})   
    }
}

export default drawCurve