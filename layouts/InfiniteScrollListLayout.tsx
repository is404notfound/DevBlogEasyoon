import Card from '@/components/Card'
import { useEffect } from 'react';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

const InfiniteScrollListLayout = () => {
    const { itemList } = useInfiniteScroll();
    useEffect(() => {}, [itemList]);
    return (
        <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
                { itemList.map(({title, description, image, url, note}, index) => (
                    <Card
                        key={`${index}_${title}`}
                        title={title}
                        description={description}
                        imgSrc={image}
                        href={url}
                        buttonPath={note}
                    />
                ))}
            </div>
        </div>
    )
}

export default InfiniteScrollListLayout