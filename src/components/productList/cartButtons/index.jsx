import React from 'react';
import { useSelector } from 'react-redux';
import AfterCartButtons from './AfterCartButtons';
import BeforeCartButtons from './BeforeCartButtons';

const CartButtons = ({ product }) => {
  const { cartList } = useSelector(state => state.cart);
  const cartCount = cartList?.find(item => item?.id === product.id)?.count;
  return <>{cartCount > 0 ? <AfterCartButtons product={product} cartCount={cartCount}/> : <BeforeCartButtons product={product}/>}</>;
};

export default CartButtons;
