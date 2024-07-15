import React from 'react'
import NavBar from '../components/NavBar'

const HomePage: React.FC = () => {

  // const img1 = "src/assets/img/cheemita.webp"

  return (
    <>
      <div className={`grid grid-cols-1 bg-primary`}>
        <NavBar />
        <>
          <main className='h-screen w-screen p-10'>
            {/* <img className='w-10' src={img1} alt="" /> */}
          </main>
        </>
      </div>
    </>
  )
}

export default HomePage
