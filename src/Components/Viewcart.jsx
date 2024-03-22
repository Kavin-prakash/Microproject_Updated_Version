import React, { useEffect, useState } from 'react';
import './Viewcart.css';
import { Card, Container,Button } from 'react-bootstrap';
import { useContext } from 'react';
import { cartContext } from '../App';


export const Viewcart = ({product}) => {
  const {cart,setcart}=useContext(cartContext);
  const[total,setTotal]=useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price),0));

  },[cart]);
  const removeCart=()=>{
    setcart(cart.filter((c)=>c.id!==product.id))
  };
  
  return (
    <>
    <h1 className='mt-2'>Cart Products</h1>
    <Container className='cart-container mt-4'>
    {cart.map((product)=>(
      
      <Card style={{ width: '18rem' }} key={product.id}>
      <Card.Img className='card-img' variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
          <Button
            className="btn btn-danger"
            variant="primary"
            onClick={removeCart}
          >
            Remove Cart
          </Button>
       

        
      </Card.Body>
    </Card>
    
    ))
      
    }
    </Container>
    
    <h1>Total Amount :{total} </h1>
    </>
  )
}
