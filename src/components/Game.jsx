import React from 'react';
import Sample from '../assets/sample.png';
import Sample1 from '../assets/sample1.png';
import Sample2 from '../assets/sample2.png';
import Sample3 from '../assets/sample3.png';
import Sample4 from '../assets/sample4.png';

const Game = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Game Designs
          </p>
          <p className='py-6'> Some of my game designs using Unreal Engine</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Sample})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          > 
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-pink-600 tracking-wider">
              Forest Temple
            </span>
          </div>

          </div>

          <div
            style={{ backgroundImage: `url(${Sample1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-pink-600 tracking-wider">
              Forest Temple
            </span>
          </div>
           
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Sample2})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >

          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-pink-600 tracking-wider">
              Shrooms
            </span>
          </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Sample3})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-pink-600 tracking-wider">
              Hachiko Statue
            </span>
          </div>
          </div>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Sample4})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
          <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl font-bold text-pink-600 tracking-wider">
              The Witcher
            </span>
          </div>
          </div>

            
        </div>
      </div>
    </div>
  );
};

export default Game;