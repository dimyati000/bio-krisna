"use client";

import { useRef, useState } from "react";
import { SoundOffIcon, SoundOnIcon } from "./icons";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const soundAction = isMuted ? "Aktifkan suara video" : "Matikan suara video";

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted && video.paused) {
      void video.play().catch(() => {
        video.muted = true;
        setIsMuted(true);
      });
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        className="background-video"
        src="/IMG_8234.mp4"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
        onVolumeChange={() => setIsMuted(videoRef.current?.muted ?? true)}
      />
      <button
        type="button"
        className="sound-toggle"
        onClick={toggleSound}
        aria-label="Suara video"
        aria-pressed={!isMuted}
        title={soundAction}
      >
        {isMuted ? <SoundOffIcon /> : <SoundOnIcon />}
      </button>
    </>
  );
}
