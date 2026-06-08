type SectionHeadingProps = {
  label: string;
  icon: "star" | "leaf";
};

function StarIcon() {
  return (
    <svg viewBox="0 0 256 256" className="h-5 w-5 fill-[#6536eb]">
      <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Z" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 256 256" className="h-5 w-5 fill-[#6536eb]">
      <path d="M232,32a8,8,0,0,0-8-8c-44.08,0-89.31,49.71-114.43,82.63A60,60,0,0,0,32,164c0,30.88-19.54,44.73-20.47,45.37A8,8,0,0,0,16,224H92a60,60,0,0,0,57.37-77.57C182.3,121.31,232,76.08,232,32Z" />
    </svg>
  );
}

export function SectionHeading({ label, icon }: SectionHeadingProps) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-[#6536eb]/15 bg-white/80 px-4 py-2 shadow-[0_14px_34px_rgba(101,54,235,0.08)] backdrop-blur">
      {icon === "star" ? <StarIcon /> : <LeafIcon />}
      <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-[#6536eb]">
        {label}
      </p>
    </div>
  );
}
