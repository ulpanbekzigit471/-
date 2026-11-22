import { FormEvent, useState } from 'react'
import { Check, Send } from 'lucide-react'

export function RSVP() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setSent(true) }
  return <section className="section rsvp-section" id="rsvp"><div className="rsvp-card">
    <p className="eyebrow light">{'\u049a\u0430\u0442\u044b\u0441\u0443\u044b\u04a3\u044b\u0437\u0434\u044b \u0445\u0430\u0431\u0430\u0440\u043b\u0430\u04a3\u044b\u0437'}</p><h2>{'\u0422\u043e\u0439\u0493\u0430'} <em>{'\u043a\u0435\u043b\u0435\u0441\u0456\u0437 \u0431\u0435?'}</em></h2>
    {sent ? <div className="success-message" role="status"><Check size={30} /><h3>{'\u0416\u0430\u0443\u0430\u0431\u044b\u04a3\u044b\u0437\u0493\u0430 \u0440\u0430\u049b\u043c\u0435\u0442!'}</h3><p>{'\u041e\u0441\u044b \u049b\u0443\u0430\u043d\u044b\u0448\u0442\u044b \u043a\u04af\u043d\u0434\u0456 \u0431\u0456\u0440\u0433\u0435 \u049b\u0430\u0440\u0441\u044b \u0430\u043b\u0443\u0493\u0430 \u0430\u0441\u044b\u049b\u043f\u044b\u0437.'}</p><button type="button" className="text-button" onClick={() => setSent(false)}>{'\u0416\u0430\u0443\u0430\u043f\u0442\u044b \u04e9\u0437\u0433\u0435\u0440\u0442\u0443'}</button></div> : <form onSubmit={handleSubmit}>
      <label>{'\u049a\u043e\u043d\u0430\u049b \u0441\u0430\u043d\u044b'}<select name="guests" defaultValue="1"><option value="1">{'\u0031 \u049b\u043e\u043d\u0430\u049b'}</option><option value="2">{'\u0032 \u049b\u043e\u043d\u0430\u049b'}</option><option value="3">{'\u0033 \u049b\u043e\u043d\u0430\u049b'}</option><option value="4">{'\u0034 \u049b\u043e\u043d\u0430\u049b'}</option><option value="5">{'\u0035 \u043d\u0435\u043c\u0435\u0441\u0435 \u043e\u0434\u0430\u043d \u043a\u04e9\u043f'}</option></select></label>
      <fieldset><legend>{'\u0416\u0430\u0443\u0430\u0431\u044b\u04a3\u044b\u0437'}</legend><label className="radio-label"><input type="radio" name="attendance" value="yes" defaultChecked /> {'\u049a\u0443\u0430\u043d\u0430 \u043a\u0435\u043b\u0435\u043c\u0456\u043d'}</label><label className="radio-label"><input type="radio" name="attendance" value="no" /> {'\u04e8\u043a\u0456\u043d\u0456\u0448\u043a\u0435 \u049b\u0430\u0440\u0430\u0439, \u043a\u0435\u043b\u0435 \u0430\u043b\u043c\u0430\u0439\u043c\u044b\u043d'}</label></fieldset>
      <button className="button button-gold" type="submit">{'\u0416\u0430\u0443\u0430\u043f\u0442\u044b \u0436\u0456\u0431\u0435\u0440\u0443'} <Send size={14} /></button>
    </form>}
  </div></section>
}
