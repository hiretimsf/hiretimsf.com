import { useCallback, useEffect, useRef } from "react";

// Shared audio context to prevent hitting browser limits
let globalAudioCtx: AudioContext | null = null;

// Cache for decoded audio buffers
const bufferCache = new Map<string, AudioBuffer>();

/**
 * Custom React hook to load and play a sound from a given URL using the Web Audio API.
 * Uses a shared AudioContext and caches buffers for performance.
 */
export function useSound(url: string) {
  const bufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    // Initialize shared AudioContext
    if (!globalAudioCtx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;

      if (AudioContextClass) {
        globalAudioCtx = new AudioContextClass();
      } else {
        console.warn("Web Audio API is not supported in this browser.");
        return;
      }
    }

    // Check cache first
    if (bufferCache.has(url)) {
      bufferRef.current = bufferCache.get(url) || null;
      return;
    }

    // Load and decode
    const audioCtx = globalAudioCtx;
    if (audioCtx) {
      fetch(url)
        .then((res) => res.arrayBuffer())
        .then((data) => audioCtx.decodeAudioData(data))
        .then((decoded) => {
          bufferRef.current = decoded;
          bufferCache.set(url, decoded);
        })
        .catch((err) => {
          console.error(`Failed to load sound from ${url}:`, err);
        });
    }
  }, [url]);

  const play = useCallback(
    (volume: number = 1) => {
      if (globalAudioCtx && bufferRef.current) {
        // Ensure context is running (handle suspended state)
        if (globalAudioCtx.state === "suspended") {
          globalAudioCtx.resume().catch((e) => {
            console.error("Failed to resume AudioContext:", e);
          });
        }

        try {
          const source = globalAudioCtx.createBufferSource();
          const gainNode = globalAudioCtx.createGain();

          source.buffer = bufferRef.current;
          gainNode.gain.value = volume;

          source.connect(gainNode);
          gainNode.connect(globalAudioCtx.destination);
          source.start(0);
        } catch (e) {
          console.error("Error playing sound:", e);
        }
      }
    },
    [], // Dependencies
  );

  return play;
}
