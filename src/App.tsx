import { Hero } from './components/Hero'
import { Invitation } from './components/Invitation'
import { Countdown } from './components/Countdown'
import { EventDetails } from './components/EventDetails'
import { RSVP } from './components/RSVP'
import { Footer } from './components/Footer'
import { MusicToggle } from './components/MusicToggle'

export default function App() {
  return <><MusicToggle /><Hero /><main><Invitation /><Countdown /><EventDetails /><section className="section invitation-quote"><p>{'\u041a\u0435\u043b\u0456\u04a3\u0456\u0437\u0434\u0435\u0440, \u049b\u0443\u0430\u043d\u044b\u0448\u044b\u043c\u044b\u0437\u0493\u0430 \u043e\u0440\u0442\u0430\u049b \u0431\u043e\u043b\u044b\u04a3\u044b\u0437\u0434\u0430\u0440!'}</p></section><RSVP /></main><Footer /></>
}
