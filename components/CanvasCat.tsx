import { useEffect, useRef, useState } from "react";
import RunningCatImage from 'public/static/images/running-cats.png';

// todo : interface cat
const CanvasCat = ()=> {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [img, setImg] = useState<HTMLImageElement | null>(null);


    useEffect(() => {
        const img: HTMLImageElement = new Image();
        img.src = RunningCatImage.src;
        img.onload = () => setImg(img);
    }, []);

    useEffect(() => {
        if (!img) return;
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        // 2d로 그래픽을 그리고 조작하기 위한 메서드와 속성을 포함하는 렌더링이 될 context 객체를 생성
        if (!canvas) return;
        const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d'); 
        const cat = {
            img,
            totalframe: 8,
            curFrame: 0,
            imgWidth: 112,
            imgHeight: 72,
            catWidth: 5,
            catHeight: 3,
            catWidthHalf: 56 / 2,
            x: 56,
            y: 0,
            speed: Math.random() * 2 + 1,
            fps: 5,
            fpsTime: 1000 / 5,
            time: null
        };
        setTimeout(() =>{
            createCat(ctx, cat);
        }, 1000);
    }, [img]);

    function createCat(ctx, cat) {
        const startPostionX = 800;
        const startPostionY = 200 + Math.random() * 1000;

        ctx.drawImage(cat.img, 0, 0, cat.imgWidth, cat.imgHeight, startPostionX, startPostionY, 100, 100);
        moveCat(cat, ctx, startPostionX, startPostionY);
    }

    function moveCat(cat, ctx, positionX, positionY) {
        const startFrame = 0;
        const endFrame = 9;
        let intervalX = 10;
        let intervalY = 3;

        let frame = startFrame;
        let interval = setInterval(() => {

            ctx.clearRect(positionX, positionY, 100, 100);

            frame >= endFrame ? frame = 0 : frame += 1;

            positionX -= intervalX * (frame + 1); // 0이 아닌 1부터 시작하도록(0일 경우 위치가 고정)
            positionY -= intervalY * (frame + 1);

            updateImage(ctx, cat, frame, positionX, positionY);
            
            if (positionX < -90 || positionY < -90) {
                clearInterval(interval);
                createCat(ctx, cat);
            }
        }, 400);
    }

    function updateImage(ctx, cat, frame: number, destinationX: number, destinationY: number) {
        ctx.save();
        ctx.drawImage(
          cat.img,
          cat.imgWidth * frame, 
          0,
          cat.imgWidth,
          cat.imgHeight,
          destinationX,
          destinationY,
          100,
          100
        );

        ctx.restore();
      }

    return (
        <div style={{ position: 'fixed', bottom: 0, width: '100%', height: '100%', zIndex: 1 }}>
            <canvas ref={canvasRef} width='1000' height={'985'} color={'yellow'} ></canvas> /** HTML5내에 그림을 그리기 위한 영역 */
        </div>
    )
}

export default CanvasCat;
