import React from 'react'
import Vision from './components/vision'
import Mission from './components/mision'
import Principal from './components/principal'

export default function About() {
  return (
    <div>
      {/* THE FIRST DIV */}
      <div className='bg-blue-900 h-64'>
        <h1 className='text-center text-white text-6xl font-bold pt-20'>Kenyan Education</h1>
      </div>

      {/* THE SECOND DIV */}
      <div>
        <p className='p-36 pt-12 text-center text-xl font-thin'>Kenya's education system is internationally acclaimed for its impressive track record in producing high-ranking student performance, while nurturing well-being for individuals and communities. The Kenyan Education system from Kenya is widely regarded around the world as the best and foremost education system.
          <br />
          <br />
          The Kenyan education system is often regarded as one of the best in the world due to its unique approach to teaching and learnin. The system places a strong focus on individualized learning, where students are encouraged to pursue thier interest and teachers adapt their methods to suit each students' needs.
          The system allows for a more holistic evaluation of a student's growth and understanding throughout their schooling journey and promotes instilling the passion for lifelong learning.
          The Kenyan model includes generous time for recess and a less stressful, more balanced approach to education, which has been linked to high student happiness and impressive academic outcomes.
        </p>
      </div>

      {/* THE THIRD DIV */}
      <div className='bg-pink-400 h-32'>
        <p className='text-white text-center text-4xl font-sans pt-5'>The focus must always be in learning.</p>
        <p className='text-white text-center text-4xl font-sans pt-2'>The fundamental tool for that is collaboration.</p>
      </div>

      {/* OUR VISION */}
      <Vision />

      {/* OUR MISSION */}
      <Mission />

      {/* PRINCIPAL MESSAGE  */}
      <Principal />

      {/* THE LAST DIV */}
      <div className='bg-blue-950 h-auto'>
        <img src='/images/logo2.png' alt='' className='w-64 h-48 mx-auto'/>
        <p className='p-24 pt-0 text-white text-center text-lg font-thin'>Majiwe Vista Academy is owned by Educonnect Africa and managed in collaoration with Educonnect Global, Kenya. Educonnect is a 
          company that specializes in emulationg the global success of the Kenyan education model, while recognizing the autonomy of 
          local cultures and communities.
          <br />
          <br />
          Educonnect Empowered Schools offer world-class education inspired by Kenyan learing system where trust in the teaching profession 
          facilitate autonomy of teachers to make sure we always keep learning and well-being of children at the heart of our story.
        </p>
      </div>

      {/* *FOOTER* */}
    </div>
  )
}
