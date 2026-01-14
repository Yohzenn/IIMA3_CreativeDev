import drawCurve from "../services/cover";
import { width,height } from "../services/cover";

function Album() {

    drawCurve(width*0.2,height,width*0.2+25,height-50,width-50,height-50);

    return (
        <>
            <canvas id="canvas"></canvas>
        </>
    )
}

export default Album