import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { event } from '../data/event'

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }
function getTimeLeft(): TimeLeft {
  const distance = Math.max(0, event.date.getTime() - Date.now())
  return { days: Math.floor(distance / 86400000), hours: Math.floor(distance / 3600000) % 24, minutes: Math.floor(distance / 60000) % 60, seconds: Math.floor(distance / 1000) % 60 }
}

export function Countdown() {
  const [left, setLeft] = useState(getTimeLeft)
  useEffect(() => { const timer = window.setInterval(() => setLeft(getTimeLeft()), 1000); return () => window.clearInterval(timer) }, [])
  const items = [['days', '\u043a\u04af\u043d'], ['hours', '\u0441\u0430\u0493\u0430\u0442'], ['minutes', '\u043c\u0438\u043d\u0443\u0442'], ['seconds', '\u0441\u0435\u043a\u0443\u043d\u0434']] as const
  return <section className="countdown-section">
    <motion.div className="countdown-inner" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>
      <p className="eyebrow light">{'\u041a\u0435\u0437\u0434\u0435\u0441\u043a\u0435\u043d\u0448\u0435'}</p><h2>{'\u0422\u043e\u0439\u0493\u0430 \u0434\u0435\u0439\u0456\u043d'}</h2>
      <div className="timer" aria-label="\u0422\u043e\u0439\u0493\u0430 \u0434\u0435\u0439\u0456\u043d \u049b\u0430\u043b\u0493\u0430\u043d \u0443\u0430\u049b\u044b\u0442">{items.map(([key, label]) => <div className="timer-item" key={key}><strong>{String(left[key]).padStart(2, '0')}</strong><span>{label}</span></div>)}</div>
    </motion.div>
  </section>
}
