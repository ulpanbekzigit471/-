import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { event } from '../data/event'
import { Ornament } from './Ornament'

export function Hero() {
  const openInvitation = () => document.querySelector('#invitation')?.scrollIntoView({ behavior: 'smooth' })
  return <header className="hero section-dark" id="top">
    <div className="hero-pattern" aria-hidden="true" /><div className="hero-glow" aria-hidden="true" />
    <div className="hero-frame" aria-hidden="true"><span>&#10022;</span></div>
    <motion.div className="hero-content" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: .18, delayChildren: .2 } } }}>
      <motion.p className="eyebrow light hero-eyebrow" variants={rise}>&#1178;&#1201;&#1088;&#1084;&#1077;&#1090;&#1090;&#1110; &#1179;&#1086;&#1085;&#1072;&#1179;&#1090;&#1072;&#1088;!</motion.p>
      <motion.div variants={rise}><Ornament className="ornament-light" /></motion.div>
      <motion.h1 variants={rise}>&#1041;&#1077;&#1089;&#1110;&#1082; &#1090;&#1086;&#1081;</motion.h1>
      <motion.span className="hero-name" variants={rise}>{event.childName}</motion.span>
      <motion.p className="hero-copy" variants={rise}>&#1057;&#1110;&#1079;&#1076;&#1077;&#1088;&#1076;&#1110; &#1072;&#1103;&#1091;&#1083;&#1099; &#1179;&#1099;&#1079;&#1099;&#1084;&#1099;&#1079; &#1061;&#1072;&#1085;&#1096;&#1072;&#1081;&#1099;&#1084;&#1085;&#1099;&#1187;<br className="desktop-break" /> &#1073;&#1077;&#1089;&#1110;&#1082; &#1090;&#1086;&#1081;&#1099;&#1085;&#1072; &#1072;&#1088;&#1085;&#1072;&#1083;&#1171;&#1072;&#1085; &#1072;&#1179; &#1076;&#1072;&#1089;&#1090;&#1072;&#1088;&#1093;&#1072;&#1085;&#1099;&#1084;&#1099;&#1079;&#1076;&#1099;&#1187;<br className="desktop-break" /> &#1179;&#1072;&#1076;&#1110;&#1088;&#1083;&#1110; &#1179;&#1086;&#1085;&#1072;&#1171;&#1099; &#1073;&#1086;&#1083;&#1091;&#1171;&#1072; &#1096;&#1072;&#1179;&#1099;&#1088;&#1072;&#1084;&#1099;&#1079;.</motion.p>
      <motion.button className="button button-gold" onClick={openInvitation} variants={rise}>&#1064;&#1072;&#1179;&#1099;&#1088;&#1091;&#1076;&#1099; &#1072;&#1096;&#1091; <ArrowDown size={15} /></motion.button>
    </motion.div>
    <div className="scroll-hint">{event.dateLabel}<span /></div>
  </header>
}

const rise = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: .75, ease: 'easeOut' as const } } }
