import React, { useContext } from 'react'
// import link
import { Link } from 'react-router-dom'
//import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
//import cart context
import { CartContext } from '../contexts/CartContext'

function CartItem({ item }) {
  const { removeFromCart, increaseAmount, decreaseAmount } =  useContext(CartContext)
  const { id, title, image, price, amount } = item
  return (
    <div className='flex gap-x-4 py-1 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className="w-full min-h-[130px] flex items-center gap-x-4">
        <Link to={`/product/${id}`} className="">
          <img className='max-w-[60px]' src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{title}</Link>
            {/* remove icon */}
            <div onClick={()=> removeFromCart(id)} className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* qty */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              {/* minus icon */}
              <div onClick={()=> decreaseAmount(id)} className="flex-1 flex justify-center items-center cursor-pointer h-full">
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className='h-full flex justify-center items-center px-2'>
                {amount}
              </div>
              {/* plus icon */}
              <div onClick={()=> increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className='flex-1 flex justify-around items-center'>$ {price}</div>
            {/* final price */}
            {/* make the price at 2 decimals */}
            <div className='flex-1 flex justify-end items-center text-primary font-medium'>
              {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem