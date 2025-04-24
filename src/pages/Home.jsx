import React from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import JobSearch from '../components/JobSearch'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='mx-4 md:mx-8 flex flex-col md:flex-row items-start gap-6 mt-6 mb-10'>
        <Profile />
        <JobSearch />
      </div>
    </div>
  )
}

export default Home
    