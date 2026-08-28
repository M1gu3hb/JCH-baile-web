import { ImageResponse } from "next/og";

export const alt = "JCH Baile · Clases de baile en Xochimilco";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#08120e",
        color: "#f6f1e7",
        padding: "70px 76px",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: 999,
          border: "2px solid rgba(211,255,87,.46)",
          right: -80,
          top: -170,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 360,
          height: 360,
          borderRadius: 999,
          background: "#ff6038",
          filter: "blur(100px)",
          opacity: 0.3,
          right: 120,
          bottom: -230,
          display: "flex",
        }}
      />
      <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#d3ff57" }}>
        Jardines Club Hípico presenta
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
        <div style={{ display: "flex", fontSize: 94, lineHeight: 0.94, letterSpacing: -5, fontWeight: 650 }}>
          Tu cuerpo ya sabe.
        </div>
        <div style={{ display: "flex", fontSize: 78, lineHeight: 1, letterSpacing: -4, color: "#d3ff57", marginTop: 14 }}>
          Solo hay que escucharlo.
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 25 }}>
        <span>Salsa · Bachata · Cumbia · Baile de salón</span>
        <span style={{ color: "#d3ff57" }}>Xochimilco, CDMX</span>
      </div>
    </div>,
    size,
  );
}
