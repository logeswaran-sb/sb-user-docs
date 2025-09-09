import React, { useState } from "react";
import StackbillLoader from "./StackbillLoader";
import styles from "./FigmaEmbedWithLoader.module.css";

/**
 * @typedef {Object} FigmaEmbedProps
 * @property {string} url
 * @property {string} [height]
 * @property {string} [thumbnail]
 * @property {string} [className]
 */

/**
 * @param {FigmaEmbedProps} props
 */
export default function FigmaEmbedWithLoader({
  url,
  height = "620px",
  thumbnail,
  className = "",
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div
      className={className}
      style={{ width: "100%", height, position: "relative", overflow: "hidden" }}
    >
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg,#FC5C7D 0%, #6A82FB 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Ripple effect */}
          <div className={styles.rippleEffect}></div>
          {/* Loader or Thumbnail */}
          <div
            style={{
              width: 120,
              maxWidth: "80vw",
              margin: "0 auto",
              position: "relative",
              zIndex: 2,
            }}
          >
            {thumbnail ? (
              <img
                src={thumbnail}
                alt="Figma preview"
                style={{ width: "100%", borderRadius: 8 }}
              />
            ) : (
              <StackbillLoader />
            )}
          </div>
          {/* Animated loading text */}
          <div
            style={{
              marginTop: 32,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 100,
              lineHeight: "100px",
            }}
          >
            {"Loading...".split("").map((char, i) => (
              <span
                key={i}
                style={{
                  animation: `blur-text 1.2s ${i / 5}s infinite alternate`,
                  filter: "blur(0px)",
                  color: "#fff",
                  fontFamily: "'Quattrocento Sans', sans-serif",
                  fontSize: 28,
                  margin: "0 5px",
                }}
              >
                {char}
              </span>
            ))}
          </div>
          {/* Keyframes */}
          <style>
            {`
              @keyframes blur-text {
                0% { filter: blur(0px); }
                100% { filter: blur(4px); }
              }
            `}
          </style>
        </div>
      )}
      {/* Figma iframe */}
      <iframe
        src={url}
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: isLoaded ? "block" : "none", // Optional: prevent flicker
        }}
      />
    </div>
  );
}