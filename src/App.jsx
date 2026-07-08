import React from 'react'
import Hero from './components/Hero'

export default function App(){
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <section id="projects">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <p className="text-slate-600">Project cards will go here.</p>
        </section>
      </main>
    </div>
  )
}
