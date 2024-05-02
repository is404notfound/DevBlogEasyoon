import NextImage, { ImageProps } from 'next/image'

const Image = ({ style = {}, ...rest }: ImageProps) => <NextImage style={{ ...style }} {...rest} />

export default Image
