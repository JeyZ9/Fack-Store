import React, { useContext, useEffect, useState } from 'react'
//import context
import { SidebarContext } from '../contexts/SidebarContext'
//import context
import { CartContext } from '../contexts/CartContext'
// import icons
import { BsBag } from 'react-icons/bs'
// import link
import { Link } from 'react-router-dom'
import Logo from '../imgs/logo.svg'

function Header() {
  //Header state
  const [isActive, setIsActice] = useState(false)
  const { isOpen, setIsOpen } = useContext(SidebarContext)
  const { itemAmount } = useContext(CartContext)
  //event listner
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActice(true) : setIsActice(false)
    })
  })
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to={'/'} className="">
          <div className=''>
            <img src={ Logo } className='w-[40px]' alt="" />
          </div>
        </Link>
        {/* cart */}
        <div className="flex relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <BsBag className='text-2xl' />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
        </div>
      </div>
    </header>
  )
}

export default Header