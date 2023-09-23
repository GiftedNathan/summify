import React from 'react'

const Hero = () => {
  return (
    <section className="max-w-screen-md m-auto lg:mt-16 md:mt-14 mt-6  p-4">
        <h1 className="font-thin lg:text-5xl md:text-4xl text-3xl text-center text-slate-900">
            Summarize Articles <br/>with the Ultimate<span className="block font-extrabold text-[120%] bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-800">
            AI-Powered Tool
            </span>
        </h1>
        <p className='mt-5 md:text-lg text-sm text-slate-300 text-center'>Streamline your reading experience with SummarEase, a free and open-source article summarizer that converts extensive articles into easily digestible summaries.</p>
    </section>
  )
}

export default Hero