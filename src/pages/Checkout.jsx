import React,{useState, useEffect} from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import axios from 'axios';



const stripePromise = loadStripe("pk_test_51MlrVBJ7mapjSr4rb6XsMKY6dP1OjqSFj1aLQXuiDGal2bTUdv8C200RbhYIO1iYnABFG3KIG5b3G8MqJ13a9pVJ00QhPxATVf");

const Checkout = () => {
   
    const [clientsecret, setClientSecret]=useState('')
    const {prod_id}='1';
    console.log(prod_id)
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/v1/order/create-payment-intent/1/")
        .then((res) =>{
            console.log(res);
            window.location.replace(res.data);
        })
    }, [])
    
    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret:clientsecret
      };

      

     
  return (
    <div className='container'>
        {clientsecret && (
        <Elements  stripe={stripePromise} options={options}>
             <PaymentForm/>
        </Elements>
      )}
    </div>
  )
}

export default Checkout