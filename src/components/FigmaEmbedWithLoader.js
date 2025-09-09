import React, { useState } from "react";
import Preloader from "../img/Preloader.png";

export default function FigmaEmbedWithLoader({ url, height = "620px", thumbnail = "/img/preloader.png" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ width: "100%", height, position: "relative", overflow: "hidden" }}>
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `url(${Preloader})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Four Ripple Loader */}
          <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="0" fill="none" stroke="#1a73e8" strokeWidth="4">
              <animate attributeName="r" from="0" to="36" dur="1.6s" begin="0s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="1" to="0" dur="1.6s" begin="0s" repeatCount="indefinite" />
            </circle>
            <circle cx="40" cy="40" r="0" fill="none" stroke="#1a73e8" strokeWidth="4">
              <animate attributeName="r" from="0" to="36" dur="1.6s" begin="0.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="1" to="0" dur="1.6s" begin="0.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="40" cy="40" r="0" fill="none" stroke="#1a73e8" strokeWidth="4">
              <animate attributeName="r" from="0" to="36" dur="1.6s" begin="0.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="1" to="0" dur="1.6s" begin="0.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="40" cy="40" r="0" fill="none" stroke="#1a73e8" strokeWidth="4">
              <animate attributeName="r" from="0" to="36" dur="1.6s" begin="1.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="1" to="0" dur="1.6s" begin="1.2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      )}

      <iframe
        src={url}
        allowFullScreen
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      ></iframe>
    </div>
  );
}
