import { useEffect, useState } from 'react';

const useInfiniteScroll = () => {
    const [posts, setPosts] = useState<any[]>([]);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrolledHeight = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const isBottom = scrolledHeight + windowHeight >= documentHeight;
    
            if (isBottom) {
                console.log('bottom');
                // TODO :: infinite scrtoll 구현하기 (+ recoil)

            }
        });
    }, []);

    useEffect(() => {
        console.log('posts:', posts);
    }, [posts]);

    return { posts, setPosts }
}

export default useInfiniteScroll;