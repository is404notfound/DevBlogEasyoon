import Card from '@/components/Card'


const InfiniteScrollListLayout = ({ 
    posts
}) => {
    return (
        <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
                { posts.map(({title, description, image, url, note}, index) => (
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