import Card from '@/components/Card'
import { useEffect, useState } from 'react';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';


const InfiniteScrollListLayout = () => {
    const { itemList } = useInfiniteScroll();
  
    useEffect(() => {}, [itemList]);

    return (
        <>
        <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
                { itemList.map(({title, description, image, url, note}, index) => (
                    <Card
                        key={`${index}_${title}`}
                        title={`#${index + 1}. ${title}`}
                        description={description}
                        imgSrc={image}
                        href={url}
                        buttonPath={note}
                        isBadge={true}
                        badge={`#${index + 1}`}
                    />
                ))}
            </div>
        </div>
        </>
    )
}

export default InfiniteScrollListLayout