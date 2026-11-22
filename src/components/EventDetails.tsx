import { motion } from 'framer-motion'
import { CalendarDays, Clock3, MapPin } from 'lucide-react'
import { event } from '../data/event'
import { Ornament } from './Ornament'

export function EventDetails() {
  const details = [
    { Icon: CalendarDays, label: '\u041a\u04af\u043d\u0456', value: event.dateLabel, sub: event.weekday },
    { Icon: Clock3, label: '\u0411\u0430\u0441\u0442\u0430\u043b\u0443\u044b', value: event.time, sub: '\u049a\u043e\u043d\u0430\u049b\u0442\u0430\u0440\u0434\u044b \u043a\u04af\u0442\u0435\u043c\u0456\u0437' },
    { Icon: MapPin, label: '\u041c\u0435\u043a\u0435\u043d\u0436\u0430\u0439\u044b', value: event.venue, sub: event.address },
  ]
  return <section className="section details-section" id="details">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>
      <div className="section-heading"><Ornament /><h2 className="details-title">{'\u049a\u0443\u0430\u043d\u044b\u0448\u044b\u043c\u044b\u0437\u0493\u0430'} <em>{'\u043e\u0440\u0442\u0430\u049b \u0431\u043e\u043b\u044b\u04a3\u044b\u0437\u0434\u0430\u0440'}</em></h2></div>
      <div className="detail-grid">{details.map(({ Icon, label, value, sub }) => <article className="detail-card" key={label}><Icon size={24} strokeWidth={1.3} /><p className="eyebrow">{label}</p><strong className={label === '\u041a\u04af\u043d\u0456' ? 'event-date' : undefined}>{value}</strong>{sub && <span>{sub}</span>}</article>)}</div>
    </motion.div>
  </section>
}
