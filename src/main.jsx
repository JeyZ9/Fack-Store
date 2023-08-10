import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// product provider
import ProductProvider from './contexts/ProductContext'
// sidebar provider
import SidebarProvider from './contexts/SidebarContext'
// cart provider
import CartProvider from './contexts/CartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>,
)
