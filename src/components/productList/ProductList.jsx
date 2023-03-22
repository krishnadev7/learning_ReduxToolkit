import React, { useState } from 'react';
import './productList.css';
import products from '../../api/products.json';
import BeforeCartButtons from './cartButtons/BeforeCartButtons';
import AfterCartButtons from './cartButtons/AfterCartButtons';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const {cartCount} = useSelector((state) => state.cart)
  return (
    <section className='container'>
      {products.map((product, key) => (
        <div className='product-container' key={key}>
          <img src={product?.image} alt={product?.name} />
          <h3>{product?.title}</h3>
          {cartCount > 0 ? (
            <AfterCartButtons />
          ) : (
            <BeforeCartButtons />
          )}
        </div>
      ))}
    </section>
  );
};

export default ProductList;
