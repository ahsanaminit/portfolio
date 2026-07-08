import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } }
  }
  const item = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }

  return (
    <header className="bg-gradient-to-br from-sky-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-8">
        <motion.div variants={container} initial="hidden" animate="visible" className="flex-1">
          <motion.h1 variants={item} className="text-4xl sm:text-5xl font-extrabold tracking-tight">Ahsan Amin</motion.h1>
          <motion.p variants={item} className="mt-3 text-lg text-slate-600">Frontend Engineer — I build beautiful, performant web experiences.</motion.p>

          <motion.div variants={item} className="mt-6 flex gap-3">
            <a href="#projects" className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-md shadow hover:bg-sky-700">View projects</a>
            <a href="mailto:ahsanaminit@gmail.com" className="inline-flex items-center px-4 py-2 border border-slate-200 rounded-md text-slate-700 hover:bg-slate-50">Contact</a>
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 rounded-lg bg-gradient-to-tr from-sky-100 to-indigo-50 flex items-center justify-center shadow-xl">
          {/* Animated SVG placeholder */}
          <motion.svg initial={{ scale: 0.95 }} animate={{ scale: 1.02 }} transition={{ yoyo: Infinity, duration: 3 }} width="140" height="140" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <motion.circle cx="50" cy="50" r="30" fill="url(#g)" initial={{ r: 28 }} animate={{ r: 34 }} transition={{ yoyo: Infinity, duration: 2 }} />
          </motion.svg>
        </motion.div>
      </div>
    </header>
  )
}
