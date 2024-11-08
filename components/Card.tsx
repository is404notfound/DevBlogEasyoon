import Button from './Button'
import Image from './Image'
import Link from './Link'
import BookIcon from '../public/static/icons/book.svg';
import NextIcon from '../public/static/icons/next.svg';
import styled from 'styled-components';
import NoImageSrc from '../public/static/images/no-image-book.avif';

const Card = ({ title, description = '', imgSrc = '', href = '#', buttonPath = '', isBadge=false, badge='' }
  : {
    title: string
    description?: string
    imgSrc?: string
    href?: string
    buttonPath?: string
    isBadge?: boolean
    badge?: string
  }) => (
  <div className="relative md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${imgSrc && 'h-full'} relative overflow-hidden rounded-xl bg-gray-700/80`}
    >
      {isBadge && (
        <Badge>
          {badge}
        </Badge>
      )}
      {!imgSrc ? (
        <NoImageContainer>
          <NoImageText> \(o_o)/ No Images for here </NoImageText>
          <Dimmed />
          <Image
            alt={title}
            src={NoImageSrc}
            className="object-cover object-center md:h-36 lg:h-48 transition-transform duration-300 transform hover:scale-110"
            width={544}
            height={306}
          />
        </NoImageContainer>
      ) :
        href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48 transition-transform duration-300 transform hover:scale-110"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48 transition-transform duration-300 transform hover:scale-110"
            width={544}
            height={306}
          />
        )}
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
        {buttonPath && (
          <div className="mt-8 flex flex-row justify-center">
            <Button
              type="tertiary"
              text="SEE MY RELATED POSTING"
              startIcon={<BookIcon />}
              endIcon={<NextIcon />}
              onClick={() => window.open(buttonPath, '_blank')}
            />
          </div>
        )}
      </div>
    </div>
  </div>
)

export default Card

const NoImageContainer = styled.div`
  position: relative;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }
`;

const Dimmed = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  `;

const NoImageText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: var(--Color-Grayscale-02);
    font-size: 1rem;
    white-space: nowrap;
  `;

  const Badge = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--Color-Retro-Pink-05);
  color: white;
  padding: 1rem 1rem;
  border-radius: 0 1rem 0 1rem;
  font-weight: bold;
  font-size: 1.1rem;
  z-index: 4;
`;