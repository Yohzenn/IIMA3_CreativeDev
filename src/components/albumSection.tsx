import { initCanvas } from "../services/canvas";
import drawCurve from "../services/cover";
import { useEffect,useRef } from "react";

function Album() {
    const size = 500;
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx= initCanvas(canvas);

        ctx.strokeStyle = "violet";
        drawCurve(size*0.2,size,size*0.2+25,size-100,size-50,size-150,size,size-100,ctx);
    },[])

        return <canvas ref={canvasRef} width={size} height={size} />;
}

export default Album