"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type AudioNodes = {
  context: AudioContext;
  source: AudioBufferSourceNode;
  gain: GainNode;
};

function addTone(
  data: Float32Array,
  sampleRate: number,
  start: number,
  duration: number,
  frequency: number,
  volume: number,
) {
  const first = Math.floor(start * sampleRate);
  const length = Math.floor(duration * sampleRate);
  for (let index = 0; index < length && first + index < data.length; index += 1) {
    const progress = index / length;
    const envelope = Math.exp(-8 * progress);
    data[first + index] += Math.sin((index / sampleRate) * Math.PI * 2 * frequency) * envelope * volume;
  }
}

function addKick(data: Float32Array, sampleRate: number, start: number) {
  const first = Math.floor(start * sampleRate);
  const length = Math.floor(0.22 * sampleRate);
  let phase = 0;
  for (let index = 0; index < length && first + index < data.length; index += 1) {
    const progress = index / length;
    const frequency = 82 - progress * 40;
    phase += (Math.PI * 2 * frequency) / sampleRate;
    data[first + index] += Math.sin(phase) * Math.exp(-7 * progress) * 0.78;
  }
}

function addShaker(data: Float32Array, sampleRate: number, start: number, volume: number) {
  const first = Math.floor(start * sampleRate);
  const length = Math.floor(0.065 * sampleRate);
  let previous = 0;
  for (let index = 0; index < length && first + index < data.length; index += 1) {
    const progress = index / length;
    const noise = Math.random() * 2 - 1;
    const highPassed = noise - previous * 0.72;
    previous = noise;
    data[first + index] += highPassed * Math.exp(-10 * progress) * volume;
  }
}

function createLatinLoop(context: AudioContext) {
  const tempo = 108;
  const beat = 60 / tempo;
  const duration = beat * 8;
  const length = Math.ceil(duration * context.sampleRate);
  const buffer = context.createBuffer(2, length, context.sampleRate);

  for (let channel = 0; channel < buffer.numberOfChannels; channel += 1) {
    const data = buffer.getChannelData(channel);

    [0, 2, 4, 6].forEach((step) => addKick(data, context.sampleRate, step * beat));
    [0.75, 2.5, 3.5, 4.75, 6.5, 7.5].forEach((step) =>
      addTone(data, context.sampleRate, step * beat, 0.075, 1650, 0.34),
    );
    [1, 3, 5, 7].forEach((step) =>
      addTone(data, context.sampleRate, step * beat, 0.16, 210, 0.36),
    );
    Array.from({ length: 16 }).forEach((_, step) =>
      addShaker(data, context.sampleRate, step * (beat / 2), step % 2 ? 0.16 : 0.1),
    );
  }

  return buffer;
}

export function AudioToggle() {
  const [playing, setPlaying] = useState(false);
  const nodes = useRef<AudioNodes | null>(null);

  useEffect(() => {
    return () => {
      nodes.current?.source.stop();
      void nodes.current?.context.close();
    };
  }, []);

  async function toggle() {
    if (!nodes.current) {
      const context = new AudioContext();
      const source = context.createBufferSource();
      const gain = context.createGain();
      source.buffer = createLatinLoop(context);
      source.loop = true;
      gain.gain.value = 0.13;
      source.connect(gain).connect(context.destination);
      source.start();
      nodes.current = { context, source, gain };
      setPlaying(true);
      return;
    }

    if (nodes.current.context.state === "running") {
      await nodes.current.context.suspend();
      setPlaying(false);
    } else {
      await nodes.current.context.resume();
      setPlaying(true);
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="audio-toggle"
      aria-pressed={playing}
      aria-label={playing ? "Pausar ritmo original" : "Activar ritmo original"}
    >
      <span className={`audio-toggle__bars ${playing ? "is-playing" : ""}`} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>{playing ? "Ritmo activo" : "Activar ritmo"}</span>
      {playing ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
    </button>
  );
}

