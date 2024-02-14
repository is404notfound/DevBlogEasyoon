import { useEffect, useState } from 'react';
import RunningCatImage from 'public/static/images/running-cats.png';

function useCat() {
    const [cats, setCats] = useState<[]>([]);

    useEffect(() => {
        const img: HTMLImageElement = new Image();
        img.src = RunningCatImage.src;
        img.style.filter = 'invert(100%) !important';
        img.onload = ()=> {
            console.log('img loaded');
            addCat(img);
        }

    }, []);

    function createCat(img: HTMLImageElement, stageWidth: number) {
        const cat = {
          img: img,
          totalframe: 8,
          curFrame: 0,
          imgWidth: 112,
          imgHeight: 72,
          catWidth: 5,
          catHeight: 3,
          catWidthHalf: 56 / 2,
          x: stageWidth + 56,
          y: 0,
          speed: Math.random() * 2 + 1,
          fps: 5,
          fpsTime: 1000 / 5,
          time: null
        };
        
        return cat;
    }

    function addCat(img) {
        setCats([...cats, createCat(img, 100)])
    }

    return { createCat, cats }
}

export default useCat;