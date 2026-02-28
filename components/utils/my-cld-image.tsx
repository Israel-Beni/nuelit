"use client";

import { CldImage, CldImageProps } from "next-cloudinary";

export function MyCldImage(props: CldImageProps) {
  return <CldImage {...props} />;
}
