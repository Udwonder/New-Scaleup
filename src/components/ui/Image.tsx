import { useState, useState as useReactState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

export function Image({ src, alt, className, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`transition-all duration-500 ${loaded ? 'blur-0' : 'blur-sm'} ${className}`}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
}
