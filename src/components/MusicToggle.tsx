import { useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      try {
        await audio.play()
      } catch {
        setIsPlaying(false)
      }
    } else {
      audio.pause()
    }
  }

  return <>
    <audio
      ref={audioRef}
      src="/audio/toi-koriniz.mp3"
      loop
      preload="none"
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
      onError={() => setIsPlaying(false)}
      aria-hidden="true"
    />
    <button
      type="button"
      className="music-toggle"
      onClick={toggleMusic}
      aria-label={isPlaying ? '\u04d8\u0443\u0435\u043d\u0434\u0456 \u0442\u043e\u049b\u0442\u0430\u0442\u0443' : '\u04d8\u0443\u0435\u043d\u0434\u0456 \u049b\u043e\u0441\u0443'}
      aria-pressed={isPlaying}
      title="\u0422\u043e\u0439 \u043a\u04e9\u0440\u0456\u04a3\u0456\u0437 (2018) · \u049a\u0443\u0430\u043d\u044b\u0448 & \u049a\u0430\u0440\u043b\u044b\u0493\u0430\u0448"
    >
      {isPlaying ? <Pause size={17} fill="currentColor" /> : <Play size={17} fill="currentColor" />}
      <span>{isPlaying ? 'Pause' : 'Play'}</span>
    </button>
  </>
}
