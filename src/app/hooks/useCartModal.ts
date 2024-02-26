'use client'
import { useContext } from 'react'
import { CartModalContext } from '../context/CartModalContext'

export const useCartModal = () => {
  const context = useContext(CartModalContext)

  if (context === undefined) {
    throw new Error('useCartModal must be used within a CartProvider')
  }

  return context
}
