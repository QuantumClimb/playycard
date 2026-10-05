import React from "react";
import Svg, { G, Path, Circle, Rect, Defs, LinearGradient, Stop } from "react-native-svg";
import { CharacterConfig } from "../../types/card";

interface PlayySvgCompositionProps {
  config: CharacterConfig;
  width?: number | string;
  height?: number | string;
}

export const PlayySvgComposition: React.FC<PlayySvgCompositionProps> = ({
  config,
  width = 280,
  height = 360,
}) => {
  const { head, pose, symbol, background, primaryColor = "#06B6D4" } = config;
  const stroke = "#0F172A";

  return (
    <Svg width={width} height={height} viewBox="0 0 500 650">
      <Defs>
        <LinearGradient id="bgCosmos" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#1E1B4B" />
          <Stop offset="50%" stopColor="#312E81" />
          <Stop offset="100%" stopColor="#4C1D95" />
        </LinearGradient>
        <LinearGradient id="bgHills" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="#BAE6FD" />
          <Stop offset="60%" stopColor="#7DD3FC" />
          <Stop offset="100%" stopColor="#34D399" />
        </LinearGradient>
        <LinearGradient id="bgCastle" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="#FCE7F3" />
          <Stop offset="100%" stopColor="#F472B6" />
        </LinearGradient>
      </Defs>

      {/* Layer 1: Background Scenery */}
      {background === "space-world" ? (
        <G id="bg-space">
          <Rect x="0" y="0" width="500" height="650" fill="url(#bgCosmos)" rx="24" />
          <Circle cx="80" cy="90" r="4" fill="#FFF" />
          <Circle cx="420" cy="140" r="5" fill="#FDE047" />
          <Circle cx="350" cy="70" r="3" fill="#FFF" />
          <Circle cx="150" cy="220" r="6" fill="#F472B6" />
          <Circle cx="400" cy="480" r="40" fill="#818CF8" opacity={0.3} />
        </G>
      ) : background === "magic-castle" ? (
        <G id="bg-castle">
          <Rect x="0" y="0" width="500" height="650" fill="url(#bgCastle)" rx="24" />
          <Path d="M100 500 L100 350 L150 300 L200 350 L200 500 Z" fill="#DDD6FE" stroke={stroke} strokeWidth={4} />
          <Path d="M300 500 L300 320 L350 270 L400 320 L400 500 Z" fill="#C4B5FD" stroke={stroke} strokeWidth={4} />
        </G>
      ) : (
        <G id="bg-default">
          <Rect x="0" y="0" width="500" height="650" fill="url(#bgHills)" rx="24" />
          <Path d="M-50 480 Q120 380 300 460 Q450 520 550 450 L550 650 L-50 650 Z" fill="#10B981" stroke={stroke} strokeWidth={5} />
          <Path d="M-50 530 Q200 470 550 540 L550 650 L-50 650 Z" fill="#059669" stroke={stroke} strokeWidth={5} />
        </G>
      )}

      {/* Layer 2: Character Body & Pose */}
      <G id="character-body" transform="translate(250, 360)">
        <Path
          d="M-50 40 C-60 120 -40 200 -25 220 L25 220 C40 200 60 120 50 40 Z"
          fill={primaryColor}
          stroke={stroke}
          strokeWidth={7}
        />

        <Circle cx="0" cy="100" r="34" fill="#FFFFFF" stroke={stroke} strokeWidth={6} />
        {symbol === "flame" ? (
          <Path d="M-10 112 Q0 82 0 92 Q10 82 10 112 Z" fill="#EF4444" stroke={stroke} strokeWidth={2} />
        ) : symbol === "lightning" ? (
          <Path d="M5 82 L-12 100 L0 100 L-5 118 L12 98 L0 98 Z" fill="#EAB308" stroke={stroke} strokeWidth={2} />
        ) : symbol === "heart" ? (
          <Path d="M0 112 C-18 95 -18 85 0 92 C18 85 18 95 0 112 Z" fill="#EC4899" stroke={stroke} strokeWidth={2} />
        ) : (
          <Path d="M0 86 L6 98 L18 100 L9 108 L12 120 L0 113 L-12 120 L-9 108 L-18 100 L-6 98 Z" fill="#FACC15" stroke={stroke} strokeWidth={2} />
        )}

        {pose === "hero" ? (
          <G id="arms-hero">
            <Path d="M-50 50 C-90 60 -90 110 -55 120" fill="none" stroke={primaryColor} strokeWidth={24} strokeLinecap="round" />
            <Path d="M-50 50 C-90 60 -90 110 -55 120" fill="none" stroke={stroke} strokeWidth={7} strokeLinecap="round" />
            <Path d="M50 50 C90 60 90 110 55 120" fill="none" stroke={primaryColor} strokeWidth={24} strokeLinecap="round" />
            <Path d="M50 50 C90 60 90 110 55 120" fill="none" stroke={stroke} strokeWidth={7} strokeLinecap="round" />
          </G>
        ) : pose === "wave" ? (
          <G id="arms-wave">
            <Path d="M-50 50 C-90 40 -100 -20 -70 -50" fill="none" stroke={primaryColor} strokeWidth={24} strokeLinecap="round" />
            <Path d="M-50 50 C-90 40 -100 -20 -70 -50" fill="none" stroke={stroke} strokeWidth={7} strokeLinecap="round" />
            <Path d="M50 50 C90 80 80 140 55 160" fill="none" stroke={primaryColor} strokeWidth={24} strokeLinecap="round" />
            <Path d="M50 50 C90 80 80 140 55 160" fill="none" stroke={stroke} strokeWidth={7} strokeLinecap="round" />
          </G>
        ) : (
          <G id="arms-jump">
            <Path d="M-50 50 C-100 20 -90 -40 -60 -60" fill="none" stroke={primaryColor} strokeWidth={24} strokeLinecap="round" />
            <Path d="M-50 50 C-100 20 -90 -40 -60 -60" fill="none" stroke={stroke} strokeWidth={7} strokeLinecap="round" />
            <Path d="M50 50 C100 20 90 -40 60 -60" fill="none" stroke={primaryColor} strokeWidth={24} strokeLinecap="round" />
            <Path d="M50 50 C100 20 90 -40 60 -60" fill="none" stroke={stroke} strokeWidth={7} strokeLinecap="round" />
          </G>
        )}
      </G>

      {/* Layer 3: Character Head */}
      <G id="character-head" transform="translate(250, 240)">
        <Circle cx="0" cy="0" r="95" fill={primaryColor} stroke={stroke} strokeWidth={8} />

        <Circle cx="-32" cy="-10" r="16" fill="#FFFFFF" stroke={stroke} strokeWidth={5} />
        <Circle cx="-28" cy="-10" r="8" fill="#0F172A" />
        <Circle cx="-25" cy="-14" r="3" fill="#FFFFFF" />

        <Circle cx="32" cy="-10" r="16" fill="#FFFFFF" stroke={stroke} strokeWidth={5} />
        <Circle cx="36" cy="-10" r="8" fill="#0F172A" />
        <Circle cx="39" cy="-14" r="3" fill="#FFFFFF" />

        <Circle cx="-52" cy="18" r="12" fill="#F472B6" opacity={0.7} />
        <Circle cx="52" cy="18" r="12" fill="#F472B6" opacity={0.7} />

        <Path d="M-22 25 Q0 55 22 25" fill="none" stroke={stroke} strokeWidth={7} strokeLinecap="round" />

        {head === "sparkyy" ? (
          <G id="spark-crown">
            <Path d="M-40 -90 L-20 -140 L0 -100 L20 -140 L40 -90 Z" fill="#FACC15" stroke={stroke} strokeWidth={6} />
          </G>
        ) : head === "dreamyy" ? (
          <G id="dream-antenna">
            <Path d="M0 -95 L0 -135" stroke={stroke} strokeWidth={7} />
            <Circle cx="0" cy="-145" r="15" fill="#EC4899" stroke={stroke} strokeWidth={5} />
          </G>
        ) : (
          <G id="blue-ears">
            <Circle cx="-80" cy="-60" r="24" fill={primaryColor} stroke={stroke} strokeWidth={7} />
            <Circle cx="80" cy="-60" r="24" fill={primaryColor} stroke={stroke} strokeWidth={7} />
          </G>
        )}
      </G>
    </Svg>
  );
};
