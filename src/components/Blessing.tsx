import { motion } from 'framer-motion'

export function Blessing() {
  return <section className="section cradle-section">
    <div className="cradle-layout">
      <motion.div className="cradle-art" initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .25 }} transition={{ duration: 1 }} aria-hidden="true">
        <span className="cradle-star star-one">✦</span><span className="cradle-star star-two">✧</span><span className="cradle-star star-three">✦</span>
        <svg viewBox="0 0 460 500" role="presentation">
          <circle className="cradle-orbit" cx="230" cy="250" r="190" />
          <path className="cradle-line" d="M105 300V182c0-68 56-123 125-123s125 55 125 123v118" />
          <path className="cradle-line cradle-detail" d="M128 195c32-31 66-47 102-47s70 16 102 47M137 215c29-23 60-35 93-35s64 12 93 35" />
          <path className="cradle-line" d="M104 286c68 41 184 41 252 0l-18 83c-56 45-160 45-216 0z" />
          <path className="cradle-line cradle-detail" d="M123 316c69 34 145 34 214 0M145 370l-17 48m187-48 17 48M106 420c73 42 175 42 248 0" />
          <path className="cradle-line cradle-detail" d="M176 300v67m54-58v79m54-79v58" />
          <path className="cradle-line cradle-detail" d="M230 60v42m-18-21h36" />
        </svg>
        <span className="cradle-monogram">Х</span>
      </motion.div>
      <motion.div className="cradle-copy" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .8, delay: .15 }}>
        <p className="eyebrow light">Ханшайымның алғашқы тойы</p>
        <h2>Бір бесік жыры — <em>мың ақ тілек</em></h2>
        <p className="cradle-message">Бүгін бесігіміз тербеліп, шаңырағымыз шаттыққа толады. Осы әдемі сәттің жылуы әр жүрекке жетсін.</p>
        <div className="cradle-date"><span>29</span><i></i><span>Қараша · 2026</span></div>
      </motion.div>
    </div>
  </section>
}
