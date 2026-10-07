"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { labels } from "@/content/labels";
import type { ImageAsset } from "@/types/content";

type Props = {
  images: ImageAsset[];
  title: string;
  /** Rendered (on the server) as the second slide, right after the first image — e.g. the project cover. */
  extraSlide?: React.ReactNode;
};

/** Screenshot carousel; each image slide links to the full-size image. */
export function ProjectGallery({ images, title, extraSlide }: Props) {
  if (images.length === 0) return null;
  return (
    <div className="gallery overflow-hidden rounded-2xl border border-line bg-surface-2">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, A11y]}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        autoHeight
      >
        {images.flatMap((img, i) => [
          <SwiperSlide key={img.src} className="pb-10">
            <a href={img.src} target="_blank" rel="noopener noreferrer" className="block">
              <Image
                src={img.src}
                alt={labels.projects.screenshotAlt(title, i + 1, images.length)}
                width={img.width}
                height={img.height}
                priority={i === 0}
                sizes="(min-width: 1152px) 1104px, 100vw"
                className="mx-auto h-auto max-h-[70vh] w-auto max-w-full object-contain"
              />
            </a>
          </SwiperSlide>,
          ...(i === 0 && extraSlide
            ? [
                <SwiperSlide key="extra" className="pb-10">
                  {extraSlide}
                </SwiperSlide>,
              ]
            : []),
        ])}
      </Swiper>
    </div>
  );
}
