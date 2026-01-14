import { useEffect,useRef } from "react";




function drawCurve(x:number,y:number,cpx1:number,cpy1:number,cpx2:number,cpy2:number, ctx: CanvasRenderingContext2D){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.bezierCurveTo(cpx1,cpy1,cpx2,cpy2,x,y);
    ctx.setLineDash([5,15]);
    ctx.stroke();
}

export default drawCurve