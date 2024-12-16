import React from 'react'

const Slider = () => {
  return (
    <nav
      className={`bg-transparent bg-opacity-70 sm:fixed w-full bg-none px-2 sm:px-14 py-4 text--300 flex justify-center justify-between items-center `}
    >
      <div className="text-2xl gap-4 font-bold flex items-center">
        {/* <IoLogoFreebsdDevil className="text-3xl border-2  rounded-full" /> */}
        <img src="" alt="" />
        My Portfolio's
      </div>
      <div className="block sm:hidden ">Menu</div>
        <div className='h-screen absolute w-full'></div>
    </nav>
  )
}

export default Slider
