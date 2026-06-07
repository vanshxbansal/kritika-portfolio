export const PROCESS_EASE = [0.44, 0, 0.56, 1] as const;

export function ProcessPhaseIcon({ index, color }: { index: number; color: string }) {
  const className = "h-5 w-5";

  const icons = [
    <svg key="0" viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
    </svg>,
    <svg key="1" viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
    </svg>,
    <svg key="2" viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
      <path d="M12 2l2.5 4.5 5 .8-3.6 3.5.9 5.1-4.5-2.3-4.5 2.3.9-5.1L4.5 7.3l5-.8L12 2z" />
    </svg>,
    <svg key="3" viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2} overflow="visible">
      <path d="M12 4.5l1.8 5.4h5.7l-4.6 3.6 1.7 5.5-4.6-2.8-4.6 2.8 1.7-5.5-4.6-3.6h5.7L12 4.5z" strokeLinejoin="round" />
    </svg>,
    <svg key="4" viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
      <path d="M10 3h4l1 7H9l1-7z" />
      <path d="M8 10h8v8a2 2 0 01-2 2h-4a2 2 0 01-2-2v-8z" />
    </svg>,
    <svg key="5" viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth={2}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>,
  ];

  return icons[index] ?? icons[0];
}
