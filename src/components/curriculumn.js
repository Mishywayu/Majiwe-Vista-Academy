import React from 'react'

export default function Curriculumn() {
  return (
    <div>
        <div className='h-32 bg-pink-500'>
            <h1 className='text-white text-center text-6xl font-bold p-7'>Curriculum</h1>
            <div className='flex w-full h-screen mt-3'>
                {/* 1ST */}
                <div className='w-1/2 p-24 text-justify'>
                    <p className='font-thin'>In MVA Curriculumn, we have localized the Kenyan core curriculumn to suit SouthAfrican school culture. The holistic 
                        perspective to educate and to bring up the students is apparent in our principles and in our cross-curricular approach.
                    </p>

                    <h2 className='text-xl font-semibold pt-8'>MVA Curriculum is built on the principles of</h2>
                    <ol className='p-2 font-thin'>
                        <li>1. Uniqueness of each student and right to a good education</li>
                        <li>2. Humanity, general knowledge, ability, and equality</li>
                        <li>3. Cultural diversity as a richness</li>
                        <li>4. Necessity of a sustainable way of life</li>
                    </ol>

                    <h2 className='text-xl font-semibold pt-4'>The mission of basic education is driven by</h2>
                    <ol className='p-2 font-thin'>
                        <li>1. Educational task</li>
                        <li>2. Social task</li>
                        <li>3. Cultural task and</li>
                        <li>4. Future-related task</li>
                    </ol>
                </div>
                <div className='w-1/2 h-full bg-home-img bg-no-repeat bg-cover bg-center'></div>
            </div>

            {/* 2ND */}
            <div className='flex w-full h-screen mt-3'>
                <div className='w-1/2 h-full bg-home-img bg-no-repeat bg-cover bg-center'></div>
                <div className='w-1/2 p-24 text-justify'>
                    <h3 className='text-2xl font-semibold pb-5'>Transversal competences are embedded in our curriculum to support 
                        students to achieve vital 21st centuty skills!
                    </h3>
                    <ol className='font-thin'>
                        <li>1. Thinking and learning to learn</li>
                        <li>2. Cultural competence, interaction and self-sexpression</li>
                        <li>3. Taking care of oneself and managing daily life</li>
                        <li>4. Multiliteracy</li>
                        <li>5. ICT competence</li>
                        <li>6. Working life competence and enterpreneurship</li>
                        <li>7. Participation, involement and building a sustainable future</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}
