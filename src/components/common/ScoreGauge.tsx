"use client";

import { useRef } from "react";

interface ScoreGaugeProps {
  value: number;
  max?: number;
  size?: number;
  thickness?: number;
  label?: string;
  sub?: string;
  gradient?: string[];
  track?: string;
  valueColor?: string;
  labelColor?: string;
  font?: string;
}

/**
 * ~270° arc gauge that fills to value/max. Rendered filled immediately —
 * the SVG arc is drawn statically rather than animated.
 */
export default function ScoreGauge({
  value,
  max = 10,
  size = 220,
  thickness = 16,
  label,
  sub,
  gradient,
  track = "rgba(0,0,0,0.08)",
  valueColor = "#111",
  labelColor,
  font,
}: ScoreGaugeProps) {
  const sweep = 270; // degrees of visible arc
  const startAngle = 135; // start angle (bottom-left)
  const r = (size - thickness) / 2;
  const cc = size / 2;
  const circ = 2 * Math.PI * r;
  const arcLen = circ * (sweep / 360);
  const gid = useRef("g" + Math.random().toString(36).slice(2, 8)).current;
  const frac = Math.max(0, Math.min(1, value / max));
  const stops = gradient || ["#3da8d8", "#3da8d8"];

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size * 0.92,
        fontFamily: font,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: `rotate(${startAngle}deg)` }}
      >
        <defs>
          <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
            {stops.map((s, i) => (
              <stop
                key={i}
                offset={`${(i / (stops.length - 1)) * 100}%`}
                stopColor={s}
              />
            ))}
          </linearGradient>
        </defs>
        <circle
          cx={cc}
          cy={cc}
          r={r}
          fill="none"
          stroke={track}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={`${arcLen} ${circ}`}
        />
        <circle
          cx={cc}
          cy={cc}
          r={r}
          fill="none"
          stroke={`url(#${gid})`}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeDasharray={`${arcLen * frac} ${circ}`}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: size * 0.04,
        }}
      >
        <div
          style={{
            fontSize: size * 0.3,
            fontWeight: 700,
            lineHeight: 1,
            color: valueColor,
            letterSpacing: "-0.02em",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {(Math.round(frac * max * 10) / 10).toFixed(1)}
        </div>
        {label && (
          <div
            style={{
              fontSize: size * 0.075,
              fontWeight: 600,
              color: labelColor || valueColor,
              marginTop: size * 0.02,
              letterSpacing: "0.01em",
            }}
          >
            {label}
          </div>
        )}
        {sub && (
          <div
            style={{
              fontSize: size * 0.055,
              color: labelColor || "rgba(0,0,0,0.45)",
              marginTop: 2,
            }}
          >
            {sub}
          </div>
        )}
      </div>
    </div>
  );
}
