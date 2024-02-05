import NextImage, { ImageProps } from 'next/image'

const Image = ({ style = {}, ...rest }: ImageProps) => <NextImage style={{boxShadow: '2px 8px 10px gray', ...style }} {...rest} />

export default Image
