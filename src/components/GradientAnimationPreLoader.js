import React, { useState, useEffect, useRef } from "react";
import StackbillLoader from "./StackbillLoader";
import styles from "./FigmaEmbedWithLoader.module.css";

export default function FigmaEmbedWithLoader({ url, height = "620px" }) {
  const [loaded, setLoaded] = useState(false); // iframe onLoad
  const [showLoader, setShowLoader] = useState(true); // custom loader visibility
  const loaderTimeout = useRef();

  // useEffect(() => {
  //   return () => {
  //     clearTimeout(loaderTimeout.current);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (loaded) {
  //     // Keep loader for at least 4.5s after iframe onLoad
  //     loaderTimeout.current = setTimeout(() => {
  //       setShowLoader(false);
  //     }, 10000);
  //   }
  // }, [loaded]);

  // Animated dots for 'Still loading...' message
  const [dotCount, setDotCount] = useState(1);
  useEffect(() => {
    if (showLoader) {
      const interval = setInterval(() => {
        setDotCount((prev) => (prev % 3) + 1);
      }, 12000); // 12 seconds
      return () => clearInterval(interval);
    }
  }, [showLoader]);

  return (
    <div style={{ width: "100%", height, position: "relative", overflow: "hidden" }}>
      {showLoader && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, #EC1F48 0%, #4169E1 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Water ripple effect behind the loader */}
          <div className={styles.rippleEffect}></div>
          {/* Stackbill Loader Animation - smaller size */}
          <div style={{ width: 120, maxWidth: "80vw", margin: "0 auto", position: "relative", zIndex: 2 }}>
            <StackbillLoader />
          </div>
          {/* New loader animation */}
          <div style={{ marginTop: 32 }}>
            <div className="loader"></div>
            <style>{`
              .loader {
                width: 30px;
                aspect-ratio: 4;
                background: radial-gradient(circle closest-side,#fff 90%,#0000) 0/calc(100%/3) 100% space;
                clip-path: inset(0 100% 0 0);
                animation: l1 1s steps(4) infinite;
              }
              @keyframes l1 {
                to { clip-path: inset(0 -34% 0 0); }
              }
            `}</style>
          </div>
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