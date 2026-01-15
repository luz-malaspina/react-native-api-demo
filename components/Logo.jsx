import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Text, TSpan } from "react-native-svg"

export const Logo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label="LuzGames logo"
    viewBox="0 0 620 120"
    {...props}
  >
    <Defs>
      <LinearGradient id="a" x1={0} x2={1} y1={0} y2={1}>
        <Stop offset="0%" stopColor="#7C3AED" />
        <Stop offset="60%" stopColor="#22C55E" />
        <Stop offset="100%" stopColor="#06B6D4" />
      </LinearGradient>
    </Defs>
    <Text
      y={92}
      fill="#0F172A"
      style={{
        fontFamily:
          "system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Arial,sans-serif",
        fontWeight: 800,
        fontSize: 96,
      }}
    >
      {"\n    Luz"}
      <TSpan fill="url(#a)">{"Games"}</TSpan>
    </Text>
  </Svg>
)

