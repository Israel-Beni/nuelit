"use client";
import { CldImage } from "next-cloudinary";

export function MyCldImage({
  src,
  alt,
  width,
  height,
  className,
  sizes,
  ...props
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  [key: string]: any;
}) {
  return (
    <CldImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      {...props}
    />
  );
}