type IconProps = { name: string; className?: string };
type DoodleProps = { className?: string };

const s = (aria: string) => ({ role: "img", "aria-label": aria } as const);

export function SunDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} {...s("sun doodle")}>
      <circle cx="32" cy="32" r="15" fill="#FFD35C" />
      <g stroke="#FFD35C" strokeWidth="4" strokeLinecap="round">
        <line x1="32" y1="6" x2="32" y2="14" />
        <line x1="32" y1="50" x2="32" y2="58" />
        <line x1="6" y1="32" x2="14" y2="32" />
        <line x1="50" y1="32" x2="58" y2="32" />
        <line x1="14" y1="14" x2="19" y2="19" />
        <line x1="45" y1="45" x2="50" y2="50" />
        <line x1="14" y1="50" x2="19" y2="45" />
        <line x1="45" y1="19" x2="50" y2="14" />
      </g>
      <circle cx="27" cy="29" r="2.4" fill="#8B5A2B" />
      <circle cx="37" cy="29" r="2.4" fill="#8B5A2B" />
      <path d="M26 37 q6 5 12 0" stroke="#8B5A2B" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function CloudDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 40" className={className} {...s("cloud doodle")}>
      <g fill="#BFE3FF">
        <circle cx="20" cy="26" r="11" />
        <circle cx="36" cy="20" r="14" />
        <circle cx="50" cy="27" r="10" />
      </g>
      <rect x="14" y="27" width="42" height="10" rx="5" fill="#BFE3FF" />
    </svg>
  );
}

export function StarDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...s("star doodle")}>
      <path d="M16 2 L20 12 L31 13 L23 21 L25 31 L16 25 L7 31 L9 21 L1 13 L12 12 Z" fill="#FFD35C" />
    </svg>
  );
}

export function BalloonDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 64" className={className} {...s("balloon doodle")}>
      <ellipse cx="24" cy="22" rx="16" ry="19" fill="#FF96BF" />
      <path d="M24 41 L22 52 L26 52 Z" fill="#FF96BF" />
      <line x1="24" y1="52" x2="24" y2="60" stroke="#8B5A2B" strokeWidth="1.5" />
      <path d="M20 18 q4 -6 8 0" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function RainbowDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 64 40" className={className} {...s("rainbow doodle")}>
      <path d="M6 36 a26 26 0 0 1 52 0" stroke="#FF96BF" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M14 36 a18 18 0 0 1 36 0" stroke="#FFD35C" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M22 36 a10 10 0 0 1 20 0" stroke="#79DE9B" strokeWidth="7" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function TreeDoodle({ className }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 56" className={className} {...s("tree doodle")}>
      <rect x="21" y="34" width="6" height="18" rx="3" fill="#8B5A2B" />
      <circle cx="24" cy="20" r="15" fill="#79DE9B" />
      <circle cx="15" cy="26" r="8" fill="#C8F5D8" />
      <circle cx="33" cy="26" r="8" fill="#C8F5D8" />
    </svg>
  );
}

const ICON_PATHS: Record<string, React.ReactNode> = {
  art: (
    <>
      <circle cx="10" cy="10" r="6" fill="#FF96BF" />
      <circle cx="18" cy="16" r="5" fill="#FFD35C" />
      <circle cx="8" cy="18" r="4" fill="#7CC4F5" />
      <rect x="16" y="20" width="6" height="2" rx="1" fill="#8B5A2B" />
    </>
  ),
  book: (
    <>
      <path d="M3 4 h14 v16 h-14 z" fill="#7CC4F5" />
      <path d="M17 4 h4 v16 h-4 z" fill="#FF96BF" />
      <line x1="5" y1="7" x2="15" y2="7" stroke="#fff" strokeWidth="1.6" />
      <line x1="5" y1="10" x2="15" y2="10" stroke="#fff" strokeWidth="1.6" />
      <line x1="5" y1="13" x2="15" y2="13" stroke="#fff" strokeWidth="1.6" />
    </>
  ),
  music: (
    <>
      <circle cx="8" cy="18" r="4" fill="#B79CF5" />
      <path d="M12 18 L22 15 L22 6 L12 9 Z" fill="#B79CF5" />
      <line x1="22" y1="6" x2="22" y2="18" stroke="#B79CF5" strokeWidth="2.4" />
    </>
  ),
  leaf: (
    <>
      <path d="M3 21 Q11 5 23 3 Q21 15 7 21 Z" fill="#79DE9B" />
      <line x1="4" y1="22" x2="22" y2="4" stroke="#8B5A2B" strokeWidth="1.4" />
    </>
  ),
  ball: (
    <>
      <circle cx="12" cy="12" r="9" fill="#FFD35C" />
      <path d="M12 3 a9 9 0 0 0 0 18" fill="none" stroke="#8B5A2B" strokeWidth="1.4" />
      <line x1="3" y1="8" x2="21" y2="16" stroke="#8B5A2B" strokeWidth="1.4" />
      <line x1="3" y1="16" x2="21" y2="8" stroke="#8B5A2B" strokeWidth="1.4" />
    </>
  ),
  flag: (
    <>
      <line x1="4" y1="3" x2="4" y2="23" stroke="#8B5A2B" strokeWidth="2" />
      <path d="M6 3 h12 l-2.4 4 2.4 4 h-12 z" fill="#FF96BF" />
    </>
  ),
  blocks: (
    <>
      <rect x="3" y="12" width="9" height="9" rx="2" fill="#7CC4F5" />
      <rect x="10" y="7" width="9" height="9" rx="2" fill="#FFD35C" />
      <rect x="17" y="13" width="6" height="6" rx="2" fill="#79DE9B" />
      <text x="5.6" y="19.6" fontSize="6" fontWeight="700" fill="#fff">A</text>
      <text x="12.6" y="14.6" fontSize="6" fontWeight="700" fill="#fff">B</text>
      <text x="18.6" y="17.6" fontSize="4.5" fontWeight="700" fill="#fff">C</text>
    </>
  ),
  flower: (
    <>
      <circle cx="9" cy="7" r="3.4" fill="#FF96BF" />
      <circle cx="15" cy="7" r="3.4" fill="#FF96BF" />
      <circle cx="12" cy="11" r="3.4" fill="#FFD35C" />
      <circle cx="12" cy="15" r="2.6" fill="#8B5A2B" />
      <line x1="12" y1="18" x2="12" y2="23" stroke="#79DE9B" strokeWidth="2" />
    </>
  ),
  tv: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" fill="#7CC4F5" />
      <path d="M9 4 L12 7 L15 4" fill="none" stroke="#8B5A2B" strokeWidth="1.6" />
      <circle cx="9" cy="11" r="3" fill="#fff" />
      <line x1="14" y1="10" x2="19" y2="10" stroke="#fff" strokeWidth="1.6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 L21 6 v7 c0 5 -4 8 -9 10 c-5 -2 -9 -5 -9 -10 V6 Z" fill="#79DE9B" />
      <path d="M8 12 l3 3 l6 -6" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  car: (
    <>
      <path d="M3 14 h18 v5 H3 Z" fill="#7CC4F5" />
      <path d="M7 10 L12 6 L17 10 Z" fill="#FFD35C" />
      <circle cx="8" cy="19" r="2.4" fill="#4A3B2A" />
      <circle cx="16" cy="19" r="2.4" fill="#4A3B2A" />
    </>
  ),
  phone: (
    <path d="M7 2 h10 l1 3 -3 2 -1 -1 a9 9 0 0 1 -6 0 l-1 1 -3 -2 z" fill="#79DE9B" />
  ),
  mail: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" fill="#7CC4F5" />
      <path d="M2 6 l10 8 l10 -8" stroke="#fff" strokeWidth="1.6" fill="none" />
    </>
  ),
  facebook: (
    <path
      d="M13 3 h6 v4 h-4 v2 h4 l-1 4 h-3 v9 h-4 v-9 h-3 v-4 h3 z"
      fill="#7CC4F5"
    />
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" fill="#FF96BF" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="16.5" cy="7.5" r="1.3" fill="#fff" />
    </>
  ),
  play: (
    <circle cx="12" cy="12" r="9" fill="#FFD35C" />
  ),
  check: (
    <path d="M4 12 l5 5 l11 -11" stroke="#79DE9B" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  ),
  smile: (
    <>
      <circle cx="12" cy="12" r="9" fill="#FFD35C" />
      <circle cx="9" cy="10" r="1.4" fill="#4A3B2A" />
      <circle cx="15" cy="10" r="1.4" fill="#4A3B2A" />
      <path d="M8 14 q4 4 8 0" stroke="#4A3B2A" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </>
  ),
  doc: (
    <>
      <path d="M5 2 h10 l4 4 v16 h-14 z" fill="#FFE9A8" />
      <line x1="8" y1="8" x2="16" y2="8" stroke="#8B5A2B" strokeWidth="1.4" />
      <line x1="8" y1="12" x2="16" y2="12" stroke="#8B5A2B" strokeWidth="1.4" />
      <line x1="8" y1="16" x2="13" y2="16" stroke="#8B5A2B" strokeWidth="1.4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 2 a8 8 0 0 1 8 8 c0 6 -8 13 -8 13 s-8 -7 -8 -13 a8 8 0 0 1 8 -8 Z" fill="#FF96BF" />
      <circle cx="12" cy="10" r="3" fill="#fff" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" fill="#E3D5FF" />
      <line x1="12" y1="12" x2="12" y2="6" stroke="#4A3B2A" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="12" y1="12" x2="16" y2="14" stroke="#4A3B2A" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  slide: (
    <>
      <path d="M5 8 l6 12 h9" stroke="#7CC4F5" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="5" y1="8" x2="5" y2="21" stroke="#8B5A2B" strokeWidth="3" strokeLinecap="round" />
      <rect x="4" y="20" width="14" height="3" rx="1.5" fill="#FF96BF" />
    </>
  ),
};

export function DoodleIcon({ name, className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...s(`${name} icon`)} aria-hidden="false">
      {ICON_PATHS[name] ?? ICON_PATHS.smile}
    </svg>
  );
}