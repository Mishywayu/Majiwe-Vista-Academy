import React from 'react'
import Curriculumn from './components/curriculumn'
import TypicalDay from './components/typical'

export default function Junior() {
  return (
    <div>
      {/* THE FIRST DIV */}
      <div className='bg-blue-900 h-64'>
        <h1 className='text-center text-white text-6xl font-bold pt-20'>Secrets of MVA Junior School</h1>
      </div>

      {/* THE SECOND DIV */}
      <div className='p-24 pt-8 pb-8'>
        <div>
          <h3 className='text-center text-xl font-semibold'>Open learning environment</h3>
          <p className='text-center text-lg font-thin'>We are studying in large classrooms called HUBs which are connected to little studios for smaller group works.</p>
        </div>

        <div className='pt-6'>
          <h3 className='text-center text-xl font-semibold'>Collaboration of 50 students</h3>
          <p className='text-center text-lg font-thin'>Classes include 50 students who work and study together in flexible groupings.</p>
        </div>

        <div className='pt-6'>
          <h3 className='text-center text-xl font-semibold'>Team teaching</h3>
          <p className='text-center text-lg font-thin'>Two South African teachers and one Kenyan form an expert team.</p>
        </div>

        <div className='pt-6'>
          <h3 className='text-center text-xl font-semibold'>Support</h3>
          <p className='text-center text-lg font-thin'>Two assistant teachers, one resource teacher and ne SEN teachers 
            are there to assist, to teach and to support the students.
          </p>
        </div>

        <div className='pt-6'>
          <h3 className='text-center text-xl font-semibold'>Individual timetables</h3>
          <p className='text-center text-lg font-thin'>Grade level group of students are divided into smaller groups to enable students' 
            individualized lessons. The beginnings and endings of the school days vary according 
            to the class-level timetables.
          </p>
        </div>

        <div className='pt-6'>
          <h3 className='text-center text-xl font-semibold'>Breaks</h3>
          <p className='text-center text-lg font-thin'>It is time to play and participate in games or just have a walk andtalk with yourfriend!</p>
        </div>

        <div className='pt-6'>
          <h3 className='text-center text-xl font-semibold'>Health lunch</h3>
          <p className='text-center text-lg font-thin'>Students are encouraged to bring a healthy lunch with them or enjoy one from our canteen.</p>
        </div>

        <div className='pt-6'>
          <h3 className='text-center text-xl font-semibold'>Slight amount of homework</h3>
          <p className='text-center text-lg font-thin'>The amount of homework must be reasonable for children to have time for playing, free reading, physical activities and friends and family!</p>
        </div>
      </div>

      {/* CURRICULUMN DIV */}
      {/* <Curriculumn /> */}

      {/* TYPICAL DAY DIV */}
      <TypicalDay />
    </div>
  )
}
