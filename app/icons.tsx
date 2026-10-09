import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps: IconProps = {
  viewBox: "0 0 24 24",
  width: 22,
  height: 22,
  fill: "currentColor",
  "aria-hidden": true,
};

export function SoundOnIcon(props: IconProps) {
  return (
    <svg {...baseProps} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
      <path d="M15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14" />
    </svg>
  );
}

export function SoundOffIcon(props: IconProps) {
  return (
    <svg {...baseProps} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 5 6 9H3v6h3l5 4V5Z" />
      <path d="m16 9 6 6m0-6-6 6" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M12 .7A11.3 11.3 0 0 0 8.4 22.72c.57.1.78-.25.78-.55v-2.16c-3.18.7-3.85-1.36-3.85-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.54-.29-5.21-1.27-5.21-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.11 1.17A10.8 10.8 0 0 1 12 6.01c.96 0 1.93.13 2.84.38 2.15-1.48 3.11-1.17 3.11-1.17.62 1.57.23 2.73.11 3.02.73.8 1.18 1.82 1.18 3.07 0 4.39-2.68 5.36-5.23 5.64.41.36.78 1.06.78 2.13v3.09c0 .3.21.66.79.55A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5.34 3.5a2.34 2.34 0 1 1 0 4.68 2.34 2.34 0 0 1 0-4.68ZM3.3 9.93h4.08V21H3.3V9.93Zm6.62 0h3.91v1.52h.06c.54-1.03 1.88-2.12 3.87-2.12 4.14 0 4.9 2.73 4.9 6.28V21h-4.08v-4.78c0-1.14-.02-2.61-1.59-2.61-1.6 0-1.84 1.24-1.84 2.53V21h-4.08V9.93Z" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M23.5 6.2a3.04 3.04 0 0 0-2.14-2.15C19.47 3.54 12 3.54 12 3.54s-7.47 0-9.36.51A3.04 3.04 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.04 3.04 0 0 0 2.14 2.15c1.89.51 9.36.51 9.36.51s7.47 0 9.36-.51a3.04 3.04 0 0 0 2.14-2.15A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.6 15.64V8.36L15.82 12 9.6 15.64Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.15 1.5a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.5 22H3.38l7.25-8.29L3 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.72L8.46 4.05H6.62L17.8 19.84Z" />
    </svg>
  );
}
