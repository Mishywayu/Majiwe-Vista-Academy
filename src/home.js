import React from 'react'

export default function Home() {
  return (
    <div>
    {/* THE FIRST CONTAINER - THE INTRO */}
      <div className='flex w-full h-96 bg-home-img bg-no-repeat bg-cover bg-center'>
        <div className='w-full sm:w-1/2 h-full bg-sky-400 bg-opacity-70'>
            <p className='text-center text-white text-3xl font-thin p-16'>We are a learning community dedicated to inspiring success and nurturing well-being. Majiwe Vista education excellence is at the heart of all we do, because we believe that everyone deserves the best possible future.</p>
        </div>
        <div className='w-full sm:hidden h-full'></div>
      </div>

    {/* THE SECOND CONTAINER - THE DASHBOARD-ISH */}
    <div className='bg-black flex w-full h-64'>
        <div className='w-1/5 h-full bg-pink-500'>
            <div className='w-24 h-24 mt-8 mx-auto'>
                <img src='/images/students.png' alt='' className='w-full h-full' />
            </div>
            <h1 className='text-white text-center text-4xl font-semibold pt-2'>300+</h1>
            <p className='text-white text-center text-lg font-thin'>Students</p>
        </div>

        <div className='w-1/5 h-full bg-sky-500'>
            <div className='w-24 h-24 mt-8 mx-auto'>
                <img src='/images/staff.png' alt='' className='w-full h-full' />
            </div>
            <h1 className='text-white text-center text-4xl font-semibold pt-2'>46+</h1>
            <p className='text-white text-center text-lg font-thin'>Pedagogical Staff</p>
        </div>

        <div className='w-1/5 h-full bg-yellow-300'>
            <div className='w-24 h-24 mt-8 mx-auto'>
                <img src='/images/flag.png' alt='' className='w-full h-full' />
            </div>  
            <h1 className='text-white text-center text-4xl font-semibold pt-2'>12+</h1>
            <p className='text-white text-center text-lg font-thin'>Nationalities</p>
        </div>

        <div className='w-1/5 h-full bg-purple-500'>
            <div className='w-24 h-24 mt-8 mx-auto'>
                <img src='/images/educators.png' alt='' className='w-full h-full' />
            </div>
            <h1 className='text-white text-center text-4xl font-semibold pt-2'>25+</h1>
            <p className='text-white text-center text-lg font-thin'>Kenyan Educators</p>
        </div>

        <div className='w-1/5 h-full bg-green-400'>
            <div className='w-24 h-24 mt-8 mx-auto'>
                <img src='/images/ratio.png' alt='' className='w-full h-full' />
            </div>
            <h1 className='text-white text-center text-4xl font-semibold pt-2'>1 : 8</h1>
            <p className='text-white text-center text-lg font-thin'>Ration of Educators per Students</p>
        </div>
    </div>

    {/* HIGLIGHTS CONTAINER */}
    <div className='h-96'>
        <h1 className='text-center text-5xl font-semibold mt-8'>Highlights</h1>

            <div className='container mx-auto p-4 mt-5'>
                <div className='grid grid-cls-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {/* images goes here */}
                    <div className='relative overflow-hidden'>
                        <img src='/images/image2.jpg' alt=''/>
                    </div>
                    <div className='relative overflow-hidden'>
                        <img src='images/image5.jpg' alt=''/>
                    </div>
                    <div className='relative overflow-hidden'>
                        <img src='images/image1.jpg' alt=''/>
                    </div>
                    <div className='relative overflow-hidden'>
                        <img src='images/image3.jpg' alt=''/>
                    </div>
                    <div className='relative overflow-hidden'>
                        <img src='images/image4.jpg' alt=''/>
                    </div>
                    <div className='relative overflow-hidden'>
                        <img src='images/image2.jpg' alt=''/>
                    </div>
                    <div className='relative overflow-hidden'>
                        <img src='images/image3.jpg' alt=''/>
                    </div>
                    <div className='relative overflow-hidden'>
                        <img src='images/image2.jpg' alt=''/>
                    </div>
                </div>
            </div>
    </div>

    {/* THE FOURTH DIV */}
    <div className='bg-blue-900 h-64 mt-36'>
        <p className='text-white text-center text-3xl p-12 pb-4'>"Our goal is to witness the joy of learning. This is supported by child-centered approach, Kenyan curriculum implementation with cross-curricular themes and team-teaching methods."</p>
        <h2 className='text-pink-500 text-center text-lg font-thin'>Dr. Vilita Willie, Founding Principal - Majiwe Vista Academy</h2>
    </div>

    {/* THE LAST DIV */}
    <div className='bg-black h-96 flex w-full'>
        <div className='w-2/5 h-full bg-blue-950 p-24'>
            <h1 className='text-4xl text-yellow-300'>Admissions for August 2023 - July</h1>
            <h1 className='text-4xl text-yellow-300 mt-2'>2024 Academic Year</h1>
            <button className='mt-8 p-4 w-32 text-center text-white text-lg font-serif bg-pink-300'>Apply</button>
        </div>
        <div className='w-3/5 h-full bg-home1-img bg-no-repeat bg-center bg-cover'></div>
    </div>

    {/* END OF HOME PAGE */}
    </div>
  )
}
