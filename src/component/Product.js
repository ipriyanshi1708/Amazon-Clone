import React, {useState, useEffect} from 'react'
import "./Product.css"

const Product = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        products();
    }, []);

    const products = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setProduct(jsonData);
    }
  return (
    <div>
    <div className="container">
   
          {product.map((values) => {
              return (
                  <>
                
                      <div className="product__box">
                          <div className="product__content">
                              <h5>{values.title} </h5>
                              <p>{values.description}</p>
                              <p>{values.price}</p>
                          </div>
                          <img src={values.image} alt="Product Image" className='product__image' />
                          <div className='button'>
                              <button >Add to Basket</button>
                          </div>
                      </div>
                  </>
              )
          })}
          </div>
    </div>
  )
}

export default Product