import React, {createContext, useState, useEffect} from 'react'

//create context
export const CartContext = createContext()

function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  //item amount state
  const [itemAmount, setItemAmount] = useState(0)
  // total price state
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  })
  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0)
      setItemAmount(amount)
     }
  }, [cart])
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1}
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return {...item, amount: cartItem.amount + 1}
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart,newItem])
    }
  }
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
  }
  // clearCart
  const clearCart = () => {
    setCart([])
  }

  // increate amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    addToCart(cartItem, id)
  }

  // decrese amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => {
      return item.id === id
    })
    if (cartItem) {
      const newItem = cart.map((item) => {
        if (item.id === id) {
          return {...item, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newItem)
    }
      if (cartItem.amount < 2 ) {
        removeFromCart(id)
      }
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
