import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../../redux/cart';
import './cartButtons.css';

const AfterCartButtons = ({cartCount,productId}) => {
  const dispatch = useDispatch();
  return (
    <div className='after-cart'>
      <button
        className='cart-counter-button'
        onClick={() => dispatch(decrement(productId))}
      >
        -
      </button>
      <div className='cart-count'>{cartCount}</div>
      <div className='cart-counter-button' onClick={() => dispatch(increment(productId))}>
        +
      </div>
    </div>
  );
};

export default AfterCartButtons;
