import React from 'react';
import { useLocation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheackOut from './CheackOut';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE);
const Payment = () => {


    const location=useLocation()
    const { amount } = location.state || {}
    return (
        <div>
            <h2>this is payment page </h2>
            <Elements  stripe={stripePromise}>
                <CheackOut totalPayment={amount}></CheackOut>
            </Elements>

            
        </div>
    );
};

export default Payment;