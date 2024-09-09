import React, { useState } from 'react';
import { useProductContext } from '../context/product-context';
import CartItem from './CartItem';
import Image from 'next/image';

const CartItems = () => {
  const [open, setOpen] = useState(false);
    const { cartItems, totalCartItemsCount, totalOrderPrice, resetCartItem } = useProductContext();

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const onClickHandler = () => {
      resetCartItem();
      setOpen(false);
    }

  return (
  <>
    <div className='flex-1 bg-[#fff] h-fit p-4 rounded-md'>
      <h2 className='font-bold text-xl text-red'>Your Cart ({totalCartItemsCount})</h2>
      {cartItems.length ? (
        <div>
          <div className='divide-y divide-rose-100'>
        {cartItems.map((item, idx) => (
            <CartItem key={idx} cartItem={item}/>
        ))}
      </div>
      <div className='flex justify-between mt-3'>
        <p className='text-rose-500 text-sm'>Order Total</p>
        <p className='font-bold text-rose-900'>${totalOrderPrice.toFixed(2)}</p>
      </div>
      <div className='flex justify-center p-2 mt-3 bg-rose-50 rounded-md'>
        <Image src={"/assets/images/icon-carbon-neutral.svg"} alt='img' width={20} height={10}/>
        <p className='text-sm'>This is a <span className='font-medium text-rose-900'>carbon-neutral</span> delivery.</p>
      </div>
      <button className='w-full mt-3 bg-red rounded-[20px] py-2 text-[#fff] hover:bg-green' onClick={() => setOpen(true)}>Confirm Order</button>
        </div>
      ) : (
      <div className='p-4  flex flex-col gap-4 justify-center items-center'>
        <Image src={'/assets/images/illustration-empty-cart.svg'} alt='img' width={80} height={80}/>
        <p className='text-rose-500 text-sm'>Your added item will appear here</p>
      </div>
      )}
    </div>
  </>
  )
}

export default CartItems