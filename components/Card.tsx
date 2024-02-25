import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc = '', href = '#', buttonPath = '' }
: {
  title: string
  description: string
  imgSrc?: string
  href?: string
  buttonPath?: string
}) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <div>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        { buttonPath && (
          <Link
            href={buttonPath}
            className="text-base font-large leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            <button className="bg-white hover:bg-pink-400 text-gray-800 py-2 px-4 rounded items-center w-full ">
              <span>★ GO TO MY RELATED BLOG NOTE </span>
            </button>

          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
