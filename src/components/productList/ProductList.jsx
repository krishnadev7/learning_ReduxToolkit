import React, { useState } from 'react';
import './productList.css';
import products from '../../api/products.json';
import BeforeCartButtons from './cartButtons/BeforeCartButtons';
import AfterCartButtons from './cartButtons/AfterCartButtons';
import { useSelector } from 'react-redux';
import CartButtons from './cartButtons';

const ProductList = () => {
  const {cartCount,cartList} = useSelector((state) => state.cart)
  return (
    <section className='container'>
      {products.map((product, key) => (
        <div className='product-container' key={key}>
          <img src={product?.image} alt={product?.name} />
          <h3>{product?.title}</h3>
            <CartButtons product={product}/>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
