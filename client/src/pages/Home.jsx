import React from 'react';
import { poster } from '../assets';

const Home = () => {
  return (
    <section className='max-w-7xl mx-auto'>
      <div className='relative mb-xl m:mb-2xl'>
        <div className='max-w-container mt-2xl'>
          <div className='flex flex-col relative items-center text-center'>
            <h1 className='font-bold text-[#222328] text-[45px]'>
              DALL-E
            </h1>
            <div className="mt-xs m:grid m:grid-cols-12">
              <p className="col-span-12 m:col-span-8 m:col-start-3 text-subhead justify-center text-[18px] text-cta w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                DALL-E is an AI system that can create realistic images and art from a description in natural language.
              </p>
            </div>
          </div>

          <div className="flex mt-3 min-h-s justify-center">
            <button 
              href="/create-post" 
              className="text-white bg-[#375cb0] font-medium text-sm w-40 px-5 py-2.5 text-center rounded-full text-nowrap min-h-button flex items-center justify-center gap-[0.3em] text-cta"
              target="_blank" 
              rel="noreferrer"
            >
              Try DALL-E
              <svg width="0.625rem" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L9 1M9 1H2.5M9 1V7.22222" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span className="sr-only">(opens in a new window)</span>
            </button>
          </div>

          <div className="flex justify-center mt-10">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl bg-gray-100 rounded-lg">
              <img src={poster} alt="Poster" className="w-full rounded-lg" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home;