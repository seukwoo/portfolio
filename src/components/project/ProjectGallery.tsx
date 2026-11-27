"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLabels } from "@/i18n/client";
import type { ImageAsset } from "@/types/content";

type Props = {
  images: ImageAsset[];
  title: string;
  /** Rendered (on the server) as the second slide, right after the first image — e.g. the project cover. */
  extraSlide?: React.ReactNode;
};

/** Every slide gets the same image frame and caption space, so the arrows and dots stay put whatever the image's shape. */
const FRAME = "mx-auto flex h-[62vw] max-h-[70vh] items-center justify-center px-12 sm:h-[460px] lg:h-[560px]";
const CAPTION = "mx-auto mt-3 min-h-[2.75rem] max-w-3xl px-12 text-center text-sm text-muted";

/** Screenshot carousel. Slides are not links, so a missed click on the arrows never opens a new tab. */
export function ProjectGallery({ images, title, extraSlide }: Props) {
  const labels = useLabels();
  if (images.length === 0) return null;
  return (
    <div className="gallery overflow-hidden rounded-2xl border border-line bg-surface-2">
      <Swiper
        modules={[Navigation, Pagination, Keyboard, A11y]}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
      >
        {images.flatMap((img, i) => [
          <SwiperSlide key={img.src} className="pt-4 pb-10">
            <div className={FRAME}>
              <Image
                src={img.src}
                alt={labels.projects.screenshotAlt(title, i + 1, images.length)}
                width={img.width}
                height={img.height}
                priority={i === 0}
                // Off-screen slides sit beside the visible one; lazy loading may never start for them (e.g. Safari).
                loading={i === 0 ? undefined : "eager"}
                sizes="(min-width: 1152px) 1104px, 100vw"
                className="h-auto max-h-full w-auto max-w-full object-contain"
              />
            </div>
            <p className={CAPTION}>{img.caption}</p>
          </SwiperSlide>,
          ...(i === 0 && extraSlide
            ? [
                <SwiperSlide key="extra" className="pt-4 pb-10">
                  <div className={FRAME}>{extraSlide}</div>
                  <p className={CAPTION} />
                </SwiperSlide>,
              ]
            : []),
        ])}
      </Swiper>
    </div>
  );
}
