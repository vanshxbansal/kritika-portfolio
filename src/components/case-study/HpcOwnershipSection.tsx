"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type {
  OwnershipCardData,
  OwnershipIcon,
  OwnershipImage,
  OwnershipPersonaData,
  OwnershipSectionData,
} from "@/data/caseStudyTypes";
import {
  CASE_STUDY_SCROLL_OFFSET,
  CaseStudyReveal,
  CaseStudySectionHeading,
  CaseStudySurface,
  caseStudySectionClass,
} from "./CaseStudyReveal";
import { useCaseStudyTheme } from "./CaseStudyThemeContext";

type HpcOwnershipSectionProps = OwnershipSectionData;

type ActiveGallery = {
  cardTitle: string;
  images: OwnershipImage[];
  imageIndex: number;
  imageFit?: "cover" | "contain";
};

type ActivePersonas = {
  cardTitle: string;
  personas: OwnershipPersonaData[];
};

function getCardImages(item: OwnershipCardData): OwnershipImage[] {
  if (item.images?.length) return item.images;
  if (item.imageSrc) return [{ src: item.imageSrc, alt: item.imageAlt }];
  return [];
}

function OwnershipCardIcon({
  icon,
  color,
  className = "h-5 w-5",
}: {
  icon: OwnershipIcon;
  color: string;
  className?: string;
}) {
  const iconProps = {
    className,
    fill: "none",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "product":
      return (
        <svg viewBox="0 0 24 24" {...iconProps} aria-hidden>
          <path d="M4 14a8 8 0 1 1 16 0" />
          <path d="M8 14h8" />
          <path d="M12 6v8" />
          <path d="M9 20h6" />
          <path d="M10 17h4" />
        </svg>
      );
    case "requirements":
      return (
        <svg viewBox="0 0 24 24" {...iconProps} aria-hidden>
          <path d="M12 3l7 4v10l-7 4-7-4V7l7-4Z" />
          <path d="M9.5 12.5l1.6 1.6 3.7-4.2" />
        </svg>
      );
    case "documentation":
      return (
        <svg viewBox="0 0 24 24" {...iconProps} aria-hidden>
          <path d="M8 3h7l4 4v14H8z" />
          <path d="M15 3v5h4" />
          <path d="M5 7v14h10" />
          <path d="M11 12h5M11 16h4" />
        </svg>
      );
    case "ux":
      return (
        <svg viewBox="0 0 24 24" {...iconProps} aria-hidden>
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <path d="M9 7h6M9 11h6M9 15h3" />
          <path d="M16 16l2 2 3-4" />
        </svg>
      );
    case "logic":
      return (
        <svg viewBox="0 0 24 24" {...iconProps} aria-hidden>
          <path d="M12 3v7" />
          <path d="M8 10h8l2 4-6 7-6-7 2-4Z" />
          <path d="M5 14h14" />
        </svg>
      );
    case "uat":
      return (
        <svg viewBox="0 0 24 24" {...iconProps} aria-hidden>
          <circle cx="12" cy="12" r="7" />
          <path d="M12 5v3M12 16v3M5 12h3M16 12h3" />
          <path d="M12 12l4-4" />
        </svg>
      );
    case "enablement":
      return (
        <svg viewBox="0 0 24 24" {...iconProps} aria-hidden>
          <rect x="4" y="4" width="6" height="6" rx="1.5" />
          <rect x="14" y="4" width="6" height="6" rx="1.5" />
          <rect x="4" y="14" width="6" height="6" rx="1.5" />
          <rect x="14" y="14" width="6" height="6" rx="1.5" />
        </svg>
      );
  }
}

function OwnershipImagePlaceholder({ label }: { label: string }) {
  const theme = useCaseStudyTheme();

  return (
    <div
      className="flex h-40 w-full items-center justify-center rounded-xl border border-dashed px-4"
      style={{ borderColor: theme.primaryBorder, backgroundColor: theme.primaryLight }}
    >
      <p className="text-center font-display text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: theme.primary }}>
        {label}
      </p>
    </div>
  );
}

function PersonaMiniCard({ persona, index }: { persona: OwnershipPersonaData; index: number }) {
  return (
    <div className="min-w-0 rounded-lg border border-white/70 bg-white p-2 text-left shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
      <div className="flex items-center gap-2">
        <span
          className="grid h-6 w-6 shrink-0 place-items-center rounded-md font-display text-[10px] font-bold text-white"
          style={{ backgroundColor: persona.color }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0">
          <p className="truncate font-display text-[11px] font-semibold text-[#1e1e2f]">
            {persona.title}
          </p>
          <p className="truncate text-[9px] font-medium" style={{ color: persona.color }}>
            {persona.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

function PersonasArtifactPreview({
  personas,
  onOpen,
}: {
  personas: OwnershipPersonaData[];
  onOpen: () => void;
}) {
  const theme = useCaseStudyTheme();
  const visiblePersonas = personas.slice(0, 4);

  return (
    <button
      type="button"
      className="group relative h-40 w-full cursor-zoom-in overflow-hidden rounded-xl border p-3 text-left outline-none transition duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#E15A11]/60"
      style={{ borderColor: theme.primaryBorder, backgroundColor: theme.primaryLight }}
      onClick={onOpen}
      aria-label="Open personas gallery"
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/70 blur-2xl" />
      <div className="relative z-10 mb-2 flex items-center justify-between">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: theme.primary }}>
          Personas Artifact
        </p>
        <span className="rounded-full bg-white px-2.5 py-1 font-display text-[10px] font-bold shadow-sm" style={{ color: theme.primary }}>
          {personas.length} roles
        </span>
      </div>
      <div className="relative z-10 grid grid-cols-2 gap-2">
        {visiblePersonas.map((persona, index) => (
          <PersonaMiniCard key={persona.title} persona={persona} index={index} />
        ))}
      </div>
      <p className="relative z-10 mt-2 text-center text-[10px] font-semibold text-[#64748b]">
        Click to view all stakeholder personas
      </p>
    </button>
  );
}

function PersonaDetailCard({
  persona,
  index,
}: {
  persona: OwnershipPersonaData;
  index: number;
}) {
  return (
    <div className="flex min-h-[330px] flex-col rounded-2xl border border-[#e8edf3] bg-white p-5 shadow-[0_14px_32px_rgba(15,23,42,0.08)]">
      <div className="flex items-start gap-4">
        <span
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl font-display text-sm font-bold text-white"
          style={{ backgroundColor: persona.color }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-display text-xl font-semibold leading-tight text-[#1e1e2f]">
            {persona.title}
          </h3>
          <p className="mt-1 font-display text-sm font-semibold" style={{ color: persona.color }}>
            {persona.subtitle}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <p className="font-display text-sm font-semibold" style={{ color: persona.color }}>
          Key Responsibilities
        </p>
        <ul className="mt-2 flex flex-col gap-1.5">
          {persona.responsibilities.map((responsibility) => (
            <li key={responsibility} className="flex gap-2 text-xs leading-relaxed text-[#475569]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: persona.color }} />
              {responsibility}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 border-t border-[#e8edf3] pt-4 sm:grid-cols-2">
        <div>
          <p className="font-display text-xs font-semibold text-[#1e1e2f]">Access & Permissions</p>
          <p className="mt-1 text-xs leading-relaxed text-[#64748b]">{persona.permissions}</p>
        </div>
        <div>
          <p className="font-display text-xs font-semibold text-[#1e1e2f]">Goals</p>
          <p className="mt-1 text-xs leading-relaxed text-[#64748b]">{persona.goal}</p>
        </div>
      </div>

      <div className="mt-auto rounded-xl px-4 py-3" style={{ backgroundColor: `${persona.color}10` }}>
        <p className="font-display text-xs font-semibold" style={{ color: persona.color }}>
          Success Looks Like
        </p>
        <p className="mt-1 text-xs leading-relaxed text-[#475569]">{persona.success}</p>
      </div>
    </div>
  );
}

function PersonasLightbox({
  gallery,
  onClose,
}: {
  gallery: ActivePersonas;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-[#1b0f0a]/92 px-4 py-5 backdrop-blur-sm md:px-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${gallery.cardTitle} gallery`}
    >
      <div className="mb-4 flex items-center justify-between gap-4 text-white">
        <div>
          <p className="font-display text-xl font-semibold">{gallery.cardTitle}</p>
          <p className="mt-1 text-sm text-white/60">
            Stakeholder personas mapped from roles and responsibilities
          </p>
        </div>
        <button
          type="button"
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto rounded-2xl bg-[#f8fafc] p-4 md:p-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
          {gallery.personas.map((persona, index) => (
            <PersonaDetailCard key={persona.title} persona={persona} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function OwnershipCardPreview({
  item,
  onOpen,
}: {
  item: OwnershipCardData;
  onOpen: () => void;
}) {
  const images = getCardImages(item);
  const [imageError, setImageError] = useState(false);
  const isDocument = item.imageFit !== "cover";
  const extraCount = Math.max(images.length - 1, 0);
  const preview = images[0];

  if (!preview || imageError) {
    return (
      <OwnershipImagePlaceholder
        label={preview?.alt ?? item.imageAlt ?? `Add images for ${item.title}`}
      />
    );
  }

  return (
    <button
      type="button"
      className="group relative block h-40 w-full cursor-zoom-in overflow-hidden rounded-xl border border-[#e8edf3] bg-[#f4f6f9] text-left outline-none transition duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#E15A11]/60"
      onClick={onOpen}
      aria-label={`Open ${item.title} gallery${extraCount ? `, ${images.length} images` : ""}`}
    >
      <div className={`relative h-full w-full ${isDocument ? "p-2" : ""}`}>
        <Image
          src={preview.src}
          alt=""
          fill
          className={isDocument ? "object-contain object-center" : "object-cover"}
          sizes="(max-width: 768px) 280px, 340px"
          onError={() => setImageError(true)}
        />
      </div>

      {extraCount > 0 ? (
        <span className="absolute bottom-3 right-3 flex min-w-[52px] flex-col items-center justify-center rounded-lg bg-[#1b0f0a]/88 px-3 py-2 text-white shadow-lg">
          <span className="font-display text-lg font-semibold leading-none">+{extraCount}</span>
          <span className="mt-0.5 text-[9px] uppercase tracking-[0.1em] text-white/70">
            More
          </span>
        </span>
      ) : null}
    </button>
  );
}

function OwnershipGalleryLightbox({
  gallery,
  onClose,
  onChange,
}: {
  gallery: ActiveGallery;
  onClose: () => void;
  onChange: (imageIndex: number) => void;
}) {
  const theme = useCaseStudyTheme();
  const { cardTitle, images, imageIndex, imageFit } = gallery;
  const activeImage = images[imageIndex];
  const isDocument = imageFit !== "cover";
  const previousIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
  const nextIndex = imageIndex === images.length - 1 ? 0 : imageIndex + 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-[#1b0f0a]/92 px-4 py-5 backdrop-blur-sm md:px-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${cardTitle} image gallery`}
    >
      <div className="mb-4 flex items-center justify-between gap-4 text-white">
        <div>
          <p className="font-display text-xl font-semibold">{cardTitle}</p>
          <p className="mt-1 text-sm text-white/60">
            {activeImage.alt ?? `Image ${imageIndex + 1}`} · {imageIndex + 1} / {images.length}
          </p>
        </div>
        <button
          type="button"
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          onClick={onClose}
        >
          Close
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center">
        {images.length > 1 ? (
          <button
            type="button"
            className="absolute left-0 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-white/95 text-2xl shadow-xl transition hover:bg-white md:flex"
            style={{ color: theme.primary }}
            onClick={() => onChange(previousIndex)}
            aria-label="Previous image"
          >
            ‹
          </button>
        ) : null}

        <div className="relative h-[min(72vh,720px)] w-full max-w-5xl overflow-hidden rounded-2xl border border-[#f2d1bd] bg-white shadow-2xl">
          <div className={`relative h-full w-full ${isDocument ? "bg-[#f4f6f9] p-4 md:p-6" : "bg-[#f4f6f9]"}`}>
            <Image
              src={activeImage.src}
              alt={activeImage.alt ?? cardTitle}
              fill
              className={isDocument ? "object-contain object-center" : "object-contain"}
              sizes="100vw"
              priority
            />
          </div>
        </div>

        {images.length > 1 ? (
          <button
            type="button"
            className="absolute right-0 z-10 hidden h-12 w-12 items-center justify-center rounded-full bg-white/95 text-2xl shadow-xl transition hover:bg-white md:flex"
            style={{ color: theme.primary }}
            onClick={() => onChange(nextIndex)}
            aria-label="Next image"
          >
            ›
          </button>
        ) : null}
      </div>

      {images.length > 1 ? (
        <>
          <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
            <button
              type="button"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold"
              style={{ color: theme.primary }}
              onClick={() => onChange(previousIndex)}
            >
              Previous
            </button>
            <button
              type="button"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold"
              style={{ color: theme.primary }}
              onClick={() => onChange(nextIndex)}
            >
              Next
            </button>
          </div>

          <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {images.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                  index === imageIndex
                    ? "border-white bg-white"
                    : "border-white/20 text-white/65 hover:bg-white/10"
                }`}
                style={index === imageIndex ? { color: theme.primary } : undefined}
                onClick={() => onChange(index)}
              >
                {image.alt ?? `Image ${index + 1}`}
              </button>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function OwnershipCardTitle({
  item,
  primary,
  primaryLight,
}: {
  item: OwnershipCardData;
  primary: string;
  primaryLight: string;
}) {
  return (
    <div className="flex items-center justify-center gap-2.5">
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
        style={{ backgroundColor: primaryLight }}
        aria-hidden
      >
        <OwnershipCardIcon icon={item.icon} color={primary} className="h-5 w-5" />
      </span>
      <h3 className="font-display text-[15px] font-semibold leading-snug text-[#1e1e2f] md:text-base">
        {item.title}
      </h3>
    </div>
  );
}

function ProcessProgressRail({
  items,
  activeIndex,
  progress,
  primary,
}: {
  items: OwnershipCardData[];
  activeIndex: number;
  progress: number;
  primary: string;
}) {
  return (
    <div className="mb-6 rounded-2xl border border-[#e8edf3] bg-[#fbfcfd] px-4 py-4 md:mb-7 md:px-5">
      <div className="relative">
        <div className="absolute left-0 right-0 top-4 h-px bg-[#f1d7c8]" aria-hidden>
          <div
            className="h-full transition-[width] duration-150"
            style={{ width: `${progress * 100}%`, backgroundColor: primary }}
          />
        </div>

        <div className="relative grid gap-3" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            const isComplete = index < activeIndex;

            return (
              <div key={item.title} className="flex min-w-0 flex-col items-center gap-2 text-center">
                <span
                  className="grid h-8 w-8 place-items-center rounded-full border font-display text-[11px] font-bold transition-all"
                  style={{
                    backgroundColor: isActive || isComplete ? primary : "#fff",
                    borderColor: isActive || isComplete ? primary : "#f1d7c8",
                    color: isActive || isComplete ? "#fff" : primary,
                    boxShadow: isActive ? "0 8px 18px rgba(225,90,17,0.18)" : undefined,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`truncate font-display text-[11px] leading-tight md:text-xs ${
                    isActive ? "font-semibold text-[#1e1e2f]" : "font-medium text-[#64748b]"
                  }`}
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function OwnershipCard({
  item,
  onOpenGallery,
  onOpenPersonas,
  primary,
  primaryLight,
}: {
  item: OwnershipCardData;
  onOpenGallery: () => void;
  onOpenPersonas: () => void;
  primary: string;
  primaryLight: string;
}) {
  const images = getCardImages(item);

  return (
    <div className="flex w-[280px] shrink-0 flex-col gap-4 rounded-2xl border border-[#e8edf3] bg-[#fbfcfd] p-5 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)] sm:w-[300px] md:min-h-[320px] md:p-6 lg:w-[28vw] xl:w-[360px] 2xl:w-[380px]">
      {item.personas?.length ? (
        <PersonasArtifactPreview personas={item.personas} onOpen={onOpenPersonas} />
      ) : images.length > 0 ? (
        <OwnershipCardPreview item={item} onOpen={onOpenGallery} />
      ) : (
        <OwnershipImagePlaceholder label={`${item.title} artifact`} />
      )}

      <div className="flex flex-1 flex-col gap-2">
        <OwnershipCardTitle item={item} primary={primary} primaryLight={primaryLight} />
        <p className="font-display text-sm leading-[1.55] text-[#475569]">{item.body}</p>
      </div>
    </div>
  );
}

export function HpcOwnershipSection({
  title = "My Ownership",
  subtitle,
  footer,
  items,
}: HpcOwnershipSectionProps) {
  const theme = useCaseStudyTheme();
  const [activeGallery, setActiveGallery] = useState<ActiveGallery | null>(null);
  const [activePersonas, setActivePersonas] = useState<ActivePersonas | null>(null);
  const [translateX, setTranslateX] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const openGallery = (item: OwnershipCardData, imageIndex = 0) => {
    const images = getCardImages(item);
    if (!images.length) return;

    setActiveGallery({
      cardTitle: item.title,
      images,
      imageIndex,
      imageFit: item.imageFit,
    });
  };

  const openPersonas = (item: OwnershipCardData) => {
    if (!item.personas?.length) return;

    setActivePersonas({
      cardTitle: item.title,
      personas: item.personas,
    });
  };
  const activeProcessIndex = Math.min(
    items.length - 1,
    Math.max(0, Math.round(progress * (items.length - 1))),
  );

  useEffect(() => {
    const syncHorizontalScroll = () => {
      const section = sectionRef.current;
      const sticky = stickyRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!section || !sticky || !viewport || !track) return;

      const maxTranslate = Math.max(track.scrollWidth - viewport.clientWidth, 0);
      const scrollDistance = Math.max(section.offsetHeight - sticky.offsetHeight, 1);
      const sectionTop = section.getBoundingClientRect().top;
      const currentProgress = Math.min(
        Math.max((CASE_STUDY_SCROLL_OFFSET - sectionTop) / scrollDistance, 0),
        1,
      );

      setProgress(currentProgress);
      setTranslateX(-maxTranslate * currentProgress);
    };

    syncHorizontalScroll();
    window.addEventListener("scroll", syncHorizontalScroll, { passive: true });
    window.addEventListener("resize", syncHorizontalScroll);

    return () => {
      window.removeEventListener("scroll", syncHorizontalScroll);
      window.removeEventListener("resize", syncHorizontalScroll);
    };
  }, [items.length]);

  return (
    <section className={`${caseStudySectionClass} flex flex-col`}>
      <CaseStudyReveal>
        <div
          ref={sectionRef}
          className="relative"
          style={{ height: `calc(100vh + ${Math.max(items.length - 3, 1) * 360}px)` }}
        >
          <div
            ref={stickyRef}
            className="sticky"
            style={{ top: CASE_STUDY_SCROLL_OFFSET }}
          >
            <CaseStudySurface className="overflow-hidden">
              <div className="mb-6">
                <CaseStudySectionHeading
                  title={title}
                  subtitle={
                    subtitle ? (
                      <span className="font-medium text-[#475569]">“{subtitle}”</span>
                    ) : undefined
                  }
                />
              </div>

              <ProcessProgressRail
                items={items}
                activeIndex={activeProcessIndex}
                progress={progress}
                primary={theme.primary}
              />

              <div ref={viewportRef} className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

                <div
                  ref={trackRef}
                  className="flex gap-5 pb-2 transition-transform duration-75 ease-out md:gap-6"
                  style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
                >
                  {items.map((item, index) => (
                    <OwnershipCard
                      key={`${item.title}-${index}`}
                      item={item}
                      primary={theme.primary}
                      primaryLight={theme.primaryLight}
                      onOpenGallery={() => openGallery(item)}
                      onOpenPersonas={() => openPersonas(item)}
                    />
                  ))}
                </div>
              </div>

              {footer ? (
                <div className="mt-5 rounded-xl border border-[#f1d7c8] bg-[#fff9f4] px-4 py-3 text-center">
                  <p className="font-display text-sm font-medium leading-relaxed text-[#475569]">
                    {footer}
                  </p>
                </div>
              ) : null}
            </CaseStudySurface>
          </div>
        </div>
      </CaseStudyReveal>

      {activeGallery ? (
        <OwnershipGalleryLightbox
          gallery={activeGallery}
          onClose={() => setActiveGallery(null)}
          onChange={(imageIndex) =>
            setActiveGallery((current) =>
              current ? { ...current, imageIndex } : current,
            )
          }
        />
      ) : null}

      {activePersonas ? (
        <PersonasLightbox
          gallery={activePersonas}
          onClose={() => setActivePersonas(null)}
        />
      ) : null}
    </section>
  );
}
