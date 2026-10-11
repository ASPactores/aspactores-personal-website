import React, { type ImgHTMLAttributes } from 'react'

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src?: string | null
  alt?: string
  fill?: boolean
  priority?: boolean
}

export default function Image({
  src,
  alt = '',
  className = '',
  fill,
  priority,
  style,
  ...props
}: ImageProps) {
  const combinedStyle: React.CSSProperties = fill
    ? {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        ...style,
      }
    : { ...style }

  return (
    <img
      src={src || ''}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      style={combinedStyle}
      {...props}
    />
  )
}
