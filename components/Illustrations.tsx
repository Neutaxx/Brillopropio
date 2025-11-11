
import React from 'react';

interface SvgProps {
  className?: string;
  style?: React.CSSProperties;
}

export const HappyStar: React.FC<SvgProps> = ({ className, style }) => (
  // FIX: Added style prop to allow for inline styling.
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 2L61.2 25.5L87.5 29.8L68.8 48L73 74.5L50 62L27 74.5L31.2 48L12.5 29.8L38.8 25.5L50 2Z" stroke="#A082C0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="42" cy="48" r="3" fill="#A082C0"/>
    <circle cx="58" cy="48" r="3" fill="#A082C0"/>
    <path d="M45 58 Q50 63 55 58" stroke="#A082C0" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const WinkingStar: React.FC<SvgProps> = ({ className, style }) => (
  // FIX: Added style prop to allow for inline styling.
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 2L61.2 25.5L87.5 29.8L68.8 48L73 74.5L50 62L27 74.5L31.2 48L12.5 29.8L38.8 25.5L50 2Z" stroke="#2F4858" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M40 50 H 48" stroke="#2F4858" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="60" cy="48" r="3.5" fill="#2F4858"/>
    <path d="M45 60 Q50 65 55 60" stroke="#2F4858" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const AngryStar: React.FC<SvgProps> = ({ className, style }) => (
  // FIX: Added style prop to allow for inline styling.
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 2L61.2 25.5L87.5 29.8L68.8 48L73 74.5L50 62L27 74.5L31.2 48L12.5 29.8L38.8 25.5L50 2Z" stroke="#E76F51" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="42" cy="50" r="3" fill="#E76F51"/>
    <circle cx="58" cy="50" r="3" fill="#E76F51"/>
    <path d="M45 45 L 40 42" stroke="#E76F51" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M55 45 L 60 42" stroke="#E76F51" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M45 62 Q50 58 55 62" stroke="#E76F51" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

export const SunStar: React.FC<SvgProps> = ({ className, style }) => (
  // FIX: Added style prop to allow for inline styling.
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50,30 A20,20 0 1,1 50,70 A20,20 0 1,1 50,30 Z" stroke="#2F4858" strokeWidth="2" />
    <circle cx="44" cy="50" r="2" fill="#2F4858" />
    <circle cx="56" cy="50" r="2" fill="#2F4858" />
    <path d="M47 57 Q50 60 53 57" stroke="#2F4858" strokeWidth="1.5" strokeLinecap="round"/>
    {[...Array(16)].map((_, i) => (
      <line key={i} x1="50" y1="50" x2={50 + 35 * Math.cos(i * 2 * Math.PI / 16)} y2={50 + 35 * Math.sin(i * 2 * Math.PI / 16)} stroke="#2F4858" strokeWidth="1.5" strokeLinecap="round" />
    ))}
  </svg>
);

export const ScribbleCircle: React.FC<SvgProps> = ({ className, style }) => (
  // FIX: Added style prop to allow for inline styling.
  <svg viewBox="0 0 100 100" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M66.42,26.16c-11.8-9.57-29.35-6.52-38.92,5.28s-6.52,29.35,5.28,38.92,29.35,6.52,38.92-5.28" stroke="#E76F51" strokeWidth="3" strokeLinecap="round"/>
    <path d="M72.2,35.8c-9.28-11.14-26.3-13.43-37.44-4.15s-13.43,26.3-4.15,37.44,26.3,13.43,37.44,4.15" stroke="#E76F51" strokeWidth="3" strokeLinecap="round"/>
    <path d="M60.44,29.93c-11.8-9.57-29.35-6.52-38.92,5.28s-6.52,29.35,5.28,38.92,29.35,6.52,38.92-5.28" stroke="#E76F51" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);
